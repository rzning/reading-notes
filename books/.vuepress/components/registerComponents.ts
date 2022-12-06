import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export const useRegisterComponentsPlugin = registerComponentsPlugin({
  components: {
    BookInfo: path.resolve(__dirname, './BookInfo.vue')
  }
})
