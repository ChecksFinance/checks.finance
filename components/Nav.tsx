import { FC, useEffect, useLayoutEffect, useMemo } from 'react'
import Link from 'next/link'
import Logo from '@/components/Icons/Logo'
import { useRouter } from 'next/router'
import cn from '@/utils/merge'
import { LangSwitch } from './LangSwitch'
import { useTranslation } from 'react-i18next'

export const Nav: FC = () => {
  const { pathname, push } = useRouter()
  const { t } = useTranslation()

  const theme = useMemo(() => {
    if (pathname === '/') {
      return 'brand'
    }
    return 'light'
  }, [pathname])

  const isInPostTab = pathname.startsWith('/pages')

  const handleTabClick = (id: string) => {
    if (pathname === '/') {
      handleScrollTo(id)
      return
    }
    push(`/${id}`)
  }

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={cn(
        'h-[88px] flex items-center justify-between sm:px-[64px] px-[20px] bg-brand',
        theme === 'brand' ? 'bg-brand' : 'bg-white'
      )}
    >
      <Link href="/">
        <Logo className={cn('w-[121.5px] h-[28px] flex-shrink-0', theme === 'brand' ? 'text-white' : 'text-brand')} />
      </Link>
      <div className="flex-1 flex justify-center px-[20px]">
        <ul
          className={cn(
            'flex justify-between text-[18px] [&>li]:whitespace-nowrap font-medium gap-[60px] [&>li]:cursor-pointer whitespace-nowrap',
            theme === 'brand' ? 'text-white' : 'text-gray1'
          )}
        >
          <li className="max-md:hidden" onClick={() => handleTabClick('#product-intro')}>
            {t('nav.product')}
          </li>
          <li className="max-md:hidden" onClick={() => handleTabClick('#company-intro')}>
            {t('nav.about')}
          </li>
          <Link href="/pages">
            <li className={cn(isInPostTab && 'text-brand')}>{t('nav.blog')}</li>
          </Link>
        </ul>
      </div>
      <div className={cn(theme === 'brand' ? 'text-white' : 'text-gray1')}>
        <LangSwitch />
      </div>
    </nav>
  )
}
