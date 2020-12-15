import Link from 'next/link'

const SiteMetrics = () => (
  <div className='px-4 py-20 bg-gray-800 sm:px-6 lg:px-8'>
    <div className='w-full m-auto max-w-7xl'>
      <div className='grid grid-cols-3 gap-10'>
        <Link href='/jobs'>
          <a className='px-6 py-4 text-gray-400 transition-all bg-gray-700 rounded-md shadow-md hover:bg-gray-600 group'>
            <div className='flex justify-between mb-2 text-lg font-medium text-gray-400'>
              <div className='group-hover:text-white'>Total Jobs Available</div>
              <svg
                className='w-8 h-8 group-hover:text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <div className='text-4xl font-bold text-gray-200 group-hover:text-white'>
              TBD
              <svg
                className='inline-block w-5 h-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </a>
        </Link>
        <Link href='#subscribe'>
          <a className='px-6 py-4 text-gray-400 transition-all bg-gray-700 rounded-md shadow-md hover:bg-gray-600 group'>
            <div className='flex justify-between mb-2 text-lg font-medium text-gray-400'>
              <div className='group-hover:text-white'>
                Total Email Subscribers
              </div>
              <svg
                className='w-8 h-8 group-hover:text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <div className='text-4xl font-bold text-gray-200 group-hover:text-white'>
              TBD
              <svg
                className='inline-block w-5 h-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </a>
        </Link>
        <Link href='/partners'>
          <a className='px-6 py-4 text-gray-400 transition-all bg-gray-700 rounded-md shadow-md hover:bg-gray-600 group'>
            <div className='flex justify-between mb-2 text-lg font-medium text-gray-400'>
              <div className='group-hover:text-white'>
                All-Time Site Visitors
              </div>
              <svg
                className='w-8 h-8 group-hover:text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <div className='text-4xl font-bold text-gray-200 group-hover:text-white'>
              TBD
              <svg
                className='inline-block w-5 h-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </a>
        </Link>
      </div>
    </div>
  </div>
)

export default SiteMetrics
