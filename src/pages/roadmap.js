import Head from 'next/head'
import Link from 'next/link'

const Roadmap = () => {
  return (
    <>
      <Head>
        <title>Roadmap - Remote Jamstack</title>
      </Head>

      <div className='px-4 pt-10 pb-20 sm:px-6 lg:px-8'>
        <div className='w-full m-auto max-w-prose'>
          <div className='flex justify-between pb-10'>
            <h2 className='text-4xl font-bold text-gray-800'>Roadmap</h2>
            {/* <Link href='/contact'>
              <a className='inline-block px-4 py-2 font-medium text-red-500 border border-red-200 rounded-md hover:border-red-300 hover:bg-red-50 place-self-center'>
                Submit a Request
              </a>
            </Link> */}
            <a
              href='mailto:hello@remotejamstack.com?subject=Request%20submission&body=What%20is%20your%20request%3F'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block px-4 py-2 font-medium text-red-500 border border-red-200 rounded-md hover:border-red-300 hover:bg-red-50 place-self-center'
            >
              Submit a Request
            </a>
          </div>
          <div className='px-10 bg-white border border-gray-200 rounded-md shadow-md'>
            <div className='py-10 text-sm border-b border-gray-200'>
              <p className='mb-0'>
                Remote Jamstack is under active development and has been
                regularly pushing out updates. We strive to be transparent on
                what we do and publish all new features &amp; upcoming requests
                we'd like to work on to this public roadmap.
              </p>
              {/* <p>
                <a href='#subscribe' className='text-red-500'>
                  Subscribe
                </a>{' '}
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
                <li>Make site fully responsive (on-going)</li>
                <li>Dashboard job list table buildout</li>
                <li>Job page results table content and styling</li>
                <li>Job Details page designing and styling</li>
                <li>Create Contact form with FormSpree</li>
              </ul>
            </div>
            {/* End In-Progess */}
            {/* Up Next */}
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
                Up Next
              </div>
              <ul className='mt-2 space-y-2 list-disc ml-14'>
                <li>Create a Sign Up page</li>
                <li>Create a Login page</li>
                <li>Settings page</li>
                <li>Profile page</li>
                <li>Create Job page styling enhancements</li>
                <li>Stripe integration</li>
              </ul>
            </div>
            {/* End Up Next */}
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
                    d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
                  />
                </svg>{' '}
                Planned
              </div>
              <ul className='mt-2 space-y-2 list-disc ml-14'>
                <li>Design and build out an About page</li>
                <li>FAQ questions with dropdown states</li>
                <li>Adjust Employers CTA section and styling</li>
                <li>"Why us?" feature section on Employers page</li>
                <li>Make site performance great with high Lighthouse scores</li>
                <li>Update site metadata information</li>
                <li>
                  Blog page with either MDX with JSON data or pull down API from
                  a Headless CMS
                </li>
                <li>Create a blog section for landing page</li>
                <li>Create a Privacy Policy and setup page</li>
                <li>Create Terms and Conditions and setup page</li>
                <li>
                  Create a 3-column feature section for landing page explaining
                  Jamstack
                </li>
                <li>Algolia Search integration for jobs</li>
                <li>Search filter integration on Jobs page</li>
              </ul>
            </div>
            {/* End Planned */}
            {/* Backlog */}
            <div className='py-10'>
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
                    d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                  />
                </svg>{' '}
                Backlog
              </div>
              <ul className='mt-2 space-y-2 list-disc ml-14'>
                <li>
                  List total jobs posted for site metrics instead of manual
                </li>
                <li>
                  Google Analytics API total of visits for site metrics instead
                  of manual
                </li>
                <li>
                  FormSpree API for email subscribers form for site metrics
                  instead of manual
                </li>
                <li>Re-check image and svg optimization</li>
                <li>Make site and links more accessible</li>
                <li>Replace Toastify with React Hot Toasts</li>
                <li>Framer Motion integration for in-viewport transitions</li>
                <li>
                  Third-Party Jobs section pulling in API from other related
                  jobs
                </li>
                <li>Convert Roadmap to MDX with JSON data</li>
                <li>Convert Changelog to MDX with JSON data</li>
                <li>Switch from SWR to React Query</li>
              </ul>
            </div>
            {/* End Backlog */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Roadmap
