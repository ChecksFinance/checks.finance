export const Prose: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  // return <div className="max-w-none markdown-body">{children}</div>
  return (
    <div className="w-full prose prose-a:text-brand  md:prose-lg max-w-[800px] px-[20px] pt-[100px] mx-auto">
      {children}
    </div>
  )
}
