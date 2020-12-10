import Link from 'next/link'

const HeaderBanner = () => {
  return (
    <div className='bg-blue-700'>
      <div className='px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='flex flex-wrap items-center justify-between'>
          <div className='flex items-center flex-1 w-0'>
            <span className='flex p-2 bg-blue-800 rounded-md'>
              <svg
                className='w-6 h-6 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
                />
              </svg>
            </span>
            <p className='ml-3 font-medium text-white truncate'>
              <span className='md:hidden'>We announced a new product!</span>
              <span className='hidden md:inline'>
                Welcome! Post a job at our early bird price starting at $49/mo.{' '}
                <span className='italic'>
                  The first 25 job submissions are free!
                </span>
              </span>
            </p>
          </div>
          <div className='flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto'>
            <Link href='/employers#pricing'>
              <a className='flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-blue-50'>
                Learn more
              </a>
            </Link>
          </div>
          <div className='flex-shrink-0 order-2 sm:order-3 sm:ml-3'>
            <button
              type='button'
              className='flex p-2 -mr-1 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2'
            >
              <span className='sr-only'>Dismiss</span>

              <svg
                className='w-6 h-6 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderBanner
