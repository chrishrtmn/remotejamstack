import Link from 'next/link'

const StatsDisplayFull = () => (
  <div className='bg-gray-800'>
    <div className='py-10 m-auto max-w-7xl sm:px-6 lg:px-8'>
      <div className='grid grid-cols-3 gap-10'>
        <Link href='/jobs'>
          <a className='px-6 py-4 text-gray-400 bg-gray-700 rounded-md shadow-md hover:bg-gray-600 group'>
            <div className='flex justify-between mb-2 text-lg font-medium text-gray-400'>
              <div className='group-hover:text-white'>Total jobs available</div>
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
            <div className='text-5xl font-bold text-white'>100</div>
          </a>
        </Link>

        {/* <div className='flex px-6 py-4 bg-gray-700 rounded-md shadow-md'>
 
            <div className='mb-2 text-lg font-medium text-gray-400'>
              Companies trust us
            </div>
            <div className='text-5xl font-bold text-white'>10+</div>
          </div>
         */}

        <div className='px-6 py-4 bg-gray-700 rounded-md shadow-md'>
          <div className='mb-2 text-lg font-medium text-gray-400'>
            Total site visitors
          </div>
          <div className='text-5xl font-bold text-white'>1,000+</div>
        </div>

        <Link href='/pledge'>
          <a className='px-6 py-4 text-gray-400 bg-gray-700 rounded-md shadow-md hover:bg-gray-600 group'>
            <div className='flex justify-between mb-2 text-lg font-medium text-gray-400'>
              <div className='group-hover:text-white'>Total funds donated</div>
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
            <div className='text-5xl font-bold text-white'>$1,234</div>
          </a>
        </Link>
      </div>
    </div>
  </div>
)

export default StatsDisplayFull
