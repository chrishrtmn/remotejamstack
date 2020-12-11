import Link from 'next/link'

import Shell from './shell'

const JobsEmpty = () => (
  <Shell>
    <div className='border-4 border-gray-200 border-dashed rounded-md'>
      <div className='p-10 text-center'>
        <h3 className='block text-xl font-bold text-gray-700'>
          You haven't posted any jobs.
        </h3>
        <p className='my-5 text-gray-700'>Let's get started.</p>
        <Link href='/job/create'>
          <a className='inline-block px-4 py-2 font-medium text-white bg-blue-700 rounded-md'>
            Submit Your First Job
          </a>
        </Link>
      </div>
    </div>
  </Shell>
)

export default JobsEmpty
