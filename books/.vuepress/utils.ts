import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export function getPath(dir: string) {
  return (filePath: string = '.') => {
    const result = path.relative(__dirname, path.resolve(getDirname(dir), filePath)).slice(2)
    return ['', '.', './'].indexOf(filePath) > -1 ? result + '/' : result
  }
}
