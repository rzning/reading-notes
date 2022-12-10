import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

const getPath = (filePath: string) => path.resolve(__dirname, filePath)

export const useRegisterComponentsPlugin = registerComponentsPlugin({
  components: {
    BookInfo: getPath('./BookInfo.vue'),
    LargeTable: getPath('./LargeTable.vue')
  }
})
