import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { MDXFrontMatter } from './types'

const root = process.cwd()
const postsPath = path.join(root, 'posts')

const getMdx = (filename: string) => {
  const filepath = path.join(postsPath, filename)
  const file = fs.readFileSync(filepath, 'utf-8')

  const { data, content } = matter(file)

  return {
    content,
    frontMatter: {
      ...data,
      slug: filename.replace('.mdx', ''),
    } as MDXFrontMatter,
  }
}

export const getAllMdx = () => {
  const posts = fs.readdirSync(postsPath).map((p) => getMdx(p))

  return posts.sort((a, b) => {
    return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
  })
}
