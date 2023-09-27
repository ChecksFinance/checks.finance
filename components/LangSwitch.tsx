import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const changeLanguage = (i18n: any, language: any) => {
  window.localStorage.setItem('SITE_LOCALE', language)
  i18n.changeLanguage(language)
}

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
  const { t, i18n } = useTranslation()
  const [currentLanguage, setLanguage] = useState(i18n.language)

  useEffect(() => {
    if (!currentLanguage) {
      setLanguage(i18n.language)
    }
  }, [i18n.language, currentLanguage])

  return (
    <Select
      value={currentLanguage}
      onValueChange={(val) => {
        setLanguage(val)
        changeLanguage(i18n, val)
      }}
    >
      <SelectTrigger className="w-[100px] bg-transparent border-none focus-visible:border-none ![--tw-ring-shadow:none]">
        <SelectValue placeholder="Lan" />
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
