import { Footer } from '@/components/Footer'
import { Page } from '@/components/Page'
import { Prose } from '@/components/Prose'
import { getAllMdx } from '@/utils/mdx'
import { MDXFrontMatter } from '@/utils/types'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import remarkPrism from 'remark-prism'

type PostPageProps = {
  prev: MDXFrontMatter | null
  next: MDXFrontMatter | null
  frontMatter: MDXFrontMatter
  mdx: any
}

const components = {
  Test: (props: any) => (
    <a className="!text-green-700" {...props}>
      aaa Test
    </a>
  ),
}

const PostPage: NextPage<PostPageProps> = ({ prev, next, mdx, frontMatter }) => {
  return (
    <Page {...frontMatter}>
      <div className="text-black flex flex-col items-stretch">
        <Prose>
          <MDXRemote {...mdx} components={components} />
        </Prose>
        <Footer />
      </div>
    </Page>
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
      remarkPlugins: [remarkPrism, remarkGfm],
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
