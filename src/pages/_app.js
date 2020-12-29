import { useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { AuthProvider } from '../libraries/firebase/auth'
import * as gtag from '../libraries/google-analytics'
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
  const router = useRouter()

  // Google Analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <AuthProvider>
      <CrispWithNoSSR />
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
      <Newsletter />
      <Footer />
    </AuthProvider>
  )
}

export default App
