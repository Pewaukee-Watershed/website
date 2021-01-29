import { promises as fs } from 'fs'
import path from 'path'
import { readFile } from 'jsonfile'

const getData = async (): Promise<any[]> => {
  const dataDir = path.resolve('data')
  const files = await fs.readdir('data')
  return await Promise.all(files.map(async file => {
    const data = await readFile(path.join(dataDir, file))
    data.file = file
    return data
  }))
}

export default getData
