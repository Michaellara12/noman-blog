// MUI
import { Button, Typography, Stack, DialogTitle, IconButton, styled, Dialog, DialogContent, DialogActions, Box, Grid } from "@mui/material"

// Icons
import NoteAddIcon from '@mui/icons-material/NoteAdd';

// other
import { useState } from "react";
import TemplateTab from "./ProyectosTabBtn";

// Icons
import CloseIcon from '@mui/icons-material/Close';
import TagIcon from '@mui/icons-material/Tag';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import GoogleIcon from '@mui/icons-material/Google';


// <-----------------------------------------------------------> //

  
function BootstrapDialogTitle(props) {
   const { children, onClose, ...other } = props;
  
   return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
}

const templates = [
    {
        icon: (<TagIcon fontSize='large' />),
        title: 'Social Media Bio',
        description: 'Create a short bio that engages your audience!',
        id: 'sm-bio',
        projectData: { 
          form_title: "¿De que se trata tu publicación de IG?",
          form_placeholder: "p. ej. placeholder publicación IG",
          form_input: "Texto creado previamente por el usuario",
          tipo: "sm-igcaption",
          project_title: "IG project title",
          project_caption: "IG project caption",
        }
    },
    {
        icon: (<EmailIcon fontSize='large' />),
        title: 'Email marketing',
        description: 'Create a short bio that engages your audience!',
        id: 'sm-bio2',
        projectData: { 
          form_title: "¿De que se trata tu email?",
          form_placeholder: "p. ej. placeholder email",
          form_input: "Texto creado previamente por el usuario",
          tipo: "sm-igcaption",
          project_title: "IG project title",
          project_caption: "IG project caption",
        }
    },
    {
        icon: (<SearchIcon fontSize='large' />),
        title: 'SEO Meta-titles',
        description: 'Create a short bio that engages your audience and a buncho of irrelventa long text !!',
        id: 'sm-bio3',
        projectData: { 
          form_title: "¿De que se trata tu producto?",
          form_placeholder: "p. ej. placeholder publicación IG",
          form_input: "Texto creado previamente por el usuario",
          tipo: "sm-igcaption",
          project_title: "IG project title",
          project_caption: "IG project caption",
        }
    },
    {
        icon: (<GoogleIcon fontSize='large' />),
        title: 'AdWords ad copy',
        description: 'Create a short bio that engages your audience!',
        id: 'sm-bio4',
        projectData: { 
          form_title: "¿De que se trata tu publicación de IG?",
          form_placeholder: "p. ej. placeholder publicación IG",
          form_input: "Texto creado previamente por el usuario",
          tipo: "sm-igcaption",
          project_title: "IG project title",
          project_caption: "IG project caption",
        }
    },
    {
        icon: (<TagIcon fontSize='large' />),
        title: 'Social Media Bio',
        description: 'Create a short bio that engages your audience!',
        id: 'sm-bio5',
        projectData: { 
          form_title: "¿De que se trata tu publicación de IG?",
          form_placeholder: "p. ej. placeholder publicación IG",
          form_input: "Texto creado previamente por el usuario",
          tipo: "sm-igcaption",
          project_title: "IG project title",
          project_caption: "IG project caption",
        }
    },
  //   {
  //     icon: (<TagIcon fontSize='large' />),
  //     title: 'Social Media Bio',
  //     description: 'Create a short bio that engages your audience!',
  //     id: 'sm-bio6'
  //   },
  //   {
  //     icon: (<TagIcon fontSize='large' />),
  //     title: 'Social Media Bio',
  //     description: 'Create a short bio that engages your audience!',
  //     id: 'sm-bio7'
  // }
]



function NewProjectTab() {

  const [open, setOpen] = useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
    <Button 
        variant='contained'
        color='secondary'
        onClick={handleClickOpen}
        sx={{
          m: {lg: '0.5rem', xs: '0.5rem 0 2rem 0'},
          p: {lg: 0, xs: '2rem 0'}
        }}
    >
        <Stack
            alignItems='center'
            spacing={2}
        >
            <NoteAddIcon fontSize='large' />
            <Typography>Crear un proyecto nuevo</Typography>
        </Stack>
    </Button>
    <Dialog
    onClose={handleClose}
    aria-labelledby="customized-dialog-title"
    open={open}
    maxWidth={'lg'}
  >

    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} >
      Escoge una plantilla
    </BootstrapDialogTitle>
    <DialogContent dividers > 
        <Box
          sx={{
            display: {lg: 'grid', xs: 'none'},
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'auto',
            height: '100%'
          }}
        >
          {templates.map((template) => (
            <TemplateTab title={template.title} description={template.description} icon={template.icon} projectData={template.projectData} key={template.id}/>            
          ))}
        
        {/* <Grid container columns={{ xs: 4, sm: 8, md: 20 }} spacing={2}>
        {templates.map((template) => (
            <Grid item xs={2} sm={4} md={4} key={template.id} >
            <TemplateTab title={template.title} description={template.description} icon={template.icon} projectData={template.projectData} />
          </Grid>
        ))}
        </Grid> */}
        </Box>
        <Box
          sx={{
            display: {lg: 'none', xs: 'flex'},
            flexDirection: 'column'
          }}
        >
          {templates.map((template) => (
            <TemplateTab title={template.title} description={template.description} icon={template.icon} projectData={template.projectData} key={template.id} />            
          ))}
        </Box>
    </DialogContent>
    {/* <DialogActions>
      <Button autoFocus onClick={handleClose}>
        Save changes
      </Button>
    </DialogActions> */}
  </Dialog>
  </>
  )
}

export default NewProjectTab