import { useAuth } from '../lib/firebase/auth'

import Layout from '../components/layout'

export default function Index() {
  const auth = useAuth()

  return (
    <Layout>
      <h1 className="text-9xl tracking-tight font-black">Feeds.</h1>

      {auth.user ? (
        <div>Their content</div>
      ) : (
        <>
          <button onClick={auth.signinWithGoogle}>Sign in with Google</button>
        </>
      )}
    </Layout>
  )
}
