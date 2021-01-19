import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Roadmap = () => {
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
              rel='noopener noreferrer'
              className='inline-block px-4 py-2 mt-2 font-medium text-red-500 border border-red-200 rounded-md sm:mt-0 hover:border-red-300 hover:bg-red-50 place-self-center'
            >
              Submit a Request
            </a>
          </div>
          <div className='px-4 bg-white border border-gray-200 rounded-md shadow-md md:px-10'>
            <div className='py-10 text-sm border-b border-gray-200'>
              <p className='mb-0'>
                Remote Jamstack is under active development and has been
                regularly pushing out updates. We strive to be transparent on
                what we do and publish all new features &amp; upcoming requests
                we'd like to work on to this public roadmap.
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
                <li>
                  Integrate rest of form fields for accounts and creating jobs
                </li>
                <li>Update and style Jobs tables to reflect form fields</li>
                <li>
                  Design and style Job details page with all information
                  available
                </li>
                <li>Fix User menu dropdown not closing when logged in</li>
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
                <li>Integrate more signup options for the Sign Up page</li>
                <li>Create and setup the Login page</li>
                <li>Plan out and setup Settings page</li>
                <li>Plan out and setup Profile page</li>
                <li>Stripe integration for purchasing jobs with upgrades</li>
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
                <li>Add rich-text editing with Draft.js</li>
                <li>Convert Job ID routes into SEO-friendly slug urls</li>
                <li>Add better SEO metadata with NextSEO</li>
                <li>Setup dynamic sitemaps</li>
                <li>Design and build out an About page</li>
                <li>
                  Update FAQ section popular questions with dropdown states
                </li>
                <li>
                  Style and adjust Employers CTA section after beta launch
                </li>
                <li>Add "Why Us?" feature section on Employers page</li>
                <li>
                  Setup Blog with either MDX or pull down API from a Headless
                  CMS
                </li>
                <li>Create a Privacy Policy and setup page</li>
                <li>Create Terms and Conditions and setup page</li>
                <li>
                  Create a 3-column feature section for landing page explaining
                  Jamstack
                </li>
                <li>Algolia Search integration for jobs</li>
                <li>Search filter integration on Jobs page</li>
                <li>Night mode based on color-scheme and user preferences</li>
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
                <li>Internationalization with react-i18next</li>
                <li>Make site performance great with high Lighthouse scores</li>
                <li>
                  Fix console verbose violations with FOUC and forced reflow
                </li>
                <li>List Feature section on homepage with Jamstack agencies</li>
                <li>Integrate Google Analytics API for site metrics</li>
                <li>Integrate FormSpree API for email subscriber count</li>
                <li>
                  Create a Blog section for landing page with latest posts
                </li>
                <li>
                  Design and build out a FAQ page if there's enough questions
                </li>
                <li>Re-check image and svg optimization</li>
                <li>Make site and links more accessible</li>
                <li>Framer Motion integration for in-viewport transitions</li>
                <li>
                  Third-Party Jobs section pulling in API from other related
                  jobs
                </li>
                <li>Design and setup Services/Running Costs page</li>
                <li>Design and setup potential Advertising page</li>
                <li>Design and setup Stack page</li>
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
