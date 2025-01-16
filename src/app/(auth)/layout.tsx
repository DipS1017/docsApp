
interface AuthLayoutProps{
children: React.ReactNode
}
const AuthLayout= ({children}:AuthLayoutProps) => {
return(
<div className="flex bg-red-500 min-h-4">
    <p>Auth layout </p>
      <div>{children}</div>
</div>
  )

}
export default AuthLayout;
