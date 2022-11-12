// MUI
import { AppBar, Box, Toolbar, alpha, styled } from '@mui/material'

// Components
import NavbarDrawer from './NavbarDrawer';
import NavbarProfile from './NavbarProfile';

// other
import Link from 'next/link';

// <-------------------------------------> //

const AppBarStyled = styled(AppBar)(({theme}) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.paper, 0.72),
  height: '4rem',
  display: 'flex',
  justifyContent: 'center'
}))

export default function MenuAppBar({children}) {

  return (
    <>
    <Box sx={{ display: {lg: 'none'}, mb: '1.6rem' }}>
      <AppBarStyled>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
        <NavbarDrawer />
        <Box sx={{ width: '6rem' }}>
          <Link href='/'>
            <img src='https://entey.net/wp-content/uploads/2022/10/orange-lettering-2-min.png'/>
          </Link>
        </Box>
        <NavbarProfile />
        </Toolbar>
      </AppBarStyled>
    </Box>
      {children}
    </>
  );
}
