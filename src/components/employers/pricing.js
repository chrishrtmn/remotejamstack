const Pricing = () => {
  return (
    <section>
      <div className='container max-w-full px-6 py-24 mx-auto'>
        <h1 className='text-4xl font-medium leading-snug tracking-wider text-center text-black'>
          Pricing
        </h1>
        <p className='px-6 mt-2 text-lg text-center text-gray-700'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </p>
        <div className='w-24 h-1 mx-auto mt-4 bg-indigo-200 rounded opacity-75'></div>

        <div className='max-w-full mx-auto my-3 md:max-w-6xl md:px-8'>
          <div className='relative flex flex-col items-center md:flex-row'>
            <div className='relative z-0 w-11/12 max-w-sm my-8 rounded-lg shadow-lg sm:w-3/5 lg:w-1/3 sm:my-5 md:-mr-4'>
              <div className='overflow-hidden text-black bg-white rounded-lg shadow-lg'>
                <div className='block max-w-sm px-8 mx-auto mt-2 text-sm text-left text-black sm:text-md lg:px-6'>
                  <h1 className='p-3 pb-0 text-lg font-medium tracking-wide text-center uppercase'>
                    Early Bird
                  </h1>
                  <h2 className='pb-6 text-sm text-center text-gray-500'>
                    FREE
                  </h2>
                  Stripe offers everything needed to run an online business at
                  scale. Get in touch for details.
                </div>

                <div className='flex flex-wrap px-6 mt-3'>
                  <ul>
                    <li className='flex items-center'>
                      <div className='p-2 text-green-700 rounded-full fill-current '>
                        <svg
                          className='w-6 h-6 align-middle'
                          width='24'
                          height='24'
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
                      <span className='ml-3 text-lg text-gray-700'>
                        No setup
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <div className='p-2 text-green-700 rounded-full fill-current '>
                        <svg
                          className='w-6 h-6 align-middle'
                          width='24'
                          height='24'
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
                      <span className='ml-3 text-lg text-gray-700'>
                        No setups
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <div className='p-2 text-green-700 rounded-full fill-current '>
                        <svg
                          className='w-6 h-6 align-middle'
                          width='24'
                          height='24'
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
                      <span className='ml-3 text-lg text-gray-700'>Speed</span>
                    </li>
                  </ul>
                </div>
                <div className='flex items-center p-8 uppercase'>
                  <button className='block w-full px-6 py-3 mt-3 text-lg font-semibold text-white bg-black rounded-lg shadow-xl hover:bg-gray-700'>
                    Select
                  </button>
                </div>
              </div>
            </div>
            <div className='relative z-10 w-full max-w-md my-8 bg-white rounded-lg shadow-lg sm:w-2/3 lg:w-1/3 sm:my-5'>
              <div className='py-4 text-sm font-semibold leading-none tracking-wide text-center text-black uppercase bg-gray-200 rounded-t-lg'>
                Most Popular
              </div>
              <div className='block max-w-sm px-8 mx-auto mt-2 text-sm text-left text-black sm:text-md lg:px-6'>
                <h1 className='p-3 pb-0 text-lg font-medium tracking-wide text-center uppercase'>
                  Standard
                </h1>
                <h2 className='pb-6 text-sm text-center text-gray-500'>
                  <span className='text-3xl'>$49</span> /mo
                </h2>
                Stripe offers everything needed to run an online business at
                scale. Get in touch for details.
              </div>
              <div className='flex justify-start pl-12 mt-3 sm:justify-start'>
                <ul>
                  <li className='flex items-center'>
                    <div className='p-2 text-green-700 rounded-full fill-current'>
                      <svg
                        className='w-6 h-6 align-middle'
                        width='24'
                        height='24'
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
                    <span className='ml-3 text-lg text-gray-700'>No setup</span>
                  </li>
                  <li className='flex items-center'>
                    <div className='p-2 text-green-700 rounded-full fill-current '>
                      <svg
                        className='w-6 h-6 align-middle'
                        width='24'
                        height='24'
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
                    <span className='ml-3 text-lg text-gray-700'>
                      Hidden fees
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <div className='p-2 text-green-700 rounded-full fill-current '>
                      <svg
                        className='w-6 h-6 align-middle'
                        width='24'
                        height='24'
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
                    <span className='ml-3 text-lg text-gray-700'>Original</span>
                  </li>
                </ul>
              </div>

              <div className='flex items-center p-8 uppercase'>
                <button className='block w-full px-6 py-3 mt-3 text-lg font-semibold text-white bg-black rounded-lg shadow-xl hover:bg-gray-700'>
                  Select
                </button>
              </div>
            </div>
            <div className='relative z-0 w-11/12 max-w-sm my-8 rounded-lg shadow-lg sm:w-3/5 lg:w-1/3 sm:my-5 md:-ml-4'>
              <div className='overflow-hidden text-black bg-white rounded-lg shadow-lg'>
                <div className='block max-w-sm px-8 mx-auto mt-2 text-sm text-left text-black sm:text-md lg:px-6'>
                  <h1 className='p-3 pb-0 text-lg font-medium tracking-wide text-center uppercase'>
                    Featured
                  </h1>
                  <h2 className='pb-6 text-sm text-center text-gray-500'>
                    $99 /mo
                  </h2>
                  Stripe offers everything needed to run an online business at
                  scale. Get in touch for details.
                </div>
                <div className='flex flex-wrap px-6 mt-3'>
                  <ul>
                    <li className='flex items-center'>
                      <div className='p-2 text-green-700 rounded-full fill-current '>
                        <svg
                          className='w-6 h-6 align-middle'
                          width='24'
                          height='24'
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
                      <span className='ml-3 text-lg text-gray-700'>
                        Electric
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <div className='p-2 text-green-700 rounded-full fill-current '>
                        <svg
                          className='w-6 h-6 align-middle'
                          width='24'
                          height='24'
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
                      <span className='ml-3 text-lg text-gray-700'>
                        Monthly
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <div className='p-2 text-green-700 rounded-full fill-current '>
                        <svg
                          className='w-6 h-6 align-middle'
                          width='24'
                          height='24'
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
                      <span className='ml-3 text-lg text-gray-700'>
                        No setup
                      </span>
                    </li>
                  </ul>
                </div>

                <div className='flex items-center p-8 uppercase'>
                  <button className='block w-full px-6 py-3 mt-3 text-lg font-semibold text-white bg-black rounded-lg shadow-xl hover:bg-gray-700'>
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
