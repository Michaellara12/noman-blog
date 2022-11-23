// React
import { createContext, useContext, useState, useEffect } from "react"

// Firebase
import { auth, googleAuthProvider, db } from "../lib/firebase"
import { getAuth, onAuthStateChanged } from 'firebase/auth'


// <---------------------------------------------------> //

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true)
  const firebaseAuth = getAuth();

  // useEffect(() => {

  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       setCurrentUser(user)
  //     } else {
  //       setCurrentUser(null)
  //     }

  //     setLoading(false)
  //   })

  //   return unsubscribe
  // }, [])
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setCurrentUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      } else {
        setCurrentUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  async function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const signInWithGoogle = async () => {
    const userResult = await auth.signInWithPopup(googleAuthProvider);
    return userResult
  };

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }
   
  const value = {
    currentUser,
    signup,
    signInWithGoogle,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value} >
      {/* If loading don't render children */}
        {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider 