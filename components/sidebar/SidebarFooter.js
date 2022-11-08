// MUI
import { Box } from "@mui/system"
import { Typography, Button, Link } from "@mui/material"


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
                }}
                >
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        align='center'
                        sx={{
                            px: '0.5rem'
                        }}
                    >
                        ¿Deseas funcionalidades adicionales?
                    </Typography>
                    <Typography
                        variant="body2"
                        align='center'
                    >
                        Habla directamente con uno de nuestros desarrolladores ;)
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
                    {/* <Link
                        target="_blank"
                        href="https://wa.link/s6xehb"
                        underline='none'
                        sx={{width: '100%'}}
                    > */}
                        {/* <a target="_blank"> */}
                        <Button
                            color="secondary"
                            component="a"
                            endIcon={(<LaunchIcon />)}
                            fullWidth
                            variant="contained"
                            target="_blank"
                            href="https://wa.link/s6xehb"
                        >
                            Escríbenos
                        </Button>
                        {/* </a> */}
                    {/* </Link> */}
            </Box>
  )
}

export default SidebarFooter