import { GetStaticPaths, GetStaticProps } from 'next'
import { promises as fs } from 'fs'
import path from 'path'
import styles from './article.module.scss'
import Head from 'next/head'
import WithSidebar from '../../components/WithSidebar'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import subSup from 'remark-supersub'
import parseMd from 'parse-md'

const Main = (props): JSX.Element => {
  const { 
    metadata: { name, author },
    content 
  } = props
  return (
    <>
      <Head>
        <title>{name} {'\u2022'} Data {'\u2022'} Pewaukee Watershed</title>
      </Head>
      <WithSidebar>
        <div className={ styles.content }>
          <p className={styles.title}>{name}</p>
          <p>By <span className={styles.author}>{author}</span></p>
          <ReactMarkdown className={styles.text} plugins={[gfm]}>{content}</ReactMarkdown>
        </div>
      </WithSidebar>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesDir = path.resolve('articles')
  const paths = await fs.readdir(articlesDir)
  return {
    paths: paths.map(p => ({
      params: {
        name: p.split('.')[0]
      }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const dataDir = path.resolve('articles')
  const file = await fs.readFile(path.join(dataDir, `${params.name}.md`), 'utf8')
  return {
    props: parseMd(file)
  }
}

export default Main
