// React
import { useState, useEffect } from "react"
import {useAuthState} from "react-firebase-hooks/auth"

// Firebase
// import { db, auth } from "../lib/firebase"
import { db, auth } from "../lib/firebase";


function useUserData() {
    const [user] = useAuthState(auth);
    const [username, setUsername] = useState(null);
  
    // useEffect(() => {
    //   // Apagar subscripcion en tiempo real
    //   let unsubscribe;
  
    //   if (user) {
    //     const ref = db.collection('users').doc(user.uid);
    //     unsubscribe = ref.onSnapshot((doc) => {
    //       setUsername(doc.data()?.username);
    //     })
    //   } else {
    //     setUsername(null)
    //   }
  
    //   return unsubscribe;
  
    // }, [user])

    return { user, username };
}

export default useUserData