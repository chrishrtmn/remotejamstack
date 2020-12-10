import Link from 'next/link'

import Shell from './dashboard-shell'

const JobsEmpty = () => (
  <Shell>
    <h3 className='block text-xl font-bold text-gray-700'>
      You haven't posted any jobs.
    </h3>
    <p className='my-5 text-gray-700'>Let's get started.</p>
    <Link href='/post-job'>
      <a className='inline-block px-4 py-2 font-medium text-white bg-blue-700 rounded-md'>
        Submit Job
      </a>
    </Link>
  </Shell>
)

export default JobsEmpty
