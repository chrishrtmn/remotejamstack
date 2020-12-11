import Link from 'next/link'

const HeaderBanner = () => {
  return (
    <div className='relative z-10 bg-blue-700'>
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
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7'
                />
              </svg>
            </span>
            <p className='ml-3 font-medium text-white truncate'>
              <span className='md:hidden'>
                For our new product launch, we're giving out the first 20 job
                submissions for free!
              </span>
              <span className='hidden md:inline'>
                Welcome! For our new product launch, we're giving out the first
                20 job submissions for free!{' '}
                <span className='text-xs italic'>(Limit 1 per account)</span>
              </span>
            </p>
          </div>
          <div className='flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto'>
            <Link href='/about#pricing'>
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