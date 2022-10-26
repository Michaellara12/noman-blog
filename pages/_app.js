// Components
import ThemeProvider from "../theme"

// Context
import { UserContext } from "../lib/googleAuthContext"
import useUserData from "../hooks/useUserData"
import Ingresar from "./ingresar";

import SignUpAndRegister from "../components/SignUpAndRegister";

// hooks

function MyApp({ Component, pageProps }) {

  const userData = useUserData();
  const { user } = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <ThemeProvider>
        {user
          ? <Component {...pageProps} />
          : <SignUpAndRegister />
        }
        
      </ThemeProvider>
    </UserContext.Provider>
  )
}

export default MyApp
