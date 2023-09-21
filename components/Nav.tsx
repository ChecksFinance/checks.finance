import { FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Cookies from 'js-cookie'
import logo from '@/public/images/logo.svg'
import Image from 'next/image'
import { UseTranslation, useTranslation } from 'next-i18next'

export const Nav: FC = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  // const { locales, locale: activeLocale, defaultLocale } = router

  // const otherLocales = (locales || []).filter((locale) => locale !== activeLocale)
  return (
    <nav className="h-[88px] flex items-center justify-between px-[64px]">
      <div className="w-[121.5px] h-[28px] relative flex-shrink-0">
        <Image src={logo} alt="Checks" />
      </div>
      <div className="flex-1 flex justify-center mx-[15px]">
        <ul className="flex gap-[clamp(5px,2vw,3rem)] text-[18px] [&>li]:whitespace-nowrap font-medium">
          <li>製品·サービス一覧</li>
          <li>会社概要</li>
          <li>ブログ</li>
        </ul>
      </div>
      <div>JP</div>
    </nav>
  )
}
