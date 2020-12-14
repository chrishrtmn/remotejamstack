import Link from 'next/link'

const Newsletter = () => {
  return (
    <div id='subscribe' className='px-5 my-20 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-between px-10 mx-auto bg-blue-700 rounded-md max-w-7xl py-14'>
        <div className='pr-20'>
          <h3 className='text-4xl font-bold text-white'>
            Sign up for our newsletter
          </h3>
          <p className='mt-6 text-xl text-blue-200'>
            Receive weekly job alerts, new blog posts, and feature updates.
          </p>
        </div>
        <div>
          <form className='flex inline-block p-1 bg-white rounded-md'>
            <input
              placeholder='Enter your email'
              className='flex-grow px-1 px-3 py-2 text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent rounded-tl-md rounded-bl-md'
            />
            <button className='px-4 py-2 ml-1 text-lg font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-tr-md rounded-br-md'>
              Subscribe
            </button>
          </form>
          <p className='mt-4 text-sm text-blue-200'>
            By sharing your email, you agree to our{' '}
            <Link href='/terms-conditions'>
              <a className='underline'>Terms</a>
            </Link>{' '}
            and{' '}
            <Link href='/privacy-policy'>
              <a className='underline'>Privacy Policy</a>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
