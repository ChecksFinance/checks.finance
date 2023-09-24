import { FC, useEffect, useLayoutEffect, useMemo } from 'react'
import Link from 'next/link'
import Logo from '@/components/Icons/Logo'
import { useRouter } from 'next/router'
import cn from '@/utils/merge'

export const Nav: FC = () => {
  const { pathname, push } = useRouter()

  // useLayoutEffect(() => {}, [pathname])
  // const theme = 'brand'

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
      <div className="hidden flex-1 md:flex justify-center px-[20px]">
        <ul
          className={cn(
            'flex justify-between text-[18px] [&>li]:whitespace-nowrap font-medium gap-[60px] [&>li]:cursor-pointer',
            theme === 'brand' ? 'text-white' : 'text-gray1'
          )}
        >
          <li onClick={() => handleTabClick('#product-intro')}>製品·サービス一覧</li>
          <li onClick={() => handleTabClick('#company-intro')}>会社概要</li>
          <Link href="/pages">
            <li className={cn(isInPostTab && 'text-brand')}>ブログ</li>
          </Link>
        </ul>
      </div>
      <div className={cn(theme === 'brand' ? 'text-white' : 'text-gray1')}>JP</div>
    </nav>
  )
}
