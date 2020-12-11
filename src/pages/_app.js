import { AuthProvider } from '../utilities/firebase-auth'

import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/global.css'

const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <ToastContainer
        hideProgressBar
        newestOnTop
        closeButton={false}
        transition={Slide}
        position='bottom-center'
        toastClassName='rounded-md shadow-md'
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  )
}

export default App
