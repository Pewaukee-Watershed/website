import { promises as fs } from 'fs'
import path from 'path'
import parseMd from 'parse-md'

const getArticles = async (): Promise<any[]> => {
  const dataDir = path.resolve('articles')
  const files = await fs.readdir('articles')
  return await Promise.all(files.map(async file => {
    const content = await fs.readFile(path.join(dataDir, file), 'utf8')
    const { metadata: { name } } = parseMd(content)
    return { name, file }
  }))
}

export default getArticles
