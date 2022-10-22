// MUI
import { Paper, Box, Divider } from "@mui/material"

// Components
import NavItem from "./NavItem";
import MenuPopupState from "../../layout/AccountMenu";
import SidebarFooter from "./SidebarFooter";

// Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WidgetsIcon from '@mui/icons-material/Widgets';


const items = [
    {
        href: '/cuenta',
        icon: (<AccountCircleIcon fontSize="small" />),
        title: 'Cuenta'
    },
    {
        href: '/',
        icon: (<WidgetsIcon fontSize="small" />),
        title: 'Buttons'
    },
    {
      href: '/registro',
      icon: (<WidgetsIcon fontSize="small" />),
      title: 'Registro'
    },
    {
      href: '/ingresar',
      icon: (<WidgetsIcon fontSize="small" />),
      title: 'Ingresar'
    }
]

function Sidebar() {
  return (
    <Paper
        elevation={4}
        sx={{
            height: '100%',
            borderRadius: '1.6rem',
            p: '0 1rem',
            overflow:'scroll'
        }}
        
    >

    {/* Logo */}
    <Box
      sx={{
        p: '1rem 2rem',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <img src='https://entey.net/wp-content/uploads/2022/10/orange-lettering-2-min.png' />
    </Box>

    {/* Account drop-down button */}
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <MenuPopupState />
    </Box>

    <Divider 
      sx={{
        my: 3
      }}
    />
    
    {/* Sidebar items */}
    <Box sx={{ flexGrow: 1 }}>
      {items.map((item) => (
        <NavItem
          key={item.title}
          icon={item.icon}
          href={item.href}
          title={item.title}
        />
        ))}
    </Box>

    <Divider 
      sx={{
        my: 3
      }}
    />

    {/* Footer */}
    <SidebarFooter />
    </Paper>
  )
}

export default Sidebar

