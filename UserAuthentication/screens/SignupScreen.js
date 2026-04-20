import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const authCtx = useContext(AuthContext);

  async function signUpHandler({ email, password }) {
    setIsAuthenticate(true);
    try {
      const token = await createUser(email, password); // comes data from form and then go to api and save data in database
      authCtx.autheticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "could not create user - please try again later",
      );
      setIsAuthenticate(false);
    }
  }

  if (isAuthenticate) {
    return <LoadingOverlay />;
  }
  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
