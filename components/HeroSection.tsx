import { FC } from 'react'
import illustration from '@/public/images/illustration_2_1470x850.png'
import Image from 'next/image'
import { Typewriter } from '@/components/Typewriter'
import Spline from '@splinetool/react-spline'
import { TooltipTrigger, TooltipContent, Tooltip } from '@/components/ui/tooltip'
import { useTranslation } from 'react-i18next'
import { SplineView } from './SplineView'

export const HeroSection: FC = () => {
  const { t } = useTranslation([])
  return (
    <div className="sm:h-screen bg-[rgb(var(--brand))] sm:[flex-basis:100vh] flex-1 flex flex-col relative text-white pt-[var(--nav-h)]">
      <div className="flex-1"></div>
      <div className="flex flex-col items-center max-sm:mt-[32px] z-10">
        <h1 className="sm:text-[54px] text-[34px] font-semibold mb-[10px]">{t('hero.h1')}</h1>
        <Typewriter />
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="mt-[36px] mb-[32px] text-[20px] font-medium text-brand px-[80px] py-[16px] bg-white rounded-[8px]  hover:bg-[color:#334952] hover:text-white transition-all">
              {t('hero.signup')}
            </button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <div>{t('hero.signup-tip')}</div>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="flex-[5]"></div>
      <SplineView />
    </div>
  )
}
