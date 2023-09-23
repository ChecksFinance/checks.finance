import { ComponentProps, FC } from 'react'

type Props = {
  h1?: string
  h2: string
  h3: string
} & ComponentProps<'div'>

export const SectionHeader: FC<Props> = ({ h1, h2, h3 }) => {
  return (
    <div className="flex flex-col items-center mb-[100px] gap-[16px]">
      {h1 && <h2 className="text-[18px] text-gray2">{h1}</h2>}
      <h1 className="text-[36px] text-black font-semibold">{h2}</h1>
      <p className="text-[18px] text-black">{h3}</p>
    </div>
  )
}
