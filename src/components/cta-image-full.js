import Link from 'next/link'
import Image from 'next/image'

const CtaImageFull = () => {
  return (
    <div className='py-16'>
      <div className='container px-6 m-auto bg-white rounded-md shadow-md'>
        <div className='items-center justify-between lg:flex'>
          <div className='flex-1 lg:w-1/4 lg:p-0 p-7'>
            <h3 className='text-4xl font-bold text-gray-800'>Get started</h3>
            <p className='my-6 text-xl text-gray-500'>
              Ready to post your first job?
            </p>
            <p className='my-4'>
              Our{' '}
              <Link href='/pricing'>
                <a href='#' className='text-red-500 underline'>
                  Early Access
                </a>
              </Link>{' '}
              plan starts at $49.
            </p>
            <Link href='/job/create'>
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
          <div className='order-2 lg:w-3/4'>
            <Image
              src='/images/person-get-started.jpg'
              alt=''
              className='rounded'
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CtaImageFull
