import { useAuth } from '../lib/firebase/auth'

import Head from './head'
// import TopNav from './nav-top'
// import Footer from './footer'

function TopNav() {
  const auth = useAuth()

  return (
    <nav>
      {auth.user ? (
        <div>
          <p>Email: {auth.user.email}</p>
          <button onClick={e => auth.signout()}>Sign Out</button>
        </div>
      ) : (
        <>
          <button onClick={e => auth.signinWithGoogle()}>
            Sign in with Google
          </button>
        </>
      )}
    </nav>
  )
}

export default function Layout({ children }) {
  return (
    <div className="flex flex-col px-6 min-h-screen">
      <Head />
      <TopNav />
      <div className="flex-auto">{children}</div>
      {/* <Footer /> */}
    </div>
  )
}
