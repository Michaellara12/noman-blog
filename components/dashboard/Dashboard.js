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

// other
import { useEffect, useState } from "react"
import db from "../../lib/firebase"
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"
import { useAuth } from "../../contexts/AuthContext"

// <--------------------------------------------> //

const templates = [
  {
    icon: (<TagIcon fontSize='large' />),
    title: 'Social Media Bio',
    description: 'Create a short bio that engages your audience! and has more irrelevant text',
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
      project_title: "Email project title",
      project_caption: "Email project caption",
    }
},
{
    icon: (<SearchIcon fontSize='large' />),
    title: 'SEO Meta-titles',
    description: 'Create a short bio that engages your audience!',
    id: 'sm-bio3',
    projectData: { 
      form_title: "¿De que se trata tu producto?",
      form_placeholder: "p. ej. placeholder publicación IG",
      form_input: "Texto creado previamente por el usuario",
      tipo: "sm-igcaption",
      project_title: "SEO project title",
      project_caption: "SEO project caption",
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
        overflow: 'scroll',

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
          <NewProjectTab />
          {templates.map((template) => (
            <TemplateTab title={template.title} description={template.description} icon={template.icon} projectData={template.projectData} key={template.id}/>
          ))}
        </Box>
        

      </Box>
      <Paper 
        // sx={{ gridArea: 'contacto', bgcolor: 'secondary.light', p: '2rem', boxShadow: theme.customShadows.secondary }}
        sx={{ 
          gridArea: 'contacto', 
          p: '2rem', 
          ml: '1rem',
          boxShadow: theme.customShadows.primary, 
          height: '80%'
        }}

        // sx={{ gridArea: 'contacto', p: '2rem' }}
        // elevation={6}
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
      {projects.map((project) => (
          <MisProyectosTab project_title={project.project_title} project_caption={project.project_caption} prompt={project.form_input} key={project.id} project_id={project.id}/>
        ))}
    </Box>
    </>
  )
}

export default Dashboard