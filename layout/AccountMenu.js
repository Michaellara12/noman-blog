// Dependencies
import * as React from 'react';

// MUI
import { Box } from '@mui/system';
import { Button, Menu, MenuItem } from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

// Icons
import LogoutIcon from '@mui/icons-material/Logout';


// Components
import AccountMenuBtn from './AccountMenuBtn';

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)} disableRipple sx={{ m: '0', p: '1rem', bgcolor: 'noman.gray', borderRadius: '1.6rem' }} >
            <Box
              
            >
                <AccountMenuBtn />
            </Box>
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close} sx={{width: '15rem', py: '1rem'}}>
              <LogoutIcon sx={{mr: '1rem'}}/>
                Cerrar sesión
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
