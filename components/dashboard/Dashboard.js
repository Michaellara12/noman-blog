// MUI
import { Typography, Divider, useTheme, Box, Paper } from "@mui/material"

// Components
import NewProjectTab from "./tabs/ProyectosTab"
import TemplateTab from "./tabs/ProyectosTabBtn"
import InfoTab from "./tabs/InfoTab"
import MisProyectosTab from "./tabs/MisProyectosTab"

// Icons
import TagIcon from '@mui/icons-material/Tag';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';

// other
import { useEffect, useState } from "react"
import db from "../../lib/firebase"
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"
import { useAuth } from "../../contexts/AuthContext"

// <--------------------------------------------> //

const templates = [
  {
    icon: (<LocalGroceryStoreIcon fontSize='large' />),
    title: 'Descripción de producto',
    description: 'Crea 5 descripciones de producto para tu tienda.',
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
    description: 'Crea 5 asuntos para tus correos electrónicos.',
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
]

function Dashboard() {
  const theme = useTheme()
  const { currentUser } = useAuth()
  const [projects, setProjects] = useState([])

  useEffect(() => {
      
    const collectionRef = collection(db, "users", currentUser.uid, "proyectos")

    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setProjects(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id, timestamp: doc.data().timestamp?.toDate().getTime()})))
    })

    return unsubscribe;
  }, [])

  return (
    <>
  
    <Box
      sx={{
        display: {lg: 'grid', xs: 'none'},
        gridTemplateColumns: {lg: 'repeat(6, 1fr)', xs: 'repeat(2, 1fr)'},
        gridTemplateRows: {lg: 'repeat(8, 1fr)', xs: 'auto'},
        // gap: 1,
        gridTemplateAreas: {lg: `"misProyectos misProyectos misProyectos misProyectos contacto contacto"
          "tab tab tab tab contacto contacto"
          "tab tab tab tab contacto contacto"
          "tab tab tab tab contacto contacto"
          "plantillas plantillas plantillas plantillas plantillas plantillas"
          "plantillaTab plantillaTab plantillaTab plantillaTab plantillaTab plantillaTab"
          "plantillaTab plantillaTab plantillaTab plantillaTab plantillaTab plantillaTab"
          "plantillaTab plantillaTab plantillaTab plantillaTab plantillaTab plantillaTab"
        `, xs: `"misProyectos misProyectos"
          "contacto contacto"
          "plantillas plantillas"
          "plantillaTab plantillaTab"
        `},
        // width: '100%',
        height: '100%',
        // p: '3%',
        // alignItems: 'stretch', 
        // justifyContent: 'stretch', 
        // overflow: 'scroll',

      }}
    >
      <Box
        sx={{ gridArea: 'misProyectos', alignSelf: 'center'}}
      >
        <Typography
            variant='h2'
            sx={{ mt: {lg: 0, xs: '6rem'} }}
            color={theme.palette.info.main}
        >
            Crea un proyecto nuevo
        </Typography>
        <Divider sx={{ my: '1rem', width: '20%' }}/>
      </Box>
      <Box 
        sx={{ gridArea: 'tab' }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            // height: '100%'
          }}
        >

          {/* proyecto nuevo */}
          <NewProjectTab />

          {/* plantillas de proyecto */}
          {templates.map((template) => (
            <TemplateTab title={template.title} description={template.description} icon={template.icon} projectData={template.projectData} key={template.id}/>
          ))}
        </Box>
        

      </Box>
      <Paper 
        sx={{ 
          gridArea: 'contacto', 
          p: '2rem', 
          ml: '1rem',
          boxShadow: theme.customShadows.primary, 
          height: '75%'
        }}

        
      >
        <InfoTab />
      </Paper>
      <Box
        sx={{ gridArea: 'plantillas' }}
      >
        <Typography
            variant='h2'
            // sx={{ mt: {lg: '1rem', xs: '6rem'} }}
            color={theme.palette.info.main}
        >
            Mis proyectos
        </Typography>
        <Divider sx={{ my: '1rem', width: '20%' }}/>
      </Box>
      <Box 
        sx={{ 
          gridArea: 'plantillaTab',
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridTemplateRows: 'auto',
          // overflow: 'scroll',
        }}
      > 
        {projects.map((project) => (
          // <MisProyectosTab project_title={project.project_title} project_caption={project.project_caption} prompt={project.form_input} key={project.id} project_id={project.id} icon={<TagIcon fontSize='large'/>}/>
          <MisProyectosTab project_title={project.project_title} project_caption={project.project_caption} prompt={project.form_input} key={project.id} project_id={project.id} icon={"InstagramIcon"}/>
        ))}

      </Box>
    </Box>
    <Box
      sx={{display: {lg: 'none', xs: 'flex'}, flexDirection: {lg: 'none', xs: 'column'}, p: '1rem'}}
    >
      <Box>
        <Typography
              variant='h2'
              // sx={{ mt: {lg: '1rem', xs: '6rem'} }}
              color={theme.palette.info.main}
              sx={{mt: '3rem'}}
        >
            Crear un proyecto
        </Typography>
        <Divider sx={{ my: '1rem', width: '20%' }}/>
      </Box>
        <NewProjectTab />
      <Box>
        <Typography
              variant='h2'
              // sx={{ mt: {lg: '1rem', xs: '6rem'} }}
              color={theme.palette.info.main}
              // sx={{mt: '3rem'}}
        >
            Mis proyectos
        </Typography>
        <Divider sx={{ my: '1rem', width: '20%' }}/>
      </Box>
      <Box
        // sx={{height: '8rem'}}
      >
        {projects.map((project) => (
            <MisProyectosTab project_title={project.project_title} project_caption={project.project_caption} prompt={project.form_input} key={project.id} project_id={project.id}/>
        ))}
      </Box>
    </Box>
    </>
  )
}

export default Dashboard