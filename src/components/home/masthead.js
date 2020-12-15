import Link from 'next/link'

import { useAuth } from '../../utilities/auth'

const Masthead = () => {
  const auth = useAuth()

  const href = auth.user ? '/job/create' : '/signup'

  return (
    <div className='bg-white'>
      <div className='w-full max-w-4xl pb-32 mx-auto text-center sm:px-6 lg:px-8 pt-28'>
        <h1 className='font-bold text-gray-800 text-7xl'>
          Remote jobs in the Jamstack ecosystem
        </h1>
        <p className='max-w-xl py-8 mx-auto text-xl text-gray-500'>
          Find and post jobs with a focus on (developers and teams) modern
          technologies using JavaScript, APIs, and markup. EDIT: We cater to;
          Welcome to the ultimate source for Jamstack jobs.
        </p>
        <div>
          <Link href='/jobs'>
            <a className='inline-block px-8 py-2 mx-4 text-lg font-medium text-white bg-red-500 rounded-md hover:bg-red-600'>
              View All Jobs
            </a>
          </Link>
          <Link href={href}>
            <a className='inline-block px-8 py-2 mx-4 text-lg font-medium text-red-500 bg-white border border-red-200 rounded-md hover:bg-red-50 hover:border-red-300'>
              Post a Job
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Masthead
