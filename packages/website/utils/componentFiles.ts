import fs from 'fs'
import path from 'path';

export async function getComponentByName(name: string) {
  const postsDirectory = path.join(process.cwd(), 'components')
  const filenames = fs.readdirSync(postsDirectory)

  if(filenames.includes(name)){
    const filePath = path.join(postsDirectory, name)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    return fileContent
  }

  return null
};
