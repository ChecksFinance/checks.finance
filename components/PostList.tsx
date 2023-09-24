import { MDXFrontMatter } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type PostListProps = {
  posts: Array<MDXFrontMatter>
}

export const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <div className="flex flex-col gap-[35px]">
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </div>
  )
}

type PostPreviewProps = {
  post: MDXFrontMatter
}
const PostPreview: FC<PostPreviewProps> = ({ post }) => {
  return (
    <div className="w-full">
      <Link href={`/pages/${post.slug}`} className="">
        {post.cover && (
          <div className="aspect-video w-full bg-slate-300 rounded-[20px] mb-[32px]">
            <img className="object-cover w-full h-full" src={post.cover} alt="cover" />
          </div>
        )}
        <h1 className="font-semibold text-[24px] leading-normal text-[#242424]">{post.title}</h1>
        <p className="font-medium text-[20px] text-[#a9a9a9] leading-[1.4]">{post.description}</p>
        {/* <Image src/> */}
      </Link>
    </div>
  )
}
