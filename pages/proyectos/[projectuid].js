// MUI
import { Typography, Box, Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';

// Components
import AppLayout from '../../layout/AppLayout'
import ContentBuilder from '../../components/contentbuilder/ContentBuilder'
import OutputSample from '../../components/contentbuilder/OutputSample'

// other
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// Firebase
import { collection, onSnapshot, query, orderBy, doc, getDoc } from 'firebase/firestore'
import db from '../../lib/firebase'
import { useAuth } from '../../contexts/AuthContext'

// Auth
import { privatePage } from '../../contexts/FirebaseAuth'

// <-----------------------------------------------> //

function NoProjectFound() {
  const router = useRouter();

  function redirect(e) {
    e.preventDefault()

    router.push('/')
  }

  return (
    <>
    <Box
      // sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '90vh', p: {lg: 'none', xs: '2rem'} }}
      sx={{ display: {lg: 'flex', xs: 'none'}, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '90vh'}}

    >
      <Box
      >
        <Typography variant='h2'>Oops este proyecto no existe o fue eliminado...</Typography>
      </Box>
      <Box
        sx={{display: 'flex', justifyContent: 'center'}}
      >
        <img src='https://entey.net/wp-content/uploads/2022/11/error404-03-min.png' width='60%'/>
      </Box>
      <Button variant='contained' startIcon={<HomeIcon/>} sx={{fontSize: 'large', p: '1rem 2rem'}} onClick={redirect}>Regresar a la página principal</Button>
    </Box>
    <Box
      // sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '90vh', p: {lg: 'none', xs: '2rem'} }}
      sx={{ display: {lg: 'none', xs: 'flex'}, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '90vh', p: '2rem'}}

    >
      <Box
      >
        <Typography variant='h2'>Oops este proyecto no existe o fue eliminado...</Typography>
      </Box>
      <Box
        sx={{display: 'flex', justifyContent: 'center'}}
      >
        <img src='https://entey.net/wp-content/uploads/2022/11/error404-03-min.png' width='100%'/>
      </Box>
      <Button variant='contained' startIcon={<HomeIcon/>} sx={{fontSize: 'large', p: '1rem'}} onClick={redirect}>Regresar a la página principal</Button>
    </Box>
    </>
  )
}


function Proyecto() {
  const [gptOutputs, setGptOutputs] = useState([]);
  const [formValues, setFormValues] = useState([]);
  const { currentUser } = useAuth()

  const { asPath } = useRouter();
  const ProjectDocId = asPath.split("/").pop();

  

    useEffect(() => {
      
      const collectionRef = collection(db, "users", currentUser.uid, "proyectos", ProjectDocId, "gptOutputs")

      const q = query(collectionRef, orderBy("timestamp", "desc"));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        setGptOutputs(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id, timestamp: doc.data().timestamp?.toDate().getTime()})))
      })
  
      return unsubscribe;
    }, [])

    useEffect(() => {
      db.collection("users").doc(currentUser.uid).collection("proyectos").doc(ProjectDocId).onSnapshot(snapshot => (setFormValues(snapshot.data())))
    }, [])

  


  return (
    <AppLayout>
        {!formValues ? <NoProjectFound /> : <ContentBuilder form_title={formValues.form_title} form_placeholder={formValues.form_placeholder} form_input={formValues.form_input} gptOutputs={gptOutputs} proyectoId={ProjectDocId} tipo={formValues.tipo} projectTitle={formValues.project_title}/>}
    </AppLayout>
  )
}

export default privatePage(Proyecto)