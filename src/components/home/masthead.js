import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '../../libraries/firebase/auth'

const Masthead = () => {
  const auth = useAuth()

  const href = auth.user ? '/job/create' : '/signup'

  return (
    <div className='relative overflow-hidden bg-white'>
      <div className='mx-auto max-w-7xl'>
        <div className='relative z-10 bg-white lg:max-w-masthead lg:w-full'>
          <svg
            className='absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <polygon points='50,0 100,0 50,100 0,100' />
          </svg>

          <main className='px-4 py-10 mx-auto md:py-16 lg:py-20 sm:px-6 lg:pl-8 lg:pr-0'>
            <div className='max-w-2xl mx-auto text-center lg:text-left lg:mx-0'>
              <h1 className='text-4xl font-bold leading-none text-gray-800 md:text-5xl lg:leading-tight lg:text-6xl '>
                Remote jobs in the Jamstack ecosystem
              </h1>
              <p className='max-w-xl pt-4 pb-8 mx-auto text-xl text-gray-500 lg:mx-0'>
                Find and post jobs with a focus on{' '}
                {/* (developers and teams) */}
                modern technologies using JavaScript, APIs, and markup.
              </p>
              <div>
                {/* <Link href='/jobs'>
                  <a className='inline-block px-8 py-2 mr-4 text-lg font-medium text-white bg-red-500 rounded-md hover:bg-red-600'>
                    View All Jobs
                  </a>
                </Link>
                <Link href={href}>
                  <a className='inline-block px-8 py-2 mx-4 text-lg font-medium text-red-500 bg-white border border-red-200 rounded-md hover:bg-red-50 hover:border-red-300'>
                    Post a Job
                  </a>
                </Link> */}
                <Link href='#subscribe'>
                  <a className='inline-block px-4 py-2 text-lg font-medium leading-tight text-red-500 bg-white border border-red-200 rounded-md lg:px-8 hover:bg-red-50 hover:border-red-300'>
                    Get Notified When We Launch
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
          src='/images/masthead-main.webp'
          alt=''
          layout='fill'
          objectFit='cover'
          priority
        />
      </div>
    </div>
  )
}

export default Masthead
