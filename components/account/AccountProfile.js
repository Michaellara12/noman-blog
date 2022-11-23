// MUI
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
  } from '@mui/material';

// other
import { useAuth } from '../../contexts/AuthContext';
import { useState, useEffect } from 'react'
import db from "../../lib/firebase"
import { onSnapshot } from "firebase/firestore"

// <------------------------------------------> //

function AccountProfile() {
  const [palabras, setPalabras] = useState(0)

  const { currentUser } = useAuth();
//   useEffect(() => {

//     const unsubscribe = onSnapshot(docRef, (doc) => {
//         if(doc._document) {
//             setPalabras(doc.data().palabras)
//         } else {
//             setDoc(docRef, {
//                 nombre: currentUser.displayName,
//                 email: currentUser.email,
//                 palabras: 1000
//             })
//         }
//     })

//     return unsubscribe
    
//   }, [])
  const docRef = db.collection("users").doc(currentUser.uid)
  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (doc) => {
        setPalabras(doc.data().palabras)
    })
  }, [])

  return (
    <Card>
        <CardContent>
            <Box
                sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
                }}
            >
                <Avatar
                    src={'https://entey.net/wp-content/uploads/2022/08/robot.webp'}
                    sx={{
                        height: 80,
                        mb: 2,
                        width: 80
                    }}
                />
                <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h5"
                >
                    {currentUser.displayName}
                </Typography>
                
                <Typography
                    color="textSecondary"
                    variant="body2"
                >
                    Palabras: {palabras}
                </Typography>
                <Button variant='contained' sx={{mt: '1rem', width: '100%'}} href='https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c9380848499f88601849ca44b9e01fb' target="_blank">Adquiere Noman Pro</Button>
            </Box>
        </CardContent>
      
    </Card>
  )
}

export default AccountProfile