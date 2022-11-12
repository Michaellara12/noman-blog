// MUI
import { Box, Divider } from "@mui/material"

// Components
import NavItem from "./NavItem";
import BotonPerfil from "./BotonPerfil";
import SidebarFooter from "./SidebarFooter";

// Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

// other
import Link from "next/link";

// <----------------------------------------------> //


const items = [
    {
      href: '/',
      icon: (<HistoryEduIcon fontSize="small" />),
      title: 'Mis proyectos'
    },
    {
        href: '/cuenta',
        icon: (<AccountCircleIcon fontSize="small" />),
        title: 'Cuenta'
    },
    
]

function SidebarData() {

  return (
    <>

      {/* Logo */}
      <Box
        sx={{
          // p: '2rem 2rem 1rem 2rem',
          p: '2rem 3rem',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        <Link href='/'>
          <img src='https://entey.net/wp-content/uploads/2022/10/orange-lettering-2-min.png' />
        </Link>
      </Box>

      {/* Account drop-down button */}
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 0,
          m: 0
        }}
      >
        <BotonPerfil />
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
    </>
  )
}

export default SidebarData