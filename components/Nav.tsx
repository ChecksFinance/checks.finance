import { FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Cookies from 'js-cookie'
import logo from '@/public/images/logo.svg'
import Image from 'next/image'
import { UseTranslation, useTranslation } from 'next-i18next'
import Logo from '@/components/Icons/Logo'

export const Nav: FC = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  // const { locales, locale: activeLocale, defaultLocale } = router

  // const otherLocales = (locales || []).filter((locale) => locale !== activeLocale)
  return (
    <nav className="h-[88px] flex items-center justify-between sm:px-[64px] px-[20px]">
      <Logo className="w-[121.5px] h-[28px] flex-shrink-0" />
      <div className="hidden flex-1 md:flex justify-center px-[20px]">
        <ul className="flex justify-between text-[18px] [&>li]:whitespace-nowrap font-medium gap-[60px]">
          <li>製品·サービス一覧</li>
          <li>会社概要</li>
          <li>ブログ</li>
        </ul>
      </div>
      <div>JP</div>
    </nav>
  )
}
