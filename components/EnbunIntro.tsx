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
import { useTranslation } from 'react-i18next'

export const EnbunIntro: FC = () => {
  const { t } = useTranslation()
  return (
    <div className="sm:pt-[120px] pt-[60px] sm:pb-[100px] pb-[60px] px-[20px] sm:px-[60px]">
      <SectionHeader h1={t('enbun_intro.h1')} h2={t('enbun_intro.h2')} h3={t('enbun_intro.h3')} />
      <div className="hidden sm:block max-w-[1042px] w-[100%] mx-auto relative">
        <Image src={card_grid_pc} alt="card_grid_pc@3x.png" className="" />
      </div>
      <div className="sm:hidden text-gray3 px-[55px] flex flex-col gap-[32px] items-center">
        <Image src={enbun0} alt="enbun0" />
        <div className="flex flex-col items-center gap-[24px]">
          <div>{t('enbun_intro.p1')}</div>
          <Image src={arrow_down} alt="arrow_down" width={47} height={52} />
        </div>
        <Image src={enbun1} alt="enbun0" />
        <div className="flex flex-col items-center gap-[24px]">
          <div>{t('enbun_intro.p2')}</div>
          <Image src={arrow_down} alt="arrow_down" width={47} height={52} />
        </div>
        <Image src={enbun2} alt="enbun0" />
        <div className="flex flex-col items-center gap-[24px]">
          <div className="text-center">
            {t('enbun_intro.p3-l1')}
            <br></br>
            {t('enbun_intro.p3-l2')}
          </div>
          <Image src={arrow_down} alt="arrow_down" width={47} height={52} />
        </div>
        <Image src={enbun3} alt="enbun0" />
        <div className="flex flex-col items-center gap-[24px]">
          <div>{t('enbun_intro.p4')}</div>
          <Image src={arrow_down} alt="arrow_down" width={47} height={52} />
        </div>
        <div className="text-center flex flex-col items-center gap-[12px]">
          <div className="text-gray1 text-[20px] font-semibold">{t('enbun_intro.p5-l1')}</div>
          <div className="text-gray1 text-[18px] ">{t('enbun_intro.p5-l2')}</div>
          <Image src={dots} alt="dots" width={54} height={10} />
        </div>
      </div>
    </div>
  )
}
