// MUI
import { Typography, Box, TextField, Paper, Stack, Button, useTheme, Divider, Dialog, DialogActions, DialogContent, IconButton, DialogTitle, MenuItem, Menu } from "@mui/material"

// Components
import MoreInfo from "./MoreInfo"
import OutputSample from "./OutputSample"
import Loader from "../../utils/SmallLoader";

// Icons
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// other
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { deleteDoc, doc, updateDoc, onSnapshot } from "firebase/firestore"; 
import db from "../../lib/firebase";
import { useAuth } from "../../contexts/AuthContext";
import Router from "next/router";


// <------------------------------------------> //

function ContentBuilder({form_title, form_placeholder, form_input, gptOutputs, proyectoId, tipo, projectTitle}) {

  const [prompt, setPrompt] = useState(form_input)
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const [smallLoader, setSmallLoader] = useState(false)
  const [palabras, setPalabras] = useState(0)
  const theme = useTheme()
  const { currentUser }  = useAuth()

  const docRef = db.collection("users").doc(currentUser.uid)

  useEffect(() => {
    setSmallLoader(false)
  }, [gptOutputs])

  useEffect(() => {

    const unsubscribe = onSnapshot(docRef, (doc) => {
        setPalabras(doc.data().palabras)
    })

    return unsubscribe
    
  }, [])

  function gptRequest(e) {
    e.preventDefault()
    setSmallLoader(true)

    axios.post("https://hook.us1.make.com/op5vbserk412ykqn76d9m1to8p1g74ml", {
        proyectoId: proyectoId,
        prompt: prompt,
        tipo: tipo,
        userId: currentUser.uid,
        userEmail: currentUser.email,
        palabras: palabras
      })
        .then(function (response) {
            console.log('prompt enviado')
        })
        .catch(function (error) {
            console.log(error)
        })
  }

  

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
              fullWidth
              variant="standard"
              inputRef={valueRef}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={updateProjectTitle} variant='contained'>Guardar</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

    // Eliminar proyecto
    const [anchorElUser, setAnchorElUser] = useState(null);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    async function deleteProject(e) {
        e.stopPropagation();
        setLoading(true)
        const docRef = doc(db, "users", currentUser.uid, "proyectos", proyectoId)
        await deleteDoc(docRef)
        setTimeout(() => {
            Router.push('/')
        }, 3000)
        
    }


  return (
    <>
        <FormDialog />
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
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
                    <Stack
                        direction='row'
                        spacing={2}
                        sx={{mb: '1rem'}}
                        alignItems='center'
                    >
                        <IconButton
                            // variant='outlined'
                            sx={{boxShadow: 'none', p: '0.5rem'}}
                            onClick={() => {Router.push("/")}}
                            color='secondary'
                        >
                            <ChevronLeftIcon fontSize='small'/>
                        </IconButton>
                        <Typography variant='h3' align='left' gutterBottom sx={{mb: '1rem'}}>
                            {projectTitle}
                        </Typography>
                    </Stack>
                    
                    <Stack
                        direction='row'
                        spacing={1}
                    >
                    <Button
                        variant='contained'
                        sx={{p: '1rem', boxShadow: 'none'}}
                        onClick={handleClickOpen}
                        color='secondary'
                    >
                        <CreateIcon />
                    </Button>
                    <Button
                        variant='contained'
                        sx={{p: '1rem', boxShadow: 'none'}}
                        onClick={handleOpenUserMenu}
                        color='error'
                    >
                        <DeleteOutlineIcon />
                    </Button>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        >
                       
                        <MenuItem
                            onClick={deleteProject}
                        >
                        <HighlightOffIcon color='error' sx={{mr: '0.5rem'}} />
                        <Typography>Eliminar proyecto</Typography>
                        </MenuItem>
                    </Menu>
                    </Stack>
                </Stack>
                
            </Box>
            
            <Paper
                sx={{
                    alignSelf: 'center',
                    width: {lg: '60%', xs: '90%' },
                    p: '2rem',
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
                        inputProps={{ maxLength: 1500 }}
                    />
                </Box>
                <Button
                    variant="contained"
                    sx={{p: '1rem 2rem'}}
                    onClick={gptRequest}
                    disabled={smallLoader}
                >
                    Crear contenido
                </Button>
                </Stack>
            </Paper>
            <Divider sx={{my: '2rem'}}/>
            
            {smallLoader ? (
                <Loader />
            ) : (
                gptOutputs.map((gptOutput) => (
                    <OutputSample key={gptOutput.id} outputId={gptOutput.id} defaultValue={gptOutput.outputText} proyectoId={proyectoId}/>
                ))
            )
        }
        </Box>
    </>
  )
}

export default ContentBuilder