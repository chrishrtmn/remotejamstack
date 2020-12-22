import Head from 'next/head'

import Masthead from '../components/employers/masthead'
import Features from '../components/employers/features'
import FeaturedJobs from '../components/employers/featured-jobs'
import CTA from '../components/employers/cta'
import FAQ from '../components/employers/faq'
import Pricing from '../components/employers/pricing'
import Newsletter from '../components/newsletter'
import SiteMetrics from '../components/site-metrics'

const Employers = () => {
  return (
    <>
      <Head>
        <title>Employers - Remote Jamstack</title>
      </Head>

      <Masthead />
      <Features />
      <SiteMetrics />
      <FeaturedJobs />
      <FAQ />
      <Pricing />
      <CTA />
      <Newsletter />
    </>
  )
}

export default Employers
