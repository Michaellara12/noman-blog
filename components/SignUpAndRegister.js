// MUI
import { Box, Paper } from "@mui/system"

// Components
import RegisterForm from "./signforms/RegisterForm"
import LoginForm from "./signforms/LoginForm"

// React
// import { useState } from "react"
import useLogin from '../hooks/useLogin'


function SignUpAndRegister() {
    const { form, setForm } = useLogin();
    
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
            <img src='https://minimal-kit-react.vercel.app/assets/illustrations/illustration_login.png'/>
          </Box>
          <Box
            sx={{
              width: '40%',
              height: '100%',
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
    
                {/* Form */}
                {(form == 'login')
                    ? <LoginForm />
                    : <RegisterForm />         
                }
          </Box>
        </Box>
    )
}

export default SignUpAndRegister