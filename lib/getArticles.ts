import { promises as fs } from 'fs'
import path from 'path'
import { readFile } from 'jsonfile'

const getArticles = async (): Promise<any[]> => {
  const dataDir = path.resolve('articles')
  const files = await fs.readdir('articles')
  return await Promise.all(files.map(async file => {
    const data = await readFile(path.join(dataDir, file))
    data.file = file
    return data
  }))
}

export default getArticles