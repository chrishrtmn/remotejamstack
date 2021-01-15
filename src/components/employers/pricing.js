import Link from 'next/link'
import { useAuth } from '../../libraries/firebase/auth'

const Pricing = () => {
  const auth = useAuth()
  const postLink = auth.user ? '/job/create' : '/signup'

  return (
    <section id='pricing'>
      <div className='container px-4 py-10 mx-auto md:py-16 lg:py-20 max-w-7xl sm:px-6 lg:px-8'>
        <h2 className='relative block text-4xl font-bold text-center text-gray-800'>
          Pricing
        </h2>
        <p className='px-6 mx-auto mt-2 text-lg text-center text-gray-500 max-w-prose'>
          We offer multiple packages for the job posting you'd like to list.
        </p>
        <div className='w-24 h-1 mx-auto mt-4 bg-red-500 rounded'></div>
        <div className='my-6'>
          <div className='relative justify-between gap-5 md:grid lg:gap-10 md:grid-cols-3'>
            <div className='max-w-sm mx-auto my-4 bg-white rounded-md shadow-md-red lg:my-8'>
              <div className='p-8 text-gray-800 sm:px-4 lg:px-8'>
                <div className='block max-w-sm pb-8 mx-auto text-sm text-center sm:text-md'>
                  <p className='inline uppercase px-3 py-0.5 text-sm font-medium text-red-400 border border-red-200 rounded-full bg-red-50'>
                    Basic
                  </p>
                  <p className='mt-3 -ml-4 text-5xl font-bold uppercase'>
                    <span className='inline-block text-3xl align-top'>$</span>0
                  </p>
                </div>
                <ul>
                  {/* <li className='flex p-2'>
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
                      Your first Basic post is free
                    </span>
                  </li> */}
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
                      List your job for 30 days
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
                  {/* <li className='flex p-2'>
                      <div className='text-gray-200 rounded-full fill-current'>
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
                      <span className='ml-3 leading-6 text-gray-200 text-md'>
                        Your job gets highlighted for better visibility
                      </span>
                    </li>
                    <li className='flex p-2'>
                      <div className='text-gray-200 rounded-full fill-current'>
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
                      <span className='ml-3 leading-6 text-gray-200 text-md'>
                        Include your company or personal logo to stand out more
                      </span>
                    </li>
                    <li className='flex p-2'>
                      <div className='text-gray-200 rounded-full fill-current'>
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
                      <span className='ml-3 leading-6 text-gray-200 text-md'>
                        Post your listing across our social media channels
                      </span>
                    </li>
                    <li className='flex p-2'>
                      <div className='text-gray-200 rounded-full fill-current'>
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
                      <span className='ml-3 leading-6 text-gray-200 text-md'>
                        Feature your job in our newsletter
                      </span>
                    </li> */}
                </ul>
                <div className='pt-8 text-center'>
                  <Link href={postLink}>
                    <a className='inline-block w-3/4 px-4 py-3 text-lg font-medium text-center text-white bg-red-500 rounded-md shadow-md hover:bg-red-600'>
                      Post a Job
                    </a>
                  </Link>
                  <div className='mt-4 text-sm'>
                    <span className='block'>No credit card required.</span>
                    <span className='block'>Additional jobs will be $99.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='max-w-sm mx-auto my-4 bg-white rounded-md shadow-md lg:my-8'>
              <div className='p-8 text-gray-800 sm:px-4 lg:px-8'>
                <div className='block max-w-sm pb-8 mx-auto text-sm text-center sm:text-md'>
                  <p className='inline uppercase px-3 py-0.5 text-sm font-medium text-red-400 border border-red-200 rounded-full bg-red-50'>
                    Plus
                  </p>
                  <p className='mt-3 -ml-4 text-5xl font-bold uppercase'>
                    <span className='inline-block text-3xl align-top'>$</span>49
                  </p>
                </div>
                <div className='flex flex-wrap'>
                  <ul>
                    <li className='flex p-2'>
                      <div className='text-red-500 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-700 text-md'>
                        Upgrade option that includes everything from Basic
                      </span>
                    </li>
                    {/* <li className='flex p-2'>
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
                    </li> */}
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
                        Include your company or personal logo to stand out more
                      </span>
                    </li>
                    {/* <li className='flex p-2'>
                      <div className='text-gray-200 rounded-full fill-current'>
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
                      <span className='ml-3 leading-6 text-gray-200 text-md'>
                        Post your listing across our social media channels
                      </span>
                    </li>
                    <li className='flex p-2'>
                      <div className='text-gray-200 rounded-full fill-current'>
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
                      <span className='ml-3 leading-6 text-gray-200 text-md'>
                        Feature your job in our newsletter
                      </span>
                    </li> */}
                  </ul>
                </div>
                {/* <div className='flex items-center pt-8'>
                  <button className='block w-full py-3 text-lg font-semibold text-white bg-gray-800 rounded-md shadow-md hover:bg-red-600'>
                    Post a Job
                  </button>
                </div> */}
              </div>
            </div>
            <div className='max-w-sm mx-auto my-4 bg-white rounded-md shadow-md lg:my-8'>
              <div className='p-8 text-gray-800 sm:px-4 lg:px-8'>
                <div className='block max-w-sm pb-8 mx-auto text-sm text-center sm:text-md'>
                  <p className='inline uppercase px-3 py-0.5 text-sm font-medium text-red-400 border border-red-200 rounded-full bg-red-50'>
                    Featured
                  </p>
                  <p className='mt-3 -ml-4 text-5xl font-bold uppercase'>
                    <span className='inline-block text-3xl align-top'>$</span>
                    199
                  </p>
                </div>
                <div className='flex flex-wrap'>
                  <ul>
                    <li className='flex p-2'>
                      <div className='text-red-500 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-700 text-md'>
                        Upgrade option that includes everything from Basic
                      </span>
                    </li>
                    {/* <li className='flex p-2'>
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
                    </li> */}
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
                        Your job gets pinned at the top for the best visibility
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
                        Include your company or personal logo to stand out more
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
                        Feature your job in our newsletter
                      </span>
                    </li>
                  </ul>
                </div>
                {/* <div className='flex items-center pt-8'>
                  <button className='block w-full py-3 text-lg font-semibold text-white bg-red-500 rounded-md shadow-md hover:bg-red-600'>
                    Post a Job
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <div className='inline-block px-8 py-4 border border-gray-400 border-dashed rounded-md'>
            Looking to bulk purchase jobs? Are you a charity or non-profit?{' '}
            {/* <Link href='/contact'>
              <a className='border-b border-red-500 hover:text-red-500'>
                Get in touch with us.
              </a>
            </Link> */}
            <a
              href='mailto:hello@remotejamstack.com?subject=Pricing%20inquiry&body=What%20is%20your%20inquiry%3F'
              target='_blank'
              rel='noopener noreferrer'
              className='border-b border-red-500 hover:text-red-500'
            >
              Get in touch with us.
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
