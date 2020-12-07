import { AuthProvider } from '../lib/firebase/auth'
import 'what-input'

import '../styles/tailwind.css'

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
export default App
