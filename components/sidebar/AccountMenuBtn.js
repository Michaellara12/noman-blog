// MUI
import { Avatar, Typography } from "@mui/material"
import { Box } from "@mui/system"

// Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// other
import { useAuth } from "../../contexts/AuthContext";
import { useState, useEffect } from "react";
import { doc, onSnapshot, setDoc } from 'firebase/firestore'
import db from "../../lib/firebase";

// <-----------------------------------------------> //

function AccountMenuBtn() {

  const { currentUser } = useAuth();
  const [palabras, setPalabras] = useState()

  const docRef = db.collection("users").doc(currentUser.uid)

  useEffect(() => {

    const unsubscribe = onSnapshot(docRef, (doc) => {
        if(doc._document) {
            setPalabras(doc.data().palabras)
        } else {
            setDoc(docRef, {
                nombre: currentUser.displayName,
                email: currentUser.email,
                palabras: 1000
            })
        }
    })

    return unsubscribe
    
  }, [])


  return (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
        }}
    >
        <Avatar
            sx={{
                width: '4rem',
                height: '4rem',
                // m: {lg: '0.5rem 2.4rem 0.5rem 0', xs: '0.5rem 1.6rem 0.5rem 0'}
                // m: '1rem'
            }}
            // src={currentUser.photoURL}
            src='https://entey.net/wp-content/uploads/2022/08/robot.webp'
        /> 
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                justifyContent: 'center',
                p: '0 0.1rem',
                ml: '0.5rem'
            }}
        >
            <Typography
                variant='subtitle2'
                align='left'
            >
                {currentUser.displayName}
            </Typography>
            <Typography
                variant='body2'
                align='left'
            >
                Palabras: {palabras}
            </Typography>
        </Box>
        <KeyboardArrowDownIcon fontSize="medium" sx={{ ml: '0.2rem' }}/>

    </Box>
  )
}

export default AccountMenuBtn