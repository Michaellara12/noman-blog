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
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';


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
      icon: (<VerticalSplitIcon fontSize='large' />),
      title: 'Ejes Temáticos',
      description: 'Desarrolla cualquier tema a partir de 8 ejes temáticos.',
      id: 'ejes_tematico',
      projectData: { 
        form_title: "¿Sobre qué título quieres obtener ejes temáticos?",
        form_placeholder: "p. ej. Cómo triunfar en ventas por internet",
        form_input: "",
        tipo: "ejes_tematico",
        project_title: "Sin título",
        project_caption: "Ejes temáticos",
      }
    },
    {
      icon: (<HistoryEduIcon fontSize='large' />),
      title: 'Artículo',
      description: 'A partir de los ejes temáticos crea un artículo completo.',
      id: 'ejes_articulo',
      projectData: { 
        form_title: "Agrega los 8 ejes temáticos para construir el artículo",
        form_placeholder: "p. ej. 1. El Museum of Natural Arts in Amsterdam es un lugar único en su clase.  2. El museo muestra muchas de las anomalías genéticas que han afectado a la humanidad a lo largo de la historia..",
        form_input: "",
        tipo: "ejes_articulo",
        project_title: "Sin título",
        project_caption: "Artículo",
      }
    },
    {
        icon: (<VerticalSplitIcon fontSize='large' />),
        title: 'Lluvia de ideas',
        description: 'Crea ideas estupendas para cualquier tema o problema.',
        id: 'llu_ideas',
        projectData: { 
          form_title: "¿Sobre qué tema quieres recibir ideas?",
          form_placeholder: "p. ej. como revertir el cambio climático...",
          form_input: "",
          tipo: "llu_ideas",
          project_title: "Sin título",
          project_caption: "Lluvia de ideas",
        }
    },
    {
      icon: (<VerticalSplitIcon fontSize='large' />),
      title: 'Títulos',
      description: 'Crea cinco títulos para artículos de blog.',
      id: 'titulo',
      projectData: { 
        form_title: "¿Cuál es la palabra clave sobre la que quieres generar títulos?",
        form_placeholder: "p. ej. Zapatos para niño",
        form_input: "",
        tipo: "titulo",
        project_title: "Sin título",
        project_caption: "Títulos",
      }
    },
    
    {
      icon: (<VerticalSplitIcon fontSize='large' />),
      title: 'Resumen',
      description: 'Resume cualquier párrafo en segundos.',
      id: 'resumen',
      projectData: { 
        form_title: "Copia y pega el texto que deseas resumir.",
        form_placeholder: "p. ej. En un lugar de la mancha de cuyo nombre no quiero...",
        form_input: "",
        tipo: "resumen",
        project_title: "Sin título",
        project_caption: "Resumen",
      }
    },
    {
      icon: (<TagIcon fontSize='large' />),
      title: 'Respuesta a comentarios',
      description: '¿No sabes cómo responder ese comentario? Te damos la respuesta.',
      id: 'resp_comentarios',
      projectData: { 
        form_title: "Copia y pega aquí el comentario para el que deseas una respuesta.",
        form_placeholder: "p. ej. Antes eran mejor, en el 2018 hice una compra...",
        form_input: "",
        tipo: "resp_comentarios",
        project_title: "Sin título",
        project_caption: "Respuesta a comentarios",
      }
    },
    {
      icon: (<LocalGroceryStoreIcon fontSize='large' />),
      title: 'Descripción de producto',
      description: 'Crea cinco descripciones de producto para tu tienda.',
      id: 'des_producto',
      projectData: { 
        form_title: "¿Cuál es el producto o servicio?",
        form_placeholder: "p. ej. Seminario de desarrollo personal...",
        form_input: "",
        tipo: "des_producto",
        project_title: "Sin título",
        project_caption: "Descripción del producto",
        }
    },
    {
        icon: (<EmailIcon fontSize='large' />),
        title: 'Asuntos de Email',
        description: 'Crea 5 asuntos de para tus correos electrónicos.',
        id: 'asuntos',
        projectData: { 
          form_title: "¿Cuál es el propósito o tema del email?",
          form_placeholder: "p. ej. Conferencia el 10 de agosto",
          form_input: "",
          tipo: "asuntos",
          project_title: "Sin título",
          project_caption: "Asuntos de Email",
        }
    },
    {
      icon: (<RecordVoiceOverIcon fontSize='large' />),
      title: 'Objeciones',
      description: 'Crea tres posibles objeciones para tu producto o servicio.',
      id: 'objeciones',
      projectData: { 
        form_title: "¿Cuál es el producto o servicio del que deseas recibir objeciones?",
        form_placeholder: "p. ej. Un servicio de transporte privado...",
        form_input: "",
        tipo: "objeciones",
        project_title: "Sin título",
        project_caption: "Objeciones",
      }
    },
    {
        icon: (<RecordVoiceOverIcon fontSize='large' />),
        title: 'Opiniones',
        description: 'Crea una opinión positiva y una negativa frente a cualquier tema.',
        id: 'opinion',
        projectData: { 
          form_title: "¿Cuál es el tema sobre el que quieres una opinión?",
          form_placeholder: "p. ej. Ir de vacaciones a Cartagena.",
          form_input: "",
          tipo: "opinion",
          project_title: "Sin título",
          project_caption: "Opiniones",
        }
    },
    {
        icon: (<SearchIcon fontSize='large' />),
        title: 'Descripciones de SEO',
        description: 'Crea cinco descripciones SEO para tu artículo.',
        id: 'seo_descripcion',
        projectData: { 
          form_title: "¿Cuál es el titulo de tu artículo del que seas obtener SEO descripciones?",
          form_placeholder: "p. ej. 10 consejos sobre estrategia de contenido",
          form_input: "",
          tipo: "seo_descripcion",
          project_title: "Sin título",
          project_caption: "Descripción SEO",
        }
    },
    {
      icon: (<HistoryEduIcon fontSize='large' />),
      title: 'Texto Personalizado',
      description: 'Crea cualquier tipo de texto creativo, ponme a prueba.',
      id: 'custom',
      projectData: { 
        form_title: "Solicita cualquier texto que necesites",
        form_placeholder: "p. ej. ¿Cuál es mejor método para lanzar un producto?",
        form_input: "",
        tipo: "custom",
        project_title: "Sin título",
        project_caption: "Texto Personalizado",
      }
    },
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