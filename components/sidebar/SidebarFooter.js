// MUI
import { Box } from "@mui/system"
import { Typography, Button, Link } from "@mui/material"


// Icons
import PaymentsIcon from '@mui/icons-material/Payments';

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
                        ¿Ya no tienes más palabras?
                    </Typography>
                    <Typography
                        variant="body2"
                        align='center'
                    >
                        Nuestros precios se ajustan a cualquier presupuesto
                    </Typography>
                    <Box
                        sx={{
                        display: 'flex',
                        mt: 2,
                        mx: 'auto',
                        // width: '200px',
                        '& img': {
                            width: '100%'
                        }
                        }}
                    >
                        <img
                            alt="Go to pro"
                            src="https://entey.net/wp-content/uploads/2022/11/sidebarill-01-1-min.png"
                        />
                    </Box>
                  
                        <Button
                            color="secondary"
                            component="a"
                            // endIcon={(<PaymentsIcon />)}
                            fullWidth
                            variant="contained"
                            target="_blank"
                            href="https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c9380848499f88601849ca44b9e01fb"
                            sx={{mt: '1rem'}}
                        >
                            Adquiere Noman Pro
                        </Button>
                       
            </Box>
  )
}

export default SidebarFooter