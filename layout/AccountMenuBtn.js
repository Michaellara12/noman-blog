// MUI
import { Avatar, Typography } from "@mui/material"
import { Box } from "@mui/system"

// Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function AccountMenuBtn() {
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
                m: '0.5rem 1rem 0.5rem 0'
            }}
        /> 
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                justifyContent: 'center'
            }}
        >
            <Typography
                variant='subtitle1'
                align='left'
            >
                Elon Musk
            </Typography>
            <Typography
                variant='body2'
                align='left'
            >
                Escencia: 15 
            </Typography>
        </Box>
        <KeyboardArrowDownIcon fontSize="medium" sx={{ ml: '1rem' }}/>

    </Box>
  )
}

export default AccountMenuBtn