// 获取所有的 Markdown 文件
export const modules = import.meta.glob('./*.md', {
  import: 'default',
  eager: true,
})
