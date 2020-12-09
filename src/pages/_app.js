import { AuthProvider } from '../libraries/firebase-auth'

import '../styles/global.css'

const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default App
