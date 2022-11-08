// MUI
import { Button, Stack, Typography } from "@mui/material";

// firebase
import db from "../../../lib/firebase";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useAuth } from "../../../contexts/AuthContext";

// NextJS
import Router from "next/router";

// <---------------------------------------------> //

function TemplateTab({icon, title, description, projectData}) {
    const { currentUser } = useAuth()
    async function handleTabClick(e) {
      try {
        const collectionRef = collection(db, "users", currentUser.uid, "proyectos")
        const docRef = await addDoc(collectionRef, {...projectData, timestamp: serverTimestamp()})
        const docRefId = docRef._key.path.segments[3];
        Router.push(`/proyectos/${docRefId}`)
      } catch (e) {
        console.log(e)
      }
    } 

    return (
      <>
        <Button
            sx={{m: '0.5rem', p: '1.5rem'}}
            variant='outlined'
            onClick={handleTabClick}
        >
            <Stack
                direction='column'
                spacing={1}
            >
                {icon}
                <Typography variant='subtitle1' align='left'>{title}</Typography>
                <Typography variant='body2' align='left'>{description}</Typography>
                    
            </Stack>
        </Button>
      </>
    )
}

export default TemplateTab