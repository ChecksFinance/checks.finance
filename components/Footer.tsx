import { FC } from 'react'
import Logo from '@/components/Icons/Logo'
import twLogo from '@/public/images/twitter_logo.png'
import Image from 'next/image'
export const Footer: FC = () => {
  return (
    <footer className="flex flex-col items-center justify-between w-full border-t p-[40px] gap-[20px] sm:flex-row">
      <Logo className="text-brand w-[95px] h-[22px]" />
      <div className="text-gray2 font-medium text-[14px]">© 2023 Checks, Inc. All Rights reserved.</div>
      <a href="https://twitter.com/checksfinance" target="_blank">
        <Image src={twLogo} alt="twitter" width={21} height={21} className="" />
      </a>
    </footer>
  )
}
