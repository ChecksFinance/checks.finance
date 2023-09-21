import { FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Cookies from 'js-cookie'
import logo from '@/public/images/logo.svg'
import Image from 'next/image'

export const Nav: FC = () => {
  const router = useRouter()
  // const { locales, locale: activeLocale, defaultLocale } = router

  // const otherLocales = (locales || []).filter((locale) => locale !== activeLocale)
  return (
    <nav className="h-[88px] border-red-400 border-2 flex items-center justify-between px-[64px]">
      <div className="w-[121.5px] h-[28px] relative">
        <Image src={logo} alt="Checks" />
      </div>
      <ul className="flex gap-4">
        <li>製品·サービス一覧</li>
        <li>会社概要</li>
        <li>ブログ</li>
      </ul>
      <div>JP</div>
    </nav>
  )
}
