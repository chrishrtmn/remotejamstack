import Head from 'next/head'

import Masthead from '../components/home/masthead'
import StacksCloud from '../components/home/stacks-cloud'
import FeaturedJobs from '../components/home/featured-jobs'
import Newsletter from '../components/newsletter'

const Home = () => {
  return (
    <>
      <Head>
        <title>Remote Jamstack</title>
      </Head>

      <Masthead />
      <StacksCloud />
      <FeaturedJobs />
      <Newsletter />
    </>
  )
}

export default Home
