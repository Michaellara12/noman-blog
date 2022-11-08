// MUI
import { Typography, Box, TextField, Paper, Stack, Button, useTheme, Divider, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

// Components
import MoreInfo from "./MoreInfo"
import OutputSample from "./OutputSample"

// Icons
import CreateIcon from '@mui/icons-material/Create';

// other
import axios from "axios";
import { useState, useRef } from "react";
import { doc, updateDoc } from "firebase/firestore"; 
import db from "../../lib/firebase";
import { useFormik } from "formik";
import { useAuth } from "../../contexts/AuthContext";

// <------------------------------------------> //

function ContentBuilder({form_title, form_placeholder, form_input, gptOutputs, proyectoId, tipo, projectTitle}) {

  function gptRequest(e) {
    e.preventDefault()

    axios.post("https://hook.us1.make.com/op5vbserk412ykqn76d9m1to8p1g74ml", {
        proyectoId: proyectoId,
        prompt: prompt,
        tipo: tipo

      })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        })
  }

  const [prompt, setPrompt] = useState(form_input)
  const [newTitle, setNewTitle] = useState("")
  const [open, setOpen] = useState(false);
  const theme = useTheme()
  const { currentUser }  = useAuth()

  const handleClickOpen = () => {
      setOpen(true);
  };
  
  const handleClose = () => {
      setOpen(false);
  };

  // Modal
  const valueRef = useRef('')

  async function updateProjectTitle(e) {
     e.preventDefault()
     handleClose()
     const docRef = doc(db, "users", currentUser.uid, "proyectos", proyectoId)
     await updateDoc(docRef, {
        project_title: valueRef.current.value
     })
  }


  // Modal
  function FormDialog() {
  
    // const formik = useFormik({})

    return (
      <div>
       
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edita el nombre del proyecto</DialogTitle>
          <DialogContent>
           
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre del proyecto"
            //   type="text"
              fullWidth
              variant="standard"
              inputRef={valueRef}
            //   value={formik.values.title}
            //   onChange={formik.handleChange}
            //   onChange={(e) => setNewTitle(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            {/* <Button onClick={handleClose} variant='contained'>Guardar</Button> */}
            <Button onClick={updateProjectTitle} variant='contained'>Guardar</Button>

          </DialogActions>
        </Dialog>
      </div>
    );
  }



  return (
    <>
        <FormDialog />
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                flexDirection: 'column',
                overflow: 'scroll'
            }}
        >
            <Box
                sx={{
                    alignSelf: 'center',
                    width: {lg: '60%', xs: '90%' }
                }}
            >
                <Stack
                    direction='row'
                    spacing={2}
                    alignItems='baseline'
                    justifyContent='space-between'
                    sx={{mt: {lg: 0, xs: '4rem'}}}
                >
                    <Typography variant='h3' align='left' gutterBottom sx={{mb: '1rem'}}>
                        {projectTitle}
                    </Typography>
                    <Button
                        variant='contained'
                        sx={{p: '1rem', boxShadow: 'none'}}
                        onClick={handleClickOpen}
                        color='secondary'
                    >
                        <CreateIcon />
                    </Button>
                </Stack>
                
            </Box>
            
            <Paper
                sx={{
                    alignSelf: 'center',
                    width: {lg: '60%', xs: '90%' },
                    p: '2rem',
                    // mt: {xs: '4rem'}
                }}
            >
                <Stack
                    spacing={2}
                >
                <Stack
                    direction='row'
                    spacing={1}
                    alignItems='center'                    
                >
                    <Box
                        sx={{
                            borderRadius: '50%',
                            bgcolor: theme.palette.primary.main,
                            height: '2rem',
                            width: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: theme.customShadows.primary,
                            p: '1rem'
                        }}
                    >
                        {/* <Typography sx={{color: '#FFF'}}>1</Typography> */}
                        <CreateIcon sx={{color: '#FFF'}} fontSize="small"/>
                    </Box>
                    <Typography>{form_title}</Typography>
                    {/* <MoreInfo /> */}
                </Stack>
                <Box
                    component="form"
                    autoComplete="off"
                    sx={{
                        width: '100%'
                    }}
                >
                    <TextField
                        id="outlined-textarea"
                        placeholder={form_placeholder}
                        defaultValue={form_input}
                        onChange={(e) => setPrompt(e.target.value)}
                        multiline
                        sx={{
                            width: '100%',
                        }}
                    />
                </Box>
                <Button
                    variant="contained"
                    sx={{p: '1rem 2rem'}}
                    onClick={gptRequest}
                >
                    Crear contenido
                </Button>
                </Stack>
            </Paper>
            <Divider sx={{my: '2rem'}}/>
            {gptOutputs.map((gptOutput) => (
                <OutputSample key={gptOutput.id} outputId={gptOutput.id} defaultValue={gptOutput.outputText} proyectoId={proyectoId}/>
            ))}
        </Box>
    </>
  )
}

export default ContentBuilder