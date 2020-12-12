import Head from 'next/head'

import Masthead from '../components/masthead'
import FeaturedJobsFull from '../components/featured-jobs-full'
import StacksLogoCloudFull from '../components/stacks-logo-cloud-full'
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
      <StatsDisplayFull />
      <StacksLogoCloudFull />
      <CtaImageFull />
      <SubscribeFull />
    </>
  )
}

export default Home
