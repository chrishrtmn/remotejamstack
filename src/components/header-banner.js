import Link from 'next/link'

const HeaderBanner = () => {
  return (
    <div className='px-5 bg-gray-800 sm:px-6 lg:px-8'>
      <div className='py-3 mx-auto max-w-7xl'>
        <div className='flex flex-wrap items-center justify-between'>
          <div className='flex items-center flex-1 w-0'>
            <span className='flex p-2 bg-white rounded-md'>
              <svg
                className='w-6 h-6 text-red-500'
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
              <span className='sm:hidden'>
                Post free job with promo: "FREEMOTE"
              </span>
              <span className='hidden sm:inline md:hidden lg:hidden'>
                Welcome! Post your free job with promo: "FREEMOTE"
              </span>
              <span className='hidden md:inline lg:hidden'>
                Welcome! Post your first free job with our promo code:
                "FREEMOTE"
              </span>
              <span className='hidden lg:inline'>
                Welcome! For a limited time only, post your first free job with
                our promo code: "FREEMOTE"
              </span>
            </p>
          </div>
          <div className='flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto'>
            <Link href='/employers#pricing'>
              <a className='flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-transparent rounded-md shadow-sm hover:text-gray-900 hover:bg-gray-200'>
                Learn more
              </a>
            </Link>
          </div>
          <div className='flex-shrink-0 order-2 sm:order-3 sm:ml-3'>
            <button
              type='button'
              className='flex p-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-white'
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
