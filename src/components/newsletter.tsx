//import Link from 'next/link'

import NewsletterForm from "./newsletter-form";

const Newsletter = () => {
  return (
    <div
      id="subscribe"
      className="px-4 py-10 text-center bg-gray-800 md:py-16 md:text-left lg:py-20 sm:px-6 lg:px-8"
    >
      <div className="items-center justify-between mx-auto rounded-md md:flex max-w-7xl">
        <div className="flex-1 md:pr-10 lg:pr-20 lg:max-w-2xl">
          <h3 className="text-4xl font-bold text-white">
            Sign up for our newsletter
          </h3>
          <p className="mt-6 text-xl text-gray-300">
            Get notified of our official launch and receive new featured jobs,
            articles, and special offers.
          </p>
        </div>
        <div className="flex-1 max-w-lg mx-auto mt-8 md:mt-0 md:mx-0">
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
          <p className="mt-4 text-sm text-gray-300">
            We care about your data and will not send you spam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
