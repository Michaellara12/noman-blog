// MUI
import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material"

// React
import { useState } from "react";

// Auth
import { auth } from "../../lib/firebase";


// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavbarProfile() {

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [error, setError] = useState("");
  
  async function handleLogout() {
    setError("")

    try {
      await auth.signOut();
      router.push('/ingresar')
    } catch {
      setError("Failed to log out")
    }
    
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
                src='https://entey.net/wp-content/uploads/2022/08/robot.webp'
            />
        </IconButton>
        <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            <MenuItem
                onClick={handleLogout}
            >
              <Typography>Cerrar sesión</Typography>
            </MenuItem>
            </Menu>
    </>
  )
}

export default NavbarProfile