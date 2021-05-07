import pageComponents from '@internal/page-components'

export default (ctx) => {
  if (pageComponents) {
    for (const [name, component] of Object.entries(pageComponents)) {
      ctx.Vue.component(name, component)
    }
  }
}
