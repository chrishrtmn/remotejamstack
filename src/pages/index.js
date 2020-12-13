import Head from 'next/head'

import Masthead from '../components/masthead'
import FeaturedJobsFull from '../components/featured-jobs-full'
import TestimonialsFull from '../components/testimonials-full'
import StacksCloudFull from '../components/stacks-cloud-full'
import SiteMetricsFull from '../components/site-metrics-full'
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
      <TestimonialsFull />
      <StacksCloudFull />
      <SiteMetricsFull />
      <CtaImageFull />
      <SubscribeFull />
    </>
  )
}

export default Home
