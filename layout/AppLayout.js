import { Box } from "@mui/system"

// Components
import Sidebar from "../components/sidebar"

function AppLayout({children}) {
  return (
    <Box
        sx={{
            display: 'flex'
        }}
    >
        <Box
            sx={{
                width: '18%',
                height: '100vh',
                p: '0.8rem'
            }}
        >
            <Sidebar />
        </Box>
        <Box
            sx={{
                width: '86%',
                height: '100vh',
                p: '1.6rem'
            }}
        >
            {children}
        </Box>
    </Box>
  )
}

export default AppLayout