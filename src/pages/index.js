import Head from 'next/head'
import Link from 'next/link'

import { useAuth } from '../utilities/firebase-auth'

import Header from '../components/header'

const Home = () => {
  const auth = useAuth()

  return (
    <>
      <Head>
        <title>Remote Jamstack</title>
      </Head>

      <Header />

      <div className='px-10 text-center bg-white py-28'>
        <h1 className='max-w-3xl mx-auto font-bold text-center text-gray-700 text-7xl'>
          Remote jobs for the Jamstack ecosystem
        </h1>
        <p className='py-8 text-xl text-gray-700'>
          We cater to jobs with a focus on Jamstack technologies.
        </p>
        <div>
          <Link href='/submit-job'>
            <a className='inline-block px-8 py-2 mx-4 text-lg text-white bg-blue-700 rounded-md hover:bg-blue-800'>
              Submit Job
            </a>
          </Link>
          <Link href='/about'>
            <a className='inline-block px-8 py-2 mx-4 text-lg text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100'>
              Learn More
            </a>
          </Link>
        </div>
      </div>

      <div className='px-10 m-auto text-center bg-gray-100 max-w-7xl py-28'>
        <h2 className='text-5xl font-bold text-center text-gray-700'>
          Featured Jobs
        </h2>
        <div className='grid grid-cols-3 gap-10 my-10'>
          <div className='flex p-3 bg-white rounded-md shadow-md'>
            <div className='flex-shrink-0'>
              <div className='flex items-center justify-center w-12 h-12 text-white bg-gray-900 rounded-md'>
                <svg
                  className='w-12 h-12'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
                  />
                </svg>
              </div>
            </div>
            <div className='w-full ml-4 text-left'>
              <p className='text-lg font-bold leading-6 text-gray-700'>
                Front-End Developer
              </p>
              <p className='text-gray-500'>Vercel</p>
            </div>
          </div>
          <div className='flex p-3 bg-white rounded-md shadow-md'>
            <div className='flex-shrink-0'>
              <div className='flex items-center justify-center w-12 h-12 text-white bg-blue-400 rounded-md'>
                <svg
                  className='w-12 h-12'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
                  />
                </svg>
              </div>
            </div>
            <div className='ml-4 text-left'>
              <p className='text-lg font-bold leading-6 text-gray-700'>
                Support Technician
              </p>
              <p className='text-gray-500'>GraphCMS</p>
            </div>
          </div>
          <div className='flex p-3 bg-white rounded-md shadow-md'>
            <div className='flex-shrink-0'>
              <div className='flex items-center justify-center w-12 h-12 text-white bg-green-400 rounded-md'>
                <svg
                  className='w-12 h-12'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
                  />
                </svg>
              </div>
            </div>
            <div className='ml-4 text-left'>
              <p className='text-lg font-bold leading-6 text-gray-700'>
                DX Engineer
              </p>
              <p className='text-gray-500'>Netlify</p>
            </div>
          </div>
          <div className='flex p-3 bg-white rounded-md shadow-md'>
            <div className='flex-shrink-0'>
              <div className='flex items-center justify-center w-12 h-12 text-white bg-purple-700 rounded-md'>
                <svg
                  className='w-12 h-12'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
                  />
                </svg>
              </div>
            </div>
            <div className='ml-4 text-left'>
              <p className='text-lg font-bold leading-6 text-gray-700'>
                Software Engineer
              </p>
              <p className='text-gray-500'>11ty</p>
            </div>
          </div>
          <div className='flex p-3 bg-white rounded-md shadow-md'>
            <div className='flex-shrink-0'>
              <div className='flex items-center justify-center w-12 h-12 text-white bg-red-400 rounded-md'>
                <svg
                  className='w-12 h-12'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
                  />
                </svg>
              </div>
            </div>
            <div className='ml-4 text-left'>
              <p className='text-lg font-bold leading-6 text-gray-700'>
                Project Manager
              </p>
              <p className='text-gray-500'>Contentful</p>
            </div>
          </div>
          <div className='flex p-3 bg-white rounded-md shadow-md'>
            <div className='flex-shrink-0'>
              <div className='flex items-center justify-center w-12 h-12 text-white bg-blue-900 rounded-md'>
                <svg
                  className='w-12 h-12'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
                  />
                </svg>
              </div>
            </div>
            <div className='ml-4 text-left'>
              <p className='text-lg font-bold leading-6 text-gray-700'>
                Database Engineer
              </p>
              <p className='text-gray-500'>Fauna</p>
            </div>
          </div>
        </div>
        <div>
          <a className='inline-block px-8 py-2 mx-4 text-gray-700 bg-white rounded-md shadow-md hover:bg-gray-100'>
            View All Jobs
          </a>
        </div>
      </div>

      <div className='bg-white'>
        <div className='px-10 m-auto text-center py-28 max-w-7xl'>
          <h2 className='text-5xl font-bold text-center text-gray-700'>
            Popular Tags
          </h2>
        </div>
      </div>

      <div className='bg-blue-700'>
        <div className='px-10 m-auto text-center max-w-7xl py-28'>
          <h2 className='text-5xl font-bold text-center text-white'>
            Susbcribe to our Newsletter
          </h2>
        </div>
      </div>
    </>
  )
}

export default Home
