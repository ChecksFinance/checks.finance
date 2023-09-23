import { FC } from 'react'
import card_grid_pc from '@/public/images/img_pc@3x.png'
import Image from 'next/image'
import { SectionHeader } from './SectionHeader'
import enbun0 from '@/public/images/enbun_0_jp.png'
import enbun1 from '@/public/images/enbun_1_jp.png'
import enbun2 from '@/public/images/enbun_2_jp.png'
import enbun3 from '@/public/images/enbun_3_jp.png'
import arrow_down from '@/public/images/arrow_down.png'
import dots from '@/public/images/dots.png'

export const EnbunIntro: FC = () => {
  return (
    <div className="pt-[120px] pb-[100px] px-[20px] sm:px-[60px]">
      <SectionHeader
        h1={'リアルワールドにおけるWEB 3データソリューション'}
        h2={'Enbun Protocolを紹介します'}
        h3={'enbunは、お店で発行されたNFT会員カードやポイントを他のお店で発行されたポイントに柔軟か。'}
      />
      <div className="hidden sm:block max-w-[1042px] w-[100%] mx-auto relative">
        <Image src={card_grid_pc} alt="card_grid_pc@3x.png" className="" />
      </div>
      <div className="sm:hidden text-gray3 px-[55px] flex flex-col gap-[32px] items-center">
        <div className="text-[24px]">Enbun Protocol</div>
        <Image src={enbun0} alt="enbun0" />
        <div className="flex flex-col items-center gap-[24px]">
          <div>バリデーション、価格設定</div>
          <Image src={arrow_down} alt="arrow_down" width={47} height={52} />
        </div>
        <Image src={enbun1} alt="enbun0" />
        <div className="flex flex-col items-center gap-[24px]">
          <div>セール、リース</div>
          <Image src={arrow_down} alt="arrow_down" width={47} height={52} />
        </div>
        <Image src={enbun2} alt="enbun0" />
        <div className="flex flex-col items-center gap-[24px]">
          <div className="text-center">
            マーケティング、メンバーシップ<br></br>クレジットプログラム
          </div>
          <Image src={arrow_down} alt="arrow_down" width={47} height={52} />
        </div>
        <Image src={enbun3} alt="enbun0" />
        <div className="flex flex-col items-center gap-[24px]">
          <div>ミント</div>
          <Image src={arrow_down} alt="arrow_down" width={47} height={52} />
        </div>
        <div className="text-center flex flex-col items-center gap-[12px]">
          <div className="text-gray1 text-[20px] font-semibold">ウェブ3資産</div>
          <div className="text-gray1 text-[18px] ">NFTs , ERC20, SBT, ポイント</div>
          <Image src={dots} alt="dots" width={54} height={10} />
        </div>
      </div>
    </div>
  )
}
