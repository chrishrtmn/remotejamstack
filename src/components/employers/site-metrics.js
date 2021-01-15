import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const SiteMetrics = () => {
  const router = useRouter()
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data } = useSWR('/api/jobs', fetcher)

  return (
    <div className='px-4 py-10 bg-gray-800 md:py-16 lg:py-20 sm:px-6 lg:px-8'>
      <div className='w-full m-auto max-w-7xl'>
        <div className='mb-16 text-center'>
          <h2 className='relative inline-block text-4xl font-bold text-center text-white'>
            Site Metrics
          </h2>
          <p className='px-6 mx-auto mt-2 text-lg text-center text-gray-400 max-w-prose'>
            An overview of our statistics during pre-release. Metrics are
            updated periodically and may not be current during this period.
          </p>
          <div className='w-24 h-1 mx-auto mt-4 bg-red-500 rounded'></div>
        </div>
        <div className='grid gap-5 md:gap-10 md:grid-cols-3'>
          {/* <Link href='/jobs'> */}
          <div className='px-6 py-4 text-gray-400 bg-gray-700 rounded-md shadow-md'>
            <div className='mb-2 text-lg font-medium text-gray-400'>
              Total Jobs Available
            </div>
            <div className='text-4xl font-bold text-gray-200'>
              {data?.jobs.length}
              <svg
                className='inline-block w-5 h-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
          {/* </Link> */}
          <div
            onClick={() => router.push('#subscribe')}
            className='px-6 py-4 text-gray-400 transition-all bg-gray-700 rounded-md shadow-md cursor-pointer hover:bg-gray-600 group'
          >
            <div className='flex justify-between mb-2 text-lg font-medium text-gray-400'>
              <div className='group-hover:text-white'>
                Total Email Subscribers
              </div>
              <svg
                className='w-8 h-8 group-hover:text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <div className='text-4xl font-bold text-gray-200 group-hover:text-white'>
              12
              <svg
                className='inline-block w-5 h-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
          <div className='px-6 py-4 text-gray-400 bg-gray-700 rounded-md shadow-md'>
            <div className='mb-2 text-lg font-medium text-gray-400'>
              New User Visits
            </div>
            <div className='text-4xl font-bold text-gray-200'>
              131
              <svg
                className='inline-block w-5 h-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteMetrics
