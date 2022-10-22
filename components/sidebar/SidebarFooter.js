// MUI
import { Box } from "@mui/system"
import { Typography, Button } from "@mui/material"

// Next JS
import NextLink from 'next/link'

// Icons
import LaunchIcon from '@mui/icons-material/Launch';

function SidebarFooter() {
  return (
        
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: '1.2rem'
                    // width: '16rem'
                }}
                >
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        align='center'
                    >
                        ¿Deseas funcionalidades adicionales?
                    </Typography>
                    <Typography
                        variant="body2"
                        align='center'
                    >
                        Habla con uno de nuestros desarrolladores
                    </Typography>
                    <Box
                        sx={{
                        display: 'flex',
                        mt: 2,
                        mx: 'auto',
                        width: '200px',
                        '& img': {
                            width: '100%'
                        }
                        }}
                    >
                        <img
                            alt="Go to pro"
                            src="https://entey.net/wp-content/uploads/2022/10/Noman-Ill-2-01-1-min.png"
                        />
                    </Box>
                    <NextLink
                        href="https://material-kit-pro-react.devias.io/"
                        passHref
                    >
                        <Button
                            color="secondary"
                            component="a"
                            endIcon={(<LaunchIcon />)}
                            fullWidth
                            // sx={{ mt: 2, bgcolor: 'noman.orange', borderRadius:'1.6rem' }}
                            variant="contained"
                            
                        >
                            Escríbenos
                        </Button>
                    </NextLink>
            </Box>
  )
}

export default SidebarFooter