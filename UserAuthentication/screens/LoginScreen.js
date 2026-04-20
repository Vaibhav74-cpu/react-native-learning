import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { login } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function LoginScreen() {
  const [isAuthenticte, setIsAuthenticte] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthenticte(true);
    await login(email, password);
    setIsAuthenticte(false);
  }
  if (isAuthenticte) {
   return  <LoadingOverlay message="Log In...." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
