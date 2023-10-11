import { ComponentProps, FC } from 'react'
import { SectionHeader } from './SectionHeader'
import Image, { StaticImageData } from 'next/image'
import illustration_3 from '@/public/images/illustration_3_1470x850.png'
import bankIcon from '@/public/images/bank.svg'
import bookmarkIcon from '@/public/images/bookmark.svg'
import creditcardIcon from '@/public/images/credit-card.svg'
import cn from '@/utils/merge'
import { useTranslation } from 'react-i18next'

export const ProductIntro: FC = () => {
  const { t } = useTranslation()
  return (
    <div className="leading-none" id="product-intro">
      <div className="bg-[rgb(242_244_245/0.32)] sm:pt-[120px]   pt-[60px] sm:pb-[100px] pb-[60px]   px-[20px] sm:px-[60px]">
        <SectionHeader h1={t('product_intro.h1')} h2={t('product_intro.h2')} h3={t('product_intro.h3')} />
        <div className="max-w-[876px] w-[100%] mx-auto relative">
          <Image src={illustration_3} alt="card_grid_pc@3x.png" className="sm:drop-shadow-2xl drop-shadow-xl" />
        </div>
      </div>
      <div className="bg-white flex justify-between flex-wrap sm:py-[100px] py-[40px] px-[40px] sm:px-[60px] mx-auto max-w-[1000px]">
        <FeatureBullet
          icon={creditcardIcon}
          title={t('product_intro.feature1.title')}
          description={t('product_intro.feature1.desc')}
        />
        <FeatureBullet
          icon={bookmarkIcon}
          title={t('product_intro.feature2.title')}
          description={t('product_intro.feature2.desc')}
        />
        <FeatureBullet
          icon={bankIcon}
          title={t('product_intro.feature3.title')}
          description={t('product_intro.feature3.desc')}
        />
      </div>
    </div>
  )
}

type FeatureBulletProps = {
  icon: StaticImageData
  title: string
  description: string
} & ComponentProps<'div'>

const FeatureBullet: FC<FeatureBulletProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn('md:w-[30%] mt-[60px] max-md:first:mt-0', className)}>
      <div className="w-[56px] h-[56px] rounded-[16px] border border-[color:rgb(0_0_0/0.05)] bg-[#f3f3f3] flex justify-center items-center mb-[20px]">
        <Image src={icon} alt="bank.svg" />
      </div>
      <div className="text-[20px] font-semibold text-gray1 mb-[12px]">{title}</div>
      <div className="text-[18px] text-gray2 font-light leading-[1.2]">{description}</div>
    </div>
  )
}
