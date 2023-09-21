import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FC, ReactNode } from 'react'
import MdxPage from './mdx.mdx'
import { Nav } from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen w-screen flex-col items-stretch justify-start ${inter.className}`}>
      <Nav />
    </main>
  )
}

// const Layout: FC<{ children: ReactNode }> = ({ children }) => {
//   return <div className="bg-slate-500 text-lg">{children}</div>;
// };
