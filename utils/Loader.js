import { CircularProgress } from "@mui/material"

function Loader({ show }) {
  return show ? <CircularProgress /> : null;
}

export default Loader