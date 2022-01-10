import Head from 'next/head'
import Masthead from '../components/home/masthead'
import LatestBlogPosts from '../components/home/latest-blog-posts'
import Features from '../components/home/features'
import StacksCloud from '../components/home/stacks-cloud'
import Testimonials from '../components/home/testimonials'

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Remote Jamstack - Find and Post Remote Jamstack Jobs</title>
      </Head>

      <Masthead />
      <StacksCloud />
      {/* <Features /> */}
      <Testimonials />
      {/* <LatestBlogPosts /> */}
    </>
  )
}

export default IndexPage
