import { FC } from 'react'
import illustration from '@/public/images/illustration_2_1470x850.png'
import Image from 'next/image'
import { Typewriter } from '@/components/Typewriter'

export const HeroSection: FC = () => {
  return (
    <div className="flex-1 flex flex-col relative">
      <div className="flex-1"></div>
      <div className="flex flex-col items-center max-sm:mt-[32px] z-10">
        <h1 className="sm:text-[54px] text-[34px] font-semibold mb-[10px]">自分でデータを売る</h1>
        <Typewriter />
        <button className="mt-[36px] mb-[32px] text-[20px] font-medium text-brand px-[80px] py-[16px] bg-white rounded-[8px]  hover:bg-[color:#334952] hover:text-white">
          新規登録
        </button>
      </div>
      <div className="flex-[5]"></div>
      <div className="flex items-end sm:absolute bottom-0 left-0 right-0 mx-auto  ">
        <Image src={illustration} alt="illustration" className="mx-auto" />
      </div>
    </div>
  )
}
