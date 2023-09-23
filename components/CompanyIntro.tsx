import { ComponentProps, FC } from 'react'
import { SectionHeader } from './SectionHeader'
import Image, { StaticImageData } from 'next/image'
import avatar0 from '@/public/images/avatar0.png'
import avatar1 from '@/public/images/avatar1.png'
import avatars from '@/public/images/avatars.png'
import cn from '@/utils/merge'

export const CompanyIntro: FC = () => {
  return (
    <div
      className="bg-[rgb(242_244_245/0.32)]  pt-[120px] pb-[100px] text-black px-[20px] sm:px-[60px]"
      id="company-intro"
    >
      <SectionHeader h2={'会社概要'} h3={'チェックス株式会社のスタッフはすべて日本と中国の優秀な企業から来ています'} />
      <div className="grid grid-cols-[55%_auto] gap-[16px] max-w-[1080px] mx-auto ">
        <Namecard
          className="max-md:col-span-2"
          avatar={avatar0}
          name="郭宇"
          title="創設者"
          description="チェックス株式会社の創設者は、ByteDance（TikTokの親会社）の473番目の社員である郭宇で、彼はシリアルアントレプレナーで、彼が共同設立した会社が2014年にByteDanceに買収された後、高度な技術専門家の地位に就き、6年間働いたのち2020年に日本にて起業しました。"
        />
        <Namecard
          className="max-md:col-span-2"
          avatar={avatar1}
          name="Syuhei Arakawa"
          title="BDパートナー＆コンサルタント"
          description="また、シニアプロダクトマネージャーは以前ByteDance、やOnePlusでシニアプロダクトマネージャーを務めていた人物で、デザイナーと開発エンジニアは中国の人気アプリ「即刻」制作会社の出身です。"
        />
        <Namecard
          className="col-[1_/_span_2] max-md:[&>.top-group]:flex-col max-md:[&>.top-group]:gap-[24px]"
          avatar={avatars}
          name="社員"
          title="また、シニアプロダクトマネージャーは以前ByteDance、やOnePlusでシニアプロダクトマネージャーを務めていた人物で、デザイナーと開発エンジニアは中国の人気アプリ「即刻」制作会社の出身です。"
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
