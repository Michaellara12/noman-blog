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
                ¡Ayudanos a mejorar!
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
                <Typography variant='body2' gutterBottom>Escríbenos si deseas nuevas funcionalidades o quieres reportar algún problema o bug.</Typography>
            </Box>
        </Box>
        <Box sx={{display: 'flex', width: '100%'}}>
                <Box
                    sx={{width: '40%'}}
                >
                    <Button 
                        variant='contained' 
                        target="_blank"
                        href="https://wa.link/s6xehb"
                    >
                        contactar
                    </Button>
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