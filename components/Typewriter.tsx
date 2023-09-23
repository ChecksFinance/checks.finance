import { FC, useEffect, useState } from 'react'

const sequence = ['尊敬', '再建築', '再販売']
let started = false
const printLimit = 300
const deleteLimit = 200
const waitInterval = 1000

export const Typewriter: FC = () => {
  const [text, setText] = useState('')

  const printWord = async (word: string) => {
    const interval = Math.max(10, ~~(printLimit / word.length))
    for (let i = 0; i < word.length; i++) {
      setText(word.slice(0, i + 1))
      await new Promise((resolve) => setTimeout(resolve, interval))
    }
  }

  const deleteWord = async (word: string) => {
    const interval = Math.max(10, ~~(deleteLimit / word.length))
    for (let i = word.length; i >= 0; i--) {
      setText(word.slice(0, i))
      await new Promise((resolve) => setTimeout(resolve, interval))
    }
  }

  const play = async () => {
    for (const word of sequence) {
      await printWord(word)
      await new Promise((resolve) => setTimeout(resolve, waitInterval))
      await deleteWord(word)
      await new Promise((resolve) => setTimeout(resolve, waitInterval))
    }
    play()
  }

  useEffect(() => {
    if (started) return
    started = true
    play()
  }, [])

  return (
    <div className="sm:text-[32px] text-[26px] opacity-80 text-white flex align-middle leading-tight">
      <span>{text}</span>
      <Cursor />
      <span className="">情報</span>
    </div>
  )
}

const Cursor = () => {
  return <div className="h-full w-[2px] bg-white/80 mr-1 blink-cursor"></div>
}
