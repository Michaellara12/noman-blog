import { Box } from "@mui/system"
import { CircularProgress } from "@mui/material"

function Loader() {
  return (
    <Box
        sx={{
            width: '100%',
            height: '100%',
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