// MUI
import { Box} from "@mui/system"

// Components
import LoginForm from "../components/signforms/LoginForm"

// Auth
import { publicPage } from "../contexts/FirebaseAuth"

// NextJS
import Head from "next/head"

// <---------------------------------------> //

function Ingresar() {
  return (
    <>
      <Head>
        <title>Ingresar | Noman AI</title>
      </Head>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw'
        }}
      >
        <Box
          sx={{
            width: '50%',
            display: { xs: 'none', lg: 'flex'},
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img src='https://entey.net/wp-content/uploads/2022/11/Noman-Ill-4-01-2-min-1.png'/>
        </Box>
        <Box
          sx={{
            width: '40%',
            height: '100%',
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: { xs: '2rem' }
          }}>

              {/* Form */}
              <LoginForm />
        </Box>
      </Box>
    </>
  )
}

export default publicPage(Ingresar)