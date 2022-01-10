import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const RoadmapPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Roadmap - Remote Jamstack</title>
      </Head>

      <div className='px-4 pt-10 pb-20 sm:px-6 lg:px-8'>
        <div className='w-full m-auto max-w-prose'>
          <div className='justify-between pb-10 sm:flex'>
            <h2 className='text-3xl font-bold text-gray-800 lg:text-4xl'>
              Roadmap
            </h2>
            {/* <Link href='/contact'>
              <a className='inline-block px-4 py-2 font-medium text-red-500 border border-red-200 rounded-md hover:border-red-300 hover:bg-red-50 place-self-center'>
                Submit a Request
              </a>
            </Link> */}
            <a
              href='mailto:hello@remotejamstack.com?subject=Request%20submission&body=What%20is%20your%20request%3F'
              target='_blank'
              rel='noopener'
              className='inline-block px-4 py-2 mt-2 font-medium text-red-500 border border-red-200 rounded-md sm:mt-0 hover:border-red-300 hover:bg-red-50 place-self-center'
            >
              Submit a Request
            </a>
          </div>
          <div className='bg-white border border-gray-200 rounded-md shadow-md'>
            {/* <div className='px-4 pt-6 pb-6 md:px-10 bg-blue-50'>
              <h3 className='text-2xl font-bold text-gray-800'>
                Stage: Pre-Alpha
              </h3>
              <ul className='mt-4 ml-4 space-y-1 text-sm text-gray-700 list-disc'>
                <li>
                  All Basic jobs will be free during the Alpha launch, with the
                  option to upgrade your Basic package or purchase the Featured
                  package coming in Beta.
                </li>
                <li>
                  Automatically posting your job to Google Jobs Network is still
                  under development, and will be done manually by us for the
                  time being.
                </li>
              </ul>
            </div> */}
            <div className='px-4 md:px-10'>
              <div className='py-10 text-sm border-b border-gray-200'>
                <p className='mb-0'>
                  Remote Jamstack is under development. We strive to be
                  transparent on what we're working on by publishing to this
                  public roadmap. This list is currently a work in progress and
                  is the process of being updated.
                </p>
                {/* <p>
                <Link href='#subscribe'>
                  <a className='text-red-500 cursor-pointer'>
                  Subscribe
                </a></Link>{' '}
                to our newsletter to get the latest updates as they release.
              </p> */}
              </div>
              {/* In-Progress */}
              <div className='py-10 border-b border-gray-200'>
                <div className='text-xl font-bold'>
                  <svg
                    className='inline-block w-6 mr-2 -mt-1 text-red-500'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
                    />
                  </svg>{' '}
                  In-Progress
                </div>
                <ul className='mt-2 space-y-2 list-disc ml-14'>
                  <li>Updated list to come...</li>
                </ul>
              </div>
              {/* End In-Progess */}
              {/* Planned */}
              <div className='py-10 border-b border-gray-200'>
                <div className='text-xl font-bold'>
                  <svg
                    className='inline-block w-6 mr-2 -mt-1 text-red-500'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>{' '}
                  Planned
                </div>
                <ul className='mt-2 space-y-2 list-disc ml-14'>
                  <li>Much more to come...</li>
                </ul>
              </div>
              {/* End Planned */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RoadmapPage
