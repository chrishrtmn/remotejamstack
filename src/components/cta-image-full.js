import Link from 'next/link'
import Image from 'next/image'

import { useAuth } from '../utilities/firebase-auth'

const CtaImageFull = () => {
  const auth = useAuth()

  const href = auth.user ? '/job/create' : '/signup'

  return (
    <div className='bg-white'>
      <div className='px-5 py-20 m-auto mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <h3 className='text-4xl font-bold text-gray-800'>Get started</h3>
        <p className='text-xl text-gray-500'>Ready to post your first job?</p>
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
            <a className='inline-block px-8 py-2 text-lg font-medium text-white bg-red-500 rounded-md hover:bg-red-400'>
              Post a Job
            </a>
          </Link>
          <Link href='/pricing'>
            <a className='inline-block px-8 py-2 mx-4 text-lg font-medium text-gray-800 border border-gray-300 rounded-md hover:bg-gray-100'>
              Learn More
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CtaImageFull
