// MUI
import { Box } from "@mui/system"

// Components
import RegisterForm from "../components/signforms/RegisterForm"

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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* <img src='https://entey.net/wp-content/uploads/2022/10/Illustrations2_Mesa-de-trabajo-1-1-min.png'/> */}
        <img src='https://minimal-kit-react.vercel.app/assets/illustrations/illustration_login.png'/>
      </Box>
      <Box
        sx={{
          width: '40%',
          height: '100%',
          flexGrow: 1,
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
          // bgcolor: '#FF5733'
        }}>
        <RegisterForm />
      </Box>
    </Box>
  )
}

export default Registro