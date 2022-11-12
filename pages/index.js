// Components
import AppLayout from "../layout/AppLayout"
import Dashboard from "../components/dashboard/Dashboard"

// Auth
import { privatePage } from "../contexts/FirebaseAuth"

// Next JS
import Head from "next/head"

// <-------------------------------------> //

function Home() {

  return (
    <>
      <Head>
        <title>Dashboard | Noman</title>
      </Head>
      <AppLayout>
        <Dashboard />
      </AppLayout> 
    </>
  )
  
}

export default privatePage(Home)
