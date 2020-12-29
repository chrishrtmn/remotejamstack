//import Link from 'next/link'

import NewsletterForm from './newsletter-form'

const Newsletter = () => {
  return (
    <div id='subscribe' className='px-4 py-20 bg-gray-800 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-between mx-auto rounded-md max-w-7xl'>
        <div className='max-w-2xl pr-20'>
          <h3 className='text-4xl font-bold text-white'>
            Sign up for our newsletter
          </h3>
          <p className='mt-6 text-xl text-gray-300'>
            Get notified of our official launch and receive new featured jobs,
            articles, and special offers.
          </p>
        </div>
        <div className='flex-1 max-w-lg'>
          <NewsletterForm />
          {/* <p className='mt-4 text-sm text-gray-300'>
            By sharing your email, you agree to our{' '}
            <Link href='/terms-conditions'>
              <a className='underline'>Terms</a>
            </Link>{' '}
            and{' '}
            <Link href='/privacy-policy'>
              <a className='underline'>Privacy Policy</a>
            </Link>
            .
          </p> */}
          <p className='mt-4 text-sm text-gray-300'>
            We care about your data and will not send you spam.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
