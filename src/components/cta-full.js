import Link from 'next/link'

const CtaFull = () => {
  return (
    <div className='mx-auto my-20 max-w-7xl sm:px-6 lg:px-8'>
      <div className='flex items-center justify-between px-10 bg-gray-900 rounded-md py-14'>
        <div className='pr-20'>
          <h3 className='text-4xl font-bold text-white'>Get started</h3>
          <p className='my-6 text-xl text-gray-300'>
            Ready to post your first job?
            <div className='my-4'>
              Our{' '}
              <Link href='/pricing'>
                <a href='#' className='text-red-500 underline'>
                  Early Access plan
                </a>
              </Link>{' '}
              starts at $49.
            </div>
            <div className='block text-sm italic'>
              Limit 1 free post per account during this period.
            </div>
          </p>
          <Link href='/job/create'>
            <a className='inline-block px-8 py-2 text-lg font-medium text-white bg-red-500 rounded-md hover:bg-red-400'>
              Post a Job
            </a>
          </Link>
        </div>
        <div className='text-white'>Dark image of man on couch, angled</div>
      </div>
    </div>
  )
}

export default CtaFull
