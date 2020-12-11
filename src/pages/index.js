import Head from 'next/head'

import Masthead from '../components/masthead'
import FeaturedJobsFull from '../components/featured-jobs-full'
import LogoCloudFull from '../components/logo-cloud-full'
import CtaFull from '../components/cta-full'
import SubscribeFull from '../components/subscribe-full'

const Home = () => {
  return (
    <>
      <Head>
        <title>Remote Jamstack</title>
      </Head>

      <Masthead />
      <FeaturedJobsFull />
      <LogoCloudFull />
      <CtaFull />
      <SubscribeFull />
    </>
  )
}

export default Home
