import { useState, useEffect, useContext, createContext } from 'react'
import firebase from './client'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const auth = useProvideAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

function useProvideAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleUser = rawUser => {
    if (rawUser) {
      const user = formatUser(rawUser)
      setLoading(false)
      setUser(user)
      return user
    } else {
      setLoading(false)
      setUser(false)
      return false
    }
  }

  const signinWithGoogle = () => {
    setLoading(true)
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(response => handleUser(response.user))
  }

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false))
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser)
    return () => unsubscribe()
  }, [])

  return {
    user,
    loading,
    signinWithGoogle,
    signout,
  }
}

const formatUser = user => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
  }
}
