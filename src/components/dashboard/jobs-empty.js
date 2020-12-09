import Link from 'next/link'

import Shell from './shell'

const JobsEmpty = () => (
  <Shell>
    <h3 className='block my-5'>You haven't posted any jobs</h3>
    <Link href='/post-job'>
      <a className='inline-block px-2 py-1 text-black bg-white border'>
        Add your first Job Post
      </a>
    </Link>
  </Shell>
)

export default JobsEmpty
