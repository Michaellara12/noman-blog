import { Box } from "@mui/system"
import { CircularProgress } from "@mui/material"

function Loader() {
  return (
    <Box
        sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <CircularProgress />
    </Box>
  )
}

export default Loader