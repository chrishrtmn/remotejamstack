import Link from 'next/link'

const SubscribeFull = () => {
  return (
    <div className='mx-auto my-20 max-w-7xl sm:px-6 lg:px-8'>
      <div className='flex items-center justify-between px-10 bg-blue-700 rounded-md py-14'>
        <div className='pr-20'>
          <h3 className='text-4xl font-bold text-white'>
            Sign up for our newsletter
          </h3>
          <p className='mt-6 text-xl text-blue-200'>
            Receive weekly featured jobs, new blog posts, and feature updates.
          </p>
        </div>
        <div>
          <form className='flex inline-block p-1 bg-white rounded-md'>
            <input
              placeholder='Enter your email'
              class='flex-grow px-1 py-2 text-lg px-3 focus:outline-none focus:ring-2 text-gray-800 focus:ring-blue-400 focus:border-transparent rounded-tl-md rounded-bl-md'
            />
            <button class='ml-1 bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-tr-md rounded-br-md py-2 px-4 font-medium text-lg text-white'>
              Subscribe
            </button>
          </form>
          <p className='mt-4 text-sm text-blue-200'>
            {/* We care about the protection of your data. Read our{' '}
            <Link href='/privacy-policy'>
              <a className='underline'>Privacy Policy</a>
            </Link>
            */}
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

export default SubscribeFull
