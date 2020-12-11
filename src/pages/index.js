import Head from 'next/head'

import Masthead from '../components/masthead'
import FeaturedJobsFull from '../components/featured-jobs-full'
import LogoCloudFull from '../components/logo-cloud-full'
import StatsDisplayFull from '../components/stats-display-full'
import CtaImageFull from '../components/cta-image-full'
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
      {/* <StatsDisplayFull /> */}
      <CtaImageFull />
      <SubscribeFull />
    </>
  )
}

export default Home
