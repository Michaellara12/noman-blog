// MUI
import { Box, Typography, Button } from "@mui/material"

//icons
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

// Components
import AppLayout from "../layout/AppLayout"

// other
import Router from "next/router";
import { privatePage } from "../contexts/FirebaseAuth";

// <-----------------------------------------------> //

function NotFound() {

    function redirect(e) {
        e.preventDefault()

        Router.push("/")
    }
    
    return (
      <AppLayout>
        <Box
            // sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '90vh', p: {lg: 'none', xs: '2rem'} }}
            sx={{ display: {lg: 'flex', xs: 'none'}, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '90vh'}}
    
        >
            <Box
            >
            <Typography variant='h2'>Ooooops Error 404</Typography>
            <Typography variant='h3'>esta página no existe o fue eliminada</Typography>
            </Box>
            <Box
            sx={{display: 'flex', justifyContent: 'center'}}
            >
            <img src='https://entey.net/wp-content/uploads/2022/11/error404-03-min.png' width='60%'/>
            </Box>
            <Button variant='contained' startIcon={<MeetingRoomIcon/>} sx={{fontSize: 'large', p: '1rem 2rem'}} onClick={redirect}>Home</Button>
        </Box>
        <Box
            // sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '90vh', p: {lg: 'none', xs: '2rem'} }}
            sx={{ display: {lg: 'none', xs: 'flex'}, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '90vh', p: '2rem'}}
    
        >
            <Box
            >
            <Typography variant='h2'>Ooooops Error 404</Typography>
            <Typography variant='h3'>esta página no existe o fue eliminada</Typography>
            </Box>
            <Box
            sx={{display: 'flex', justifyContent: 'center'}}
            >
            <img src='https://entey.net/wp-content/uploads/2022/11/error404-03-min.png' width='100%'/>
            </Box>
            <Button variant='contained' startIcon={<MeetingRoomIcon/>} sx={{fontSize: 'large', p: '1rem'}} onClick={redirect}>Home</Button>
        </Box>
      </AppLayout>
    )
  }

export default privatePage(NotFound)