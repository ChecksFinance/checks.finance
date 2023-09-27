import { ComponentProps, FC } from 'react'

type Props = {
  h1?: string
  h2: string
  h3: string
} & ComponentProps<'div'>

export const SectionHeader: FC<Props> = ({ h1, h2, h3 }) => {
  return (
    <div className="flex flex-col items-center sm:mb-[100px] sm:gap-[16px] mb-[32px] gap-[12px]  text-center leading-normal">
      {h1 && <h2 className="max-sm:hidden text-[18px] text-gray2">{h1}</h2>}
      <h1 className="sm:text-[36px] text-[24px] text-black font-semibold">{h2}</h1>
      <p className="sm:text-[18px] text-[16px] text-black px-[10%]">{h3}</p>
    </div>
  )
}
