import Head from 'next/head'

import Masthead from '../components/home/masthead'
import LatestBlogPosts from '../components/home/latest-blog-posts'
import Features from '../components/home/features'
import StacksCloud from '../components/stacks-cloud'
import Testimonials from '../components/testimonials'
import Newsletter from '../components/newsletter'

const Home = () => {
  return (
    <>
      <Head>
        <title>Remote Jamstack</title>
      </Head>

      <Masthead />
      <StacksCloud />
      <Features />
      <Testimonials />
      <LatestBlogPosts />
      <Newsletter />
    </>
  )
}

export default Home
