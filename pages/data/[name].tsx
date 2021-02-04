import { GetStaticPaths, GetStaticProps } from 'next'
import getData from '../../lib/getData'
import getArticles from '../../lib/getArticles'
import { readFile } from 'jsonfile'
import path from 'path'
import Head from 'next/head'
import WithSidebar from '../../components/WithSidebar'
/* import DataChart from '../../components/DataChart' */
import * as ChartJs from 'react-chartjs-2'
import {useEffect} from 'react'

const Main = (props): JSX.Element => {
  // TODO: Data with custom chart type
    return (
    <>
      <Head>
        <title>{ props.name } { '\u2022' } Data { '\u2022' } Pewaukee Watershed</title>
      </Head>
      <WithSidebar>
        <h1>Data</h1>
        <h2>Name of data: { props.name }</h2>
        <ChartJs.Bar
          {...props.chart}
        />
      </WithSidebar>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getData()
  return {
    paths: data.map(data => ({
      params: {
        name: data.file.split('.')[0]
      }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const dataDir = path.resolve('data')
  const data = await readFile(path.join(dataDir, `${params.name}.json`))
  return {
    props: data
  }
}

export default Main