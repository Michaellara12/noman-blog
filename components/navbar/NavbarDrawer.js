// MUI
import { IconButton, Drawer } from "@mui/material"

// Icons
import MenuIcon from '@mui/icons-material/Menu';

// React
import { useState } from "react";

// Components
import SidebarData from "../sidebar/SidebarData";

// <---------------------------------------------> //

function NavbarDrawer() {

  const [state, setState] = useState(false)
  const toggleDrawer = (open) => (e) => {
    setState(open)
  }

  return (
    <>
        <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
        </IconButton>
        <Drawer
            anchor={'left'}
            open={state}
            onClose={toggleDrawer(false)}
            PaperProps={{
                sx: {
                    width: '75%',
                    p: '1.2rem'
                }
            }}
        >
            <SidebarData />
        </Drawer>
    </>
  )
}

export default NavbarDrawer