import Spline from '@splinetool/react-spline'
import { FC, useEffect, useState } from 'react'
import cn from '@/utils/merge'
import { ClipLoader } from 'react-spinners'

export const SplineView: FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setIsVisible(true)
      }, 1000)
    }
  }, [isLoaded])
  return (
    <div className="relative flex items-end sm:absolute bottom-0 left-0 right-0  mx-auto  ">
      <ClipLoader
        loading={!isVisible}
        cssOverride={{
          position: 'absolute',
          insetBlockStart: '50%',
          marginInline: 'auto',
          insetInline: '0',
        }}
        color="#ffffff"
      />
      <div className="aspect-video w-full max-sm:h-[56vw]  min-h-[100px] max-h-[45vh]">
        <Spline
          className={cn('opacity-0 transition-opacity', isVisible && 'opacity-100')}
          onLoad={() => {
            setIsLoaded(true)
          }}
          scene="https://prod.spline.design/CeH9gkPLXCAftkDS/scene.splinecode"
          style={{
            width: '100%',
          }}
        />
      </div>
    </div>
  )
}
