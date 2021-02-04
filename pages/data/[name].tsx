import { GetStaticPaths, GetStaticProps } from 'next'
import getData from '../../lib/getData'
import getArticles from '../../lib/getArticles'
import { readFile } from 'jsonfile'
import path from 'path'
import styles from './data.module.scss'
import Head from 'next/head'
import WithSidebar from '../../components/WithSidebar'
import Chart from '../../components/Chart'

const Main = (props): JSX.Element => {
  // TODO: Data with custom chart type
  return (
    <>
      <Head>
        <title>{props.name} {'\u2022'} Data {'\u2022'} Pewaukee Watershed</title>
      </Head>
      <WithSidebar>
        <div className={ styles.content }>
          <h1>Data</h1>
          <h2>Name of data: {props.name}</h2>
          {props.chart !== undefined && (
            <Chart
              {...props.chart}
            />
          )}
        </div>
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
