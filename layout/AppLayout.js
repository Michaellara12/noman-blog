// MUI
import { Toolbar, Box, IconButton, Avatar, Stack } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

// Components
import Sidebar from "../components/sidebar"
import MenuAppBar from "../components/navbar";

function AppLayout({children}) {
  return (
    <>
        {/* Sidebar */}
        <Box
            sx={{
                display: {lg: 'flex', xs: 'none'}
            }}
        >
            <Box
                sx={{
                    width: '16%',
                    height: '100vh',
                    p: '0.8rem'
                }}
            >
                <Sidebar />
            </Box>
            <Box
                sx={{
                    width: '84%',
                    height: '100vh',
                    p: '1.6rem'
                }}
            >
                {children}
            </Box>
        </Box>

        {/* Navbar */}
        {/* <Toolbar
            sx={{
                display: {lg: 'none', xs: 'block'},
                p: '1rem'
            }}
        >
            <IconButton>
                <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Stack direction='row'>
                <Avatar />
            </Stack>
        </Toolbar> */}
        <Box sx={{display: {lg: 'none'}}}>
            <MenuAppBar>
                {children}
            </MenuAppBar>
        </Box>
    </>
  )
}

export default AppLayout