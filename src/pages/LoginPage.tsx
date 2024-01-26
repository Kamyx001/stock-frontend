
import LoginForm from "@/components/LoginForm"
import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";

function LoginPage() {

  return (
    <div className="">
      <NavBar />
      {/* <Logo /> */}
      <div className="flex items-center justify-center min-h-screen dark grainy-gradient">
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage;
