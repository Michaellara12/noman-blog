// Components
import ThemeProvider from "../theme"
import ErrorBoundary from "../components/errorboundary/ErrorBoundary";

// Context
import AuthProvider from "../contexts/AuthContext";

// other
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loader from "../utils/Loader"

// <--------------------------------------------------> //

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleStart = (url) => (url !== router.asPath) && setLoading(true);
      // const handleComplete = (url) => (url === router.asPath) && setTimeout(() =>{setLoading(false)},5000);
      const handleComplete = (url) => (url === router.asPath) && setLoading(false);

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError',  handleComplete)

      return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleComplete)
          router.events.off('routeChangeError', handleComplete)
      }
  })
  
  return loading && (<Loader />)
}

function MyApp({ Component, pageProps }) {

  

  return (
    <ErrorBoundary>
      <ThemeProvider>
          <AuthProvider>
          <><Loading/><Component {...pageProps} /></>
          </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>

  )
}

export default MyApp
