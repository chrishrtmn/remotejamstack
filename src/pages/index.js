import Head from 'next/head'

import Masthead from '../components/home/masthead'
import FeaturedJobs from '../components/home/featured-jobs'
import Testimonials from '../components/home/testimonials'
import StacksCloud from '../components/home/stacks-cloud'
import CtaImage from '../components/home/cta-image'
import Newsletter from '../components/home/newsletter'

const Home = () => {
  return (
    <>
      <Head>
        <title>Remote Jamstack</title>
      </Head>

      <Masthead />
      <FeaturedJobs />
      <Testimonials />
      <StacksCloud />
      <CtaImage />
      <Newsletter />
    </>
  )
}

export default Home
