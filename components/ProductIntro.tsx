import { ComponentProps, FC } from 'react'
import { SectionHeader } from './SectionHeader'
import Image, { StaticImageData } from 'next/image'
import illustration_3 from '@/public/images/illustration_3_1470x850.png'
import bankIcon from '@/public/images/bank.svg'
import bookmarkIcon from '@/public/images/bookmark.svg'
import creditcardIcon from '@/public/images/credit-card.svg'
import cn from '@/utils/merge'

export const ProductIntro: FC = () => {
  return (
    <div className="leading-none ">
      <div className="bg-[rgb(242_244_245/0.32)]  pt-[120px] pb-[100px]  px-[20px] sm:px-[60px]">
        <SectionHeader
          h1={'製品紹介'}
          h2={'Checks for Business 製品紹介'}
          h3={'NFT 会員カード取引の各ステップを統合することで、チェックスは経済データエンジンを創り出しました。'}
        />
        <div className="max-w-[876px] w-[100%] mx-auto relative">
          <Image src={illustration_3} alt="card_grid_pc@3x.png" className="" />
          SectionHeader
        </div>
      </div>
      <div className="bg-white flex justify-between flex-wrap py-[60px] px-[20px] sm:px-[60px] mx-auto max-w-[1000px]">
        <FeatureBullet
          icon={creditcardIcon}
          title="NFT会員カードシステム"
          description="さまざまなシリーズ、さまざまなレベルのNFT会員カードを発行し、各レベルの会員カードに対してポイントの蓄積率と昇格ルールを設定できます。これらの会員カードの契約はすべてブロックチェーンネットワークに公開され、永続的に存在します。"
        />
        <FeatureBullet
          icon={bookmarkIcon}
          title="暗号化電子レシート"
          description="NFT会員カードを使用したすべてのトランザクションは、ユーザーのプライベートキーで暗号化されてブロックチェーンネットワークに保存されます。プライベートキーによる暗号化を使用しているため、データは消費者自身だけが管理できます。"
        />
        <FeatureBullet
          icon={bankIcon}
          title="分散型情報銀行"
          description="消費者データの分析とトレンドのプラットフォーム - 分散型データバンクを提供しています。これはLMM（大規模言語モデル）の技術を活用しており、自然言語を使ってデータを検索することを可能にします。このデータは自社で活用できるのはもちろんのこと、自社のデータを必要とする企業に販売することができます。"
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
