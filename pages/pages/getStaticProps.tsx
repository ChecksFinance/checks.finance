import { getAllMdx } from '@/utils/mdx'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string }

  const mdxFiles = getAllMdx

  return {
    props: {},
  }
}
