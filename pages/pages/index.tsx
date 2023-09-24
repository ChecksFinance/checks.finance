import { Footer } from '@/components/Footer'
import { PostList } from '@/components/PostList'
import { getAllMdx } from '@/utils/mdx'
import { MDXFrontMatter } from '@/utils/types'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

type PageProps = {
  posts: Array<MDXFrontMatter>
}

const IndexPage: NextPage<PageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="px-[20px] py-[100px] w-full md:w-[800px] flex-1">
        <PostList posts={posts} />
      </div>
      <Footer />
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
