import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isAutheticated: false,
  logout: () => {},
  authenticate: (token) => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();

  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem("token", token);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("token");
  }
  const value = {
    token: authToken,
    isAutheticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;

/*
store token in react state --> memory (not persist)
save or store token in async storage --> device storage (persist the token)
*/
