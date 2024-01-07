
import LoginForm from "@/components/LoginForm"
import Logo from "@/components/Logo";

function LoginPage() {

  return (
    <>
      <Logo />
      <div className="dark min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <LoginForm />
      </div>
    </>
  )
}

export default LoginPage;
