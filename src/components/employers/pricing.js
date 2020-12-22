const Pricing = () => {
  return (
    <section id='pricing'>
      <div className='container px-6 py-20 mx-auto max-w-7xl'>
        <h2 className='relative block text-4xl font-bold text-center text-gray-800'>
          Pricing
        </h2>
        <p className='px-6 mx-auto mt-2 text-lg text-center text-gray-500 max-w-prose'>
          We offer three 30-day packages for the job posting you'd like to list.
        </p>
        <div className='w-24 h-1 mx-auto mt-4 bg-red-500 rounded'></div>
        <div className='my-6'>
          <div className='relative grid justify-between gap-5 lg:gap-10 md:grid-cols-3'>
            <div className='max-w-sm my-4 bg-white rounded-md shadow-md lg:my-8'>
              <div className='p-8 text-gray-800'>
                <div className='block max-w-sm pb-8 mx-auto text-sm text-center sm:text-md'>
                  <h1 className='text-lg font-medium tracking-wide text-gray-400 uppercase'>
                    Standard
                  </h1>
                  <h2 className='text-5xl font-bold uppercase'>$99</h2>
                </div>
                <div className='flex flex-wrap'>
                  <ul>
                    <li className='flex p-2'>
                      <div className='text-red-500 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-700 text-md'>
                        List your job for up to 30 days
                      </span>
                    </li>
                    <li className='flex p-2'>
                      <div className='text-red-500 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-700 text-md'>
                        Share your listing to Google Jobs Network
                      </span>
                    </li>
                    <li className='flex p-2'>
                      <div className='text-gray-300 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-300 text-md'>
                        Your job gets highlighted for better visibility
                      </span>
                    </li>
                    <li className='flex p-2'>
                      <div className='text-gray-300 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-300 text-md'>
                        Include your company logo to stand out
                      </span>
                    </li>
                    <li className='flex p-2'>
                      <div className='text-gray-300 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-300 text-md'>
                        Post your listing across our social media channels
                      </span>
                    </li>
                    <li className='flex p-2'>
                      <div className='text-gray-300 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-300 text-md'>
                        Feature your job in our weekly job newsletter
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='flex items-center pt-8'>
                  <button className='block w-full py-3 text-lg font-semibold text-white bg-gray-800 rounded-md shadow-md hover:bg-red-600'>
                    Select
                  </button>
                </div>
                <div className='pt-8 text-sm text-center'>
                  Use promo code "
                  <span className='font-bold text-producthunt'>
                    PRODUCTHUNT
                  </span>
                  " to post your first Standard job for free.
                </div>
              </div>
            </div>
            <div className='max-w-sm my-4 bg-white rounded-md shadow-md lg:my-8'>
              <div className='p-8 text-gray-800'>
                <div className='block max-w-sm pb-8 mx-auto text-sm text-center sm:text-md'>
                  <h1 className='text-lg font-medium tracking-wide text-gray-400 uppercase'>
                    Standard Plus
                  </h1>
                  <h2 className='text-5xl font-bold uppercase'>$149</h2>
                </div>
                <div className='flex flex-wrap'>
                  <ul>
                    <li className='flex p-2'>
                      <div className='text-red-500 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-700 text-md'>
                        List your job for up to 30 days
                      </span>
                    </li>
                    <li className='flex p-2'>
                      <div className='text-red-500 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-700 text-md'>
                        Share your listing to Google Jobs Network
                      </span>
                    </li>
                    <li className='flex p-2'>
                      <div className='text-red-500 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-700 text-md'>
                        Your job gets highlighted for better visibility
                      </span>
                    </li>
                    <li className='flex p-2'>
                      <div className='text-red-500 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-700 text-md'>
                        Include your company logo to stand out
                      </span>
                    </li>
                    <li className='flex p-2'>
                      <div className='text-gray-300 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-300 text-md'>
                        Post your listing across our social media channels
                      </span>
                    </li>
                    <li className='flex p-2'>
                      <div className='text-gray-300 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-300 text-md'>
                        Feature your job in our weekly job newsletter
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='flex items-center pt-8'>
                  <button className='block w-full py-3 text-lg font-semibold text-white bg-gray-800 rounded-md shadow-md hover:bg-red-600'>
                    Select
                  </button>
                </div>
              </div>
            </div>
            <div className='max-w-sm my-4 bg-white rounded-md shadow-md lg:my-8'>
              <div className='p-8 text-gray-800'>
                <div className='block max-w-sm pb-8 mx-auto text-sm text-center sm:text-md'>
                  <h3 className='text-lg font-medium tracking-wide text-gray-400 uppercase'>
                    Featured
                  </h3>
                  <h4 className='text-5xl font-bold uppercase'>$299</h4>
                </div>
                <div className='flex flex-wrap'>
                  <ul>
                    <li className='flex p-2'>
                      <div className='text-red-500 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-700 text-md'>
                        List your job for up to 30 days
                      </span>
                    </li>
                    <li className='flex p-2'>
                      <div className='text-red-500 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-700 text-md'>
                        Share your listing to Google Jobs Network
                      </span>
                    </li>
                    <li className='flex p-2'>
                      <div className='text-red-500 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-700 text-md'>
                        Your job gets pinned to the top of the page for best
                        visibility
                      </span>
                    </li>
                    <li className='flex p-2'>
                      <div className='text-red-500 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-700 text-md'>
                        Include your company logo to stand out
                      </span>
                    </li>
                    <li className='flex p-2'>
                      <div className='text-red-500 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-700 text-md'>
                        Post your listing across our social media channels
                      </span>
                    </li>
                    <li className='flex p-2'>
                      <div className='text-red-500 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-700 text-md'>
                        Feature your job in our weekly job newsletter
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='flex items-center pt-8'>
                  <button className='block w-full py-3 text-lg font-semibold text-white bg-red-500 rounded-md shadow-md hover:bg-red-600'>
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>Get in touch if you'd like to bulk purchase jobs.</div>
      <div>Are you an open source project or non-profit? Get in touch!</div>
    </section>
  )
}

export default Pricing
