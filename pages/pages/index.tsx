import { getAllMdx } from '@/utils/mdx'
import { MDXFrontMatter } from '@/utils/types'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

type PageProps = {
  posts: Array<MDXFrontMatter>
}

const IndexPage: NextPage<PageProps> = ({ posts }) => {
  return (
    <div className="text-black">
      <h1>pages index</h1>
      {posts.map((post) => {
        return (
          <Link key={post.title} href={`pages/${post.slug}`}>
            {post.title}
          </Link>
        )
        // return <div key={post.title}>{post.title}</div>
      })}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post.frontMatter)

  return {
    props: {
      posts: mdxFiles,
    },
  }
}

export default IndexPage
