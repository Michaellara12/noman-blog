// MUI
import { Typography, Box, Button } from "@mui/material"

// Icons
import BugReportIcon from '@mui/icons-material/BugReport';


// <------------------------------------------> //

function InfoTab() {
  return (
    <>
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column'
        }}
    >
        <Box
            sx={{
                width: '100%'
            }}
        >
            <Typography 
                variant='h4' 
                gutterBottom
            >
                ¿Deseas reportar un problema o bug?
            </Typography>
        </Box>
        <Box
            sx={{
                display: 'flex'
            }}
        >
            <Box
                sx={{width: '80%'}}
            >
                <Typography variant='body2' gutterBottom>En caso de que tengas algún problema contactate con nuestro equipo de soporte ;)</Typography>
            </Box>
        </Box>
        <Box sx={{display: 'flex', width: '100%'}}>
                <Box
                    sx={{width: '40%'}}
                >
                    <Button variant='contained'>contactar</Button>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                    }}
                >
                    <img src='https://entey.net/wp-content/uploads/2022/11/final-beige-min.png'/>
                </Box>
            </Box>
    </Box>
    </>
  )
}

export default InfoTab