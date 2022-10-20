export const fetchArticle = function () {
  const list = [] as any
  const modules = import.meta.glob('./*.md')
  Object.keys(modules).forEach((key) => {
    list.push(modules[key])
  })
  return list.map((item) => {
    return defineAsyncComponent(item)
  })
}
