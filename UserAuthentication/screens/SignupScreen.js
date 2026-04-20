import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  async function signUpHandler({ email, password }) {
    setIsAuthenticate(true);
    await createUser(email, password); // comes data from form and then go to api and save data in database
    setIsAuthenticate(false);
  }

  if (isAuthenticate) {
    return <LoadingOverlay />;
  }
  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
