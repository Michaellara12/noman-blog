// Dependencies
import { useRouter } from 'next/router'
import { useState } from 'react';

// MUI
import { Box } from '@mui/system';
import { Button, Menu, MenuItem } from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

// Icons
import LogoutIcon from '@mui/icons-material/Logout';

// Components
// import AccountMenuBtn fro../components/sidebar/AccountMenuBtnBtn';
import AccountMenuBtn from './AccountMenuBtn';
// firebase
import { auth } from '../../lib/firebase';

// <-----------------------------------------------> //

export default function BotonPerfil() {
  const router = useRouter()
  const [error, setError] = useState("")

  async function handleLogout() {
    setError("")

    try {
      await auth.signOut();
      router.push('/ingresar')
    } catch {
      setError("Failed to log out")
    }
    
  }
 


  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button variant="contained" {...bindTrigger(popupState)} disableRipple sx={{ m: '0', p: '1rem', borderRadius: '1.6rem', width: '100%' }} >
            <Box
            >
                <AccountMenuBtn />
            </Box>
          </Button>
          <Menu {...bindMenu(popupState)}>
            {/* <MenuItem onClick={popupState.close} sx={{width: '15rem', py: '1rem'}}> */}
            <MenuItem onClick={handleLogout} sx={{width: {lg: '18rem', xs: '16rem'}, py: '1rem'}}>
              <LogoutIcon sx={{mr: '1rem'}}/>
                Cerrar sesión
            </MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
}
