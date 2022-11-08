// MUI
import { Avatar, Typography } from "@mui/material"
import { Box } from "@mui/system"

// Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Conext
import { useAuth } from "../../contexts/AuthContext";


function AccountMenuBtn() {

  const { currentUser } = useAuth();

  return (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
        }}
    >
        <Avatar
            sx={{
                width: '4rem',
                height: '4rem',
                // m: {lg: '0.5rem 2.4rem 0.5rem 0', xs: '0.5rem 1.6rem 0.5rem 0'}
                // m: '1rem'
            }}
            // src={currentUser.photoURL}
            src='https://entey.net/wp-content/uploads/2022/08/robot.webp'
        /> 
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                justifyContent: 'center',
                p: '0 0.1rem',
                ml: '0.5rem'
            }}
        >
            <Typography
                variant='subtitle2'
                align='left'
            >
                {currentUser.displayName}
            </Typography>
            <Typography
                variant='body2'
                align='left'
            >
                Escencia: 15 
            </Typography>
        </Box>
        <KeyboardArrowDownIcon fontSize="medium" sx={{ ml: '0.2rem' }}/>

    </Box>
  )
}

export default AccountMenuBtn