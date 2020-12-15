import Testimonials from '../components/testimonials'
import PricingCTA from '../components/employers/pricing-cta'
import Newsletter from '../components/newsletter'
import SiteMetrics from '../components/site-metrics'

const Employers = () => {
  return (
    <>
      <div className='py-20'>Masthead</div>
      <div className='py-20'>Features</div>
      <Testimonials />
      <div className='py-20'>Spacer</div>
      <SiteMetrics />
      <PricingCTA />
      <Newsletter />
    </>
  )
}

export default Employers
