import LoginForm from "@/components/LoginForm";
import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";

function LoginPage() {
  return (
    <div className="">
      <NavBar />
      {/* <Logo /> */}
      <div className="grainy-gradient dark flex min-h-screen items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
