import { FC, use, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

// const sequence = ['尊敬', '再建築', '再販売']
let started = false
const printLimit = 300
const deleteLimit = 200
const waitInterval = 1000

export const Typewriter: FC = () => {
  const [text, setText] = useState('')
  const { t, i18n } = useTranslation()
  const timerRef = useRef<any>()

  const setTimeoutAndSaveTimer = (cb: any, interval: number) => {
    timerRef.current = setTimeout(cb, interval)
  }

  const seq = t('hero.typewriter', { returnObjects: true }) || []

  const printWord = async (word: string) => {
    const interval = Math.max(10, ~~(printLimit / word.length))
    for (let i = 0; i < word.length; i++) {
      setText(word.slice(0, i + 1))
      await new Promise((resolve) => setTimeoutAndSaveTimer(resolve, interval))
    }
  }

  const deleteWord = async (word: string) => {
    const interval = Math.max(10, ~~(deleteLimit / word.length))
    for (let i = word.length; i >= 0; i--) {
      setText(word.slice(0, i))
      await new Promise((resolve) => setTimeoutAndSaveTimer(resolve, interval))
    }
  }

  const play = async () => {
    for (const word of seq as Array<string>) {
      await printWord(word)
      await new Promise((resolve) => setTimeoutAndSaveTimer(resolve, waitInterval))
      await deleteWord(word)
      await new Promise((resolve) => setTimeoutAndSaveTimer(resolve, waitInterval))
    }
    play()
  }

  useEffect(() => {
    // console.log('started', started, i18n.language)
    if (started) return
    started = true
    console.log('play')
    play()
    return () => {
      console.log('clear')
      clearTimeout(timerRef.current as any)
      started = false
    }
  }, [i18n.language])

  return (
    <div className="sm:text-[32px] text-[26px] opacity-80 text-white flex align-middle leading-tight">
      <span>{text}</span>
      <Cursor />
      <span className="">{t('hero.h2-0')}</span>
    </div>
  )
}

const Cursor = () => {
  return <div className="h-full w-[2px] bg-white/80 mr-1 blink-cursor"></div>
}
