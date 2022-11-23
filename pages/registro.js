// MUI
import { Box } from "@mui/system"

// Components
import RegisterForm from "../components/signforms/RegisterForm"

// Auth
import { publicPage } from "../contexts/FirebaseAuth"

function Registro() {
  return (
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
          alignItems: 'center',
          justifyContent: 'center',
          display: { xs: 'none', lg: 'flex'},
        }}
      >
        <img src='https://entey.net/wp-content/uploads/2022/11/ingresar-girl_Mesa-de-trabajo-1-min-1.png' />
      </Box>
      <Box
        sx={{
          width: '40%',
          height: '100%',
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
        }}>
        <RegisterForm />
      </Box>
    </Box>
  )
}

export default publicPage(Registro);