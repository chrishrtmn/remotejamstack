import Link from 'next/link'

import { useAuth } from '../../utilities/auth'

const PricingCTA = () => {
  const { user } = useAuth()

  const href = user ? '/job/create' : '/signup'

  return (
    <div className='py-20 bg-white sm:px-6 lg:px-8'>
      <div className='w-full m-auto max-w-7xl'>
        <h3 className='pb-12 text-5xl font-bold text-gray-800'>
          Ready to find <span className='sr-only'>A+</span>
          <svg
            aria-hidden='true'
            focusable='false'
            className='inline-block w-auto h-20'
            viewBox='0 0 172 149'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13.5 79C13.5 43.2453 45.7414 13.5 86.5 13.5C127.221 13.5 159.441 43.1905 159.5 78.9011C158.743 95.4165 149.544 109.768 135.658 121.152C121.862 132.461 103.767 140.537 86.0149 144.499C45.4858 144.264 13.5 114.613 13.5 79Z'
              stroke='#EF4444'
              strokeWidth='9'
            />
            <path
              d='M2.5 65C2.5 48.0709 12.1302 32.5059 28.1804 21.0744C44.2255 9.64658 66.5203 2.5 91.2623 2.5C140.03 2.5 169.5 45.2419 169.5 80.0288C169.5 97.106 162.375 108.762 149.283 116.311C135.97 123.987 116.318 127.5 91.2623 127.5C66.5203 127.5 44.2255 120.353 28.1804 108.926C12.1302 97.4941 2.5 81.9291 2.5 65Z'
              stroke='#EF4444'
              strokeWidth='5'
            />
            <path
              d='M9.99982 70.4733V70.4693C9.96436 52.7556 14.565 39.9653 22.0165 31.0896C29.4712 22.2101 39.9548 17.039 52.075 14.897C76.4052 10.597 106.933 18.595 130.891 32.6999C142.846 39.7381 153.044 48.2285 159.962 57.3225C166.885 66.4223 170.418 75.9753 169.394 85.241C168.374 94.4628 162.791 103.829 150.587 112.498C138.389 121.163 119.693 129.035 92.7745 135.221C46.564 135.126 9.99982 105.752 9.99982 70.4733Z'
              stroke='#EF4444'
              strokeWidth='4'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M64.8577 36.182C78.7264 52.953 84.8495 68.6082 94.6795 103.406C95.4074 105.052 106.497 101.79 107.129 99.7982C97.3343 77.194 89.622 54.0508 77.2809 32.1884C76.4679 30.3325 64.0548 34.3393 64.8577 36.182Z'
              fill='#EF4444'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M76.6265 32.4915C63.2843 53.3156 58.7403 71.7621 53.0233 112.215C52.4478 114.166 39.0584 112.121 38 109.979C45.6666 83.2058 50.8309 56.1309 61.5708 29.8192C62.2105 27.6197 77.2566 30.3083 76.6265 32.4915Z'
              fill='#EF4444'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M49.8581 84.2942C63.242 75.7226 74.8406 73.5343 100.126 71.8911C101.356 71.5892 100.562 61.5103 99.2707 60.5861C82.3987 64.5582 65.4281 66.6519 48.7336 72.937C47.3472 73.2707 48.4821 84.6218 49.8581 84.2942Z'
              fill='#EF4444'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M129.911 42.1384C126.451 52.585 127.481 60.2576 132.129 76.1604C132.184 76.9925 124.251 79.1616 123.239 78.6153C122.348 67.2464 119.99 56.3121 120.918 44.4424C120.851 43.5063 129.841 41.2103 129.911 42.1384Z'
              fill='#EF4444'
            />
            <path
              d='M142.358 51.0861L144 59.0083L110.339 65.987L108.697 58.0648L142.358 51.0861Z'
              fill='#EF4444'
            />
          </svg>{' '}
          developers?
        </h3>
        <p className='my-4'>
          Our{' '}
          <Link href='/pricing'>
            <a className='text-red-500 underline'>Early Access</a>
          </Link>{' '}
          plan starts at $49.
        </p>
        <p className='inline-block p-1 p-2 text-blue-700 bg-blue-100 border border-blue-200 rounded-md'>
          The next 20 job submissions are free! Submit yours now.
        </p>
        <div className='block mt-6'>
          <Link href={href}>
            <a className='inline-block px-8 py-2 text-lg font-medium text-white bg-red-500 rounded-md hover:bg-red-600'>
              Post a Job
            </a>
          </Link>
          <Link href='/about'>
            <a className='inline-block px-8 py-2 mx-4 text-lg font-medium text-gray-800 border border-gray-300 rounded-md hover:bg-gray-100'>
              Learn More
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PricingCTA
