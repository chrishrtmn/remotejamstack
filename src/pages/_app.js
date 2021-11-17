import dynamic from 'next/dynamic'
import { AuthProvider } from '../libraries/firebase/auth'
import PlausibleProvider from 'next-plausible'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Header from '../components/header'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'
import '../styles/global.css'

const CrispWithNoSSR = dynamic(() => import('../libraries/crisp'), {
  ssr: false,
})

const App = ({ Component, pageProps }) => {
  return (
    <PlausibleProvider domain='remotejamstack.com'>
      <AuthProvider>
        <CrispWithNoSSR />
        <ToastContainer
          hideProgressBar
          newestOnTop
          closeButton={false}
          transition={Slide}
          position='bottom-center'
          toastClassName='text-center rounded-md shadow-md'
        />
        <Header />
        <Component {...pageProps} />
        <Newsletter />
        <Footer />
      </AuthProvider>
    </PlausibleProvider>
  )
}

export default App
