import { GetStaticPaths, GetStaticProps } from 'next'
import getArticles from '../../lib/getArticles'
import { readFile } from 'jsonfile'
import path from 'path'
import styles from './article.module.scss'
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
          <h1>Article</h1>
          <h2>Name: {props.name}</h2>
          <p>Content: {props.content}</p>
        </div>
      </WithSidebar>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getArticles()
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
  const dataDir = path.resolve('articles')
  const data = await readFile(path.join(dataDir, `${params.name}.json`))
  return {
    props: data
  }
}

export default Main
