import { FC } from 'react'
import card_grid_pc from '@/public/images/card_grid_pc@3x.png'
import Image from 'next/image'
import { SectionHeader } from './SectionHeader'

export const EnbunIntro: FC = () => {
  return (
    <div className="pt-[120px] pb-[100px] px-[20px] sm:px-[60px]">
      <SectionHeader
        h1={'リアルワールドにおけるWEB 3データソリューション'}
        h2={'Enbun Protocolを紹介します'}
        h3={'enbunは、お店で発行されたNFT会員カードやポイントを他のお店で発行されたポイントに柔軟か。'}
      />
      <div className="max-w-[1042px] w-[100%] mx-auto relative">
        <Image src={card_grid_pc} alt="card_grid_pc@3x.png" className="" />
        SectionHeader
      </div>
    </div>
  )
}
