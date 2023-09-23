import { FC } from 'react'
import card_grid_pc from '@/public/images/card_grid_pc@3x.png'
import Image from 'next/image'

export const EnbunIntro: FC = () => {
  return (
    <div>
      <div>
        <h2 className="text-[18px] text-gray2">リアルワールドにおけるWEB 3データソリューション</h2>
        <h1 className="text-[36px] text-black">Enbun Protocolを紹介します</h1>
        <p>enbunは、お店で発行されたNFT会員カードやポイントを他のお店で発行されたポイントに柔軟か。</p>
      </div>
      <div>
        <Image src={card_grid_pc} alt="card_grid_pc@3x.png" />
      </div>
    </div>
  )
}
