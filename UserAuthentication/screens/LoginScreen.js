import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { login } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [isAuthenticte, setIsAuthenticte] = useState(false);
  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticte(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Enter the correct email and password",
      );
      setIsAuthenticte(false);
    }
  }
  if (isAuthenticte) {
    return <LoadingOverlay message="Log In...." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
