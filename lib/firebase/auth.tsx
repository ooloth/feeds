import { useState, useEffect, useContext, createContext } from 'react'

import firebase from './client'
import { createUser } from './db'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const auth = useProvideAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

function useProvideAuth() {
  const [user, setUser] = useState(null)

  const handleUser = rawUser => {
    if (rawUser) {
      const user = formatUser(rawUser)

      createUser(user.uid, user)
      setUser(user)
      return user
    } else {
      setUser(null)
      return null
    }
  }

  const signinWithGoogle = () =>
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(response => handleUser(response.user))

  const signout = () =>
    firebase
      .auth()
      .signOut()
      .then(() => handleUser(null))

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser)
    return unsubscribe
  }, [])

  return {
    user,
    signinWithGoogle,
    signout,
  }
}

const formatUser = user => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  photoUrl: user.photoURL,
  provider: user.providerData[0].providerId,
})
