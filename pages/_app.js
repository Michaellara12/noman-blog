// Components
import ThemeProvider from "../theme"

// Context
import AuthProvider from "../contexts/AuthContext";

// <--------------------------------------------------> //

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>

  )
}

export default MyApp
