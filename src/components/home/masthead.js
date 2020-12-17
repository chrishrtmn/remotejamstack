import Image from 'next/image'
import Link from 'next/link'

import { useAuth } from '../../utilities/auth'

const Masthead = () => {
  const auth = useAuth()

  const href = auth.user ? '/job/create' : '/signup'

  return (
    <>
      {/* <div className='bg-white'>
        <div className='w-full max-w-4xl px-4 pb-32 mx-auto sm:px-8 lg:px-16 xl:px-20 pt-28'>
          <h1 className='font-bold text-gray-800 text-7xl'>
            Remote jobs in the Jamstack ecosystem
          </h1>
          <p className='max-w-xl py-8 text-xl text-gray-500'>
            Find and post jobs with a focus on (developers and teams) modern
            technologies using JavaScript, APIs, and markup. EDIT: We cater to;
            Welcome to the ultimate source for Jamstack jobs.
          </p>
          <div>
            <Link href='/jobs'>
              <a className='inline-block px-8 py-2 mr-4 text-lg font-medium text-white bg-red-500 rounded-md hover:bg-red-600'>
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
      </div> */}

      <div className='relative overflow-hidden bg-white'>
        <div className='mx-auto max-w-7xl'>
          <div className='relative z-10 bg-white lg:max-w-mh lg:w-full'>
            <svg
              className='absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block'
              fill='currentColor'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
              aria-hidden='true'
            >
              <polygon points='50,0 100,0 50,100 0,100' />
            </svg>

            <main className='py-20 pl-4 mx-auto sm:pl-6 lg:pl-8'>
              <div className='max-w-2xl mx-auto text-center lg:text-left lg:mx-0'>
                <h1 className='text-6xl font-bold text-gray-800 '>
                  Remote jobs in the Jamstack ecosystem
                </h1>
                <p className='max-w-xl py-8 mx-auto text-xl text-gray-500 lg:mx-0'>
                  Find and post jobs with a focus on{' '}
                  {/* (developers and teams) */}
                  modern technologies using JavaScript, APIs, and markup. The #1
                  source for Jamstack developers and teams to come together.
                </p>
                <div>
                  <Link href='/jobs'>
                    <a className='inline-block px-8 py-2 mr-4 text-lg font-medium text-white bg-red-500 rounded-md hover:bg-red-600'>
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
            </main>
          </div>
        </div>
        <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <Image
            className='block object-cover object-left w-full h-56 max-w-7xl lg:opacity-30 sm:h-72 md:h-96 lg:w-full lg:h-full'
            src='/images/masthead-main.jpg'
            alt=''
            layout='fill'
          />
        </div>
      </div>
    </>
  )
}

export default Masthead
