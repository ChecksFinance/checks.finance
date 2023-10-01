import { ComponentProps, FC } from 'react'
import { SectionHeader } from './SectionHeader'
import Image, { StaticImageData } from 'next/image'
import avatar0 from '@/public/images/avatar0.png'
import avatar1 from '@/public/images/avatar1.png'
import avatars from '@/public/images/avatars.png'
import cn from '@/utils/merge'
import { useTranslation } from 'react-i18next'

export const CompanyIntro: FC = () => {
  const { t } = useTranslation()
  return (
    <div
      className="bg-[rgb(242_244_245/0.32)]  sm:pt-[120px]  pt-[60px] sm:pb-[100px] pb-[60px]    text-black px-[20px] sm:px-[60px]"
      id="company-intro"
    >
      <SectionHeader h2={t('company_intro.h2')} h3={t('company_intro.h3')} />
      <div className="grid grid-cols-[55%_auto] gap-[16px] max-w-[1080px] mx-auto ">
        <Namecard
          className="max-md:col-span-2"
          avatar={avatar0}
          name={t('company_intro.guoyu.name')}
          title={t('company_intro.guoyu.title')}
          description={t('company_intro.guoyu.desc')}
        />
        <Namecard
          className="max-md:col-span-2"
          avatar={avatar1}
          name={t('company_intro.arakawa.name')}
          title={t('company_intro.arakawa.title')}
          description={t('company_intro.arakawa.desc')}
        />
        <Namecard
          className="col-[1_/_span_2] max-md:[&>.top-group]:flex-col max-md:[&>.top-group]:gap-[24px]"
          avatar={avatars}
          name={t('company_intro.others.name')}
          title={t('company_intro.others.title')}
          description=""
        />
      </div>
    </div>
  )
}

type NamecardProps = {
  avatar: StaticImageData
  name: string
  title: string
  description?: string
} & ComponentProps<'div'>

const Namecard: FC<NamecardProps> = ({ avatar, name, title, description, className }) => {
  return (
    <div className={cn('rounded-[16px] bg-white border border-[rgb(36_36_36/0.1)] p-[40px]', className)}>
      <div className="top-group flex mb-[16px]">
        <div className={cn('flex-shrink-0 mr-[16px] flex items-center h-[60]', description && 'items-start')}>
          <Image src={avatar} height={60} alt="avatar0" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-[20px] font-semibold text-gray1">{name}</div>
          <div className="text-[16px] text-gray3">{title}</div>
        </div>
      </div>
      {description && <div className="text-[16px] text-gray3 leading-[1.6]">{description}</div>}
    </div>
  )
}
