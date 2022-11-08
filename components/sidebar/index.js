// MUI
import { Paper, Box, Divider } from "@mui/material"

// Components
import SidebarData from "./SidebarData";

// Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WidgetsIcon from '@mui/icons-material/Widgets';


function Sidebar() {

  return (
    <Paper
        elevation={4}
        sx={{
            height: '100%',
            borderRadius: '1.6rem',
            p: '0 1rem',
            overflow:'scroll',
        }}
        
    >
      <SidebarData />
    </Paper>
  )
}

export default Sidebar

