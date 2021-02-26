import { GetStaticPaths, GetStaticProps } from 'next'
import getData from '../../lib/getData'
import { readFile } from 'jsonfile'
import path from 'path'
import styles from './data.module.scss'
import Head from 'next/head'
import WithSidebar from '../../components/WithSidebar'
import Chart from '../../components/Chart'
import Link from 'next/link'

const Main = (props): JSX.Element => {
  return (
    <>
      <Head>
        <title>{props.name} {'\u2022'} Data {'\u2022'} Pewaukee Watershed</title>
      </Head>
      <WithSidebar>
        <div className={styles.content}>
          <h2>Data: {props.name}</h2>
          {props.chart !== undefined && (
            <Chart
              {...props.chart}
            />
          )}
          {props.significance !== undefined && (
            <Link href={props.significance}>
              Why this matters.
            </Link>
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

export const getStaticProps: GetStaticProps = async ({ params: { name } }) => {
  if (typeof name !== 'string') throw new Error('No name param')
  const dataDir = path.resolve('data')
  const data = await readFile(path.join(dataDir, `${name}.json`))
  return {
    props: data
  }
}

export default Main
