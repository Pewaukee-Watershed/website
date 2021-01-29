import { GetStaticPaths, GetStaticProps } from 'next'
import getData from '../../lib/getData'
import { readFile } from 'jsonfile'
import path from 'path'

const Main = (props): JSX.Element => {
  return (
    <>
      <h1>Data</h1>
      <h2>Name of data: {props.name}</h2>
      <a href='/'>Home</a>
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
