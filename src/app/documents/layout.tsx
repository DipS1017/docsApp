interface DocumentLayoutProps{
children: React.ReactNode
}
const DocumentsLayout = ({children}:DocumentLayoutProps) => {
return(
    <>
    <p>DocumentsLayout</p>
      <div>{children}</div>
    </>
  )

}
export default DocumentsLayout;
