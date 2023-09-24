import { getAllMdx } from '@/utils/mdx'
import { MDXFrontMatter } from '@/utils/types'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
// import rehypePrism from 'rehype-prism-plus'
// import remarkGfm from 'remark-gfm'

type PostPageProps = {
  prev: MDXFrontMatter | null
  next: MDXFrontMatter | null
  frontMatter: MDXFrontMatter
  mdx: any
}

const PostPage: NextPage<PostPageProps> = ({ prev, next, mdx, frontMatter }) => {
  return (
    <div className="text-black">
      <h1>pages pages/[slug]</h1>
      <MDXRemote {...mdx} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const mdxFiles = getAllMdx().map((post) => ({
    params: {
      slug: post.frontMatter.slug,
    },
  }))

  return {
    paths: mdxFiles,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string }

  const mdxFiles = getAllMdx()
  const postIndex = mdxFiles.findIndex((f) => f.frontMatter.slug === slug)
  const post = mdxFiles[postIndex]

  const { frontMatter, content } = post

  const mdxContent = await serialize(content, {
    mdxOptions: {
      // remarkPlugins: [remarkGfm],
      // rehypePlugins: [rehypePrism],
    },
    scope: frontMatter,
  })

  return {
    props: {
      frontMatter,
      mdx: mdxContent,
      previous: mdxFiles[postIndex + 1] || null,
      next: mdxFiles[postIndex - 1] || null,
    },
  }
}

export default PostPage
