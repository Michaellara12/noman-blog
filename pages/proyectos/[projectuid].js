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
        <ContentBuilder form_title={formValues.form_title} form_placeholder={formValues.form_placeholder} form_input={formValues.form_input} gptOutputs={gptOutputs} proyectoId={ProjectDocId} tipo={formValues.tipo} projectTitle={formValues.project_title}/>
        {/* {gptOutputs.map((gptOutput) => (
          <OutputSample key={gptOutput.id} id={gptOutput.id} defaultValue={gptOutput.outputText} />
        ))} */}
        {/* {gptOutputs.map((gptOutput) => (
          <h1>{gptOutput.id}</h1>
          
        ))} */}
    </AppLayout>
  )
}

export default privatePage(Proyecto)