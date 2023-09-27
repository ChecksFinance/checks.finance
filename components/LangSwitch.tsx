import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { FC, useState } from 'react'

const languages = [
  {
    lang: 'en',
    label: 'English',
  },
  {
    lang: 'ja',
    label: '日本語',
  },
  {
    lang: 'zh',
    label: '中文',
  },
]

export const LangSwitch: FC = () => {
  const [currentLanguage, setLanguage] = useState('ja')
  return (
    <Select defaultValue={currentLanguage}>
      <SelectTrigger className="w-[100px] bg-transparent border-none focus-visible:border-none ![--tw-ring-shadow:none]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {languages.map(({ lang, label }) => (
            <SelectItem key={lang} value={lang}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
