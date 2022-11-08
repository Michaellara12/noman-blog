// MUI
import { TextField, Box, Button, Stack, Paper, Snackbar, Alert, Slide  } from "@mui/material"

// Icons
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';

// Dependencies
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

// firebase
import { doc, deleteDoc } from 'firebase/firestore';
import { useAuth } from "../../contexts/AuthContext"
import db from "../../lib/firebase";


// <------------------------------------------------> //

function OutputSample({defaultValue, outputId, proyectoId}) {

  const [inputVal, setInputVal] = useState(defaultValue);
  const [open, setOpen] = useState(false)
  const [transition, setTransition] = useState(undefined);
  const { currentUser } = useAuth()

  // Snackbar
  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }

  // Delete output
  const deleteOutput = async (id, e) => {
    e.stopPropagation();

    const docRef = doc(db, "users", currentUser.uid, "proyectos", proyectoId, "gptOutputs", id);
    await deleteDoc(docRef)

  }

  return (
    <>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} TransitionComponent={transition}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Texto copiado en el portapapeles
            </Alert>          
        </Snackbar>
        <Paper
                    sx={{
                        alignSelf: 'center',
                        width: {lg: '60%', xs: '90%' },
                        p: '2rem',
                        my: '0.5rem'
                    }}    
            >
            <Box
                component="form"
                autoComplete="off"
                sx={{
                    width: '100%'
                }}
                >
                    <TextField
                        multiline
                        sx={{
                            width: '100%',
                        }}
                        defaultValue={defaultValue}
                        onChange={(e) => setInputVal(e.target.value)}
                    />
                    <Stack
                        direction={{lg: 'row', xs: 'column'}}
                        spacing={2}
                        sx={{mt: '1rem'}}
                    >   
                        <CopyToClipboard text={inputVal}>
                            <Button 
                                startIcon={<ContentCopyIcon />}
                                sx={{p: '1rem 2rem'}}
                                variant='contained'
                                color='secondary'
                                onClick={handleClick(TransitionUp)}
                            >
                                Copiar
                            </Button>
                        </CopyToClipboard>
                        {/* <Button>
                            Guardar
                        </Button> */}
                        <Button 
                            startIcon={<DeleteIcon />}
                            sx={{p: '1rem 2rem'}}
                            variant='outlined'
                            color='error'
                            onClick={e => deleteOutput(outputId, e)}
                            // onClick={console.log(outputId)}
                        >
                            Eliminar
                        </Button>
                    
                    </Stack>
            </Box>
        </Paper>
    </>
  )
}

export default OutputSample