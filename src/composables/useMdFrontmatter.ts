/**
 * 获取md文件前写的frontmatter
 * @param module 组件内容 import xx from '/xx?raw'
 * @returns 组件前面 --- 的内容
 */
export interface frontmatter {
  title: string
  time: string
  content: string
}

export const useMdFrontmatter = (module: string): frontmatter => {
  const regAllCharacter = /---([\s\S]*)---$/m
  const frontmatterContent = module.match(regAllCharacter)
  const frontmatter = { title: '', time: '', content: '' }
  if (frontmatterContent) {
    const frontmatterContentArray = frontmatterContent[1].trim().split(/[\n]/)

    frontmatterContentArray.forEach((i) => {
      const r = i.split(':')
      frontmatter[r[0].trim()] = r[1].trim()
    })
  }
  return frontmatter
}
