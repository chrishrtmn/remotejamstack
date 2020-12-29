import Head from 'next/head'
import Link from 'next/link'

const Changelog = () => {
  return (
    <>
      <Head>
        <title>Changelog - Remote Jamstack</title>
      </Head>

      <div className='px-4 pt-10 pb-20 sm:px-6 lg:px-8'>
        <div className='w-full m-auto max-w-prose'>
          <div className='justify-between pb-10 sm:flex'>
            <h2 className='text-3xl font-bold text-gray-800 lg:text-4xl'>
              Changelog
            </h2>
            <Link href='/roadmap'>
              <a className='inline-block px-4 py-2 mt-2 font-medium text-red-500 border border-red-200 rounded-md sm:mt-0 hover:border-red-300 hover:bg-red-50 place-self-center'>
                View Roadmap
              </a>
            </Link>
          </div>
          <div className='px-4 bg-white border border-gray-200 rounded-md shadow-md md:px-10'>
            <div className='py-10 text-sm border-b border-gray-200'>
              <p className='mb-0'>
                Remote Jamstack is under active development and has been
                regularly pushing out updates. We strive to be transparent on
                what we do and publish all new features &amp; improvements we've
                done to this public changelog.
              </p>
              {/* <p>
                <a href='#subscribe' className='text-red-500'>
                  Subscribe
                </a>{' '}
                to our newsletter to get the latest updates as they release.
              </p> */}
            </div>
            {/* Changelog Event */}
            {/* <div className='py-10 border-b border-gray-200'>
              <div className='text-lg text-gray-400'>January 1, 2021</div>
              <div className='mt-4 text-xl font-bold'>
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
                    d='M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z'
                  />
                </svg>{' '}
                Alpha Release
              </div>
              <ul className='mt-2 space-y-2 list-disc ml-14'>
                <li>
                  Internally released for friends and family to browse and test
                  out the site for bugs and provide feedback ahead of the
                  upcoming beta release.
                </li>
              </ul>
            </div> */}
            {/* Changelog Event End */}
            {/* Changelog Event */}
            <div className='py-10 border-b border-gray-200'>
              <div className='text-lg text-gray-400'>December 29, 2020</div>
              <div className='mt-4 text-xl font-bold'>
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
                    d='M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z'
                  />
                </svg>{' '}
                Pre-Alpha Release
              </div>
              <ul className='mt-2 space-y-2 list-disc ml-14'>
                <li>
                  Landing and sub-pages are pushed live for browsing and to
                  subscribe to our newsletter for updates.
                </li>
                <li>
                  No access yet for signing up, logging in, or viewing and
                  posting jobs as we are still under development. Be patient!
                </li>
              </ul>
            </div>
            {/* Changelog Event End */}
            {/* Changelog Event */}
            <div className='py-10 border-b border-gray-200'>
              <div className='text-lg text-gray-400'>December 24, 2020</div>
              <div className='mt-4 text-xl font-bold'>
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
                    d='M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7'
                  />
                </svg>{' '}
                New Features
              </div>
              <ul className='mt-2 space-y-2 list-disc ml-14'>
                <li>
                  <span className='block font-bold'>Roadmap</span>
                  Added a Roadmap page. It will be actively updated with
                  upcoming changes and features for better transparency.
                </li>
                <li>
                  <span className='block font-bold'>Newsletter</span>
                  Connected FormSpree to let users sign up for our Newsletter.
                  Get notified of our upcoming launch.
                </li>
              </ul>
              <div className='mt-4 text-xl font-bold'>
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
                    d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                  />
                </svg>{' '}
                Bug Fixes &amp; Improvements
              </div>
              <ul className='mt-2 space-y-2 list-disc ml-14'>
                <li>
                  Removed access for anonymous users for internal pages and
                  sections that are still under development.
                </li>
                <li>
                  Added small section for bulk purchases and/or charity jobs
                  under Pricing section.
                </li>
                <li>
                  Added active and hover states to header and footer navigation
                  links.
                </li>
              </ul>
            </div>
            {/* Changelog Event End */}
            {/* Changelog Event */}
            <div className='py-10 border-b border-gray-200'>
              <div className='text-lg text-gray-400'>December 23, 2020</div>
              <div className='mt-4 text-xl font-bold'>
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
                    d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                  />
                </svg>{' '}
                Internal Features
              </div>
              <ul className='mt-2 space-y-2 list-disc ml-14'>
                {/* <li>
                  <span className='block font-bold'>SendGrid</span>
                  Switched to SendGrid for our newsletter and for the{' '}
                  <Link href='/contact'>
                    <a className='text-red-500'>contact</a>
                  </Link>{' '}
                  form for users to provide any concerns and/or feedback.
                </li> */}
                <li>
                  <span className='block font-bold'>Google Analytics</span>
                  Integrated Google Analytics for general user tracking and
                  pulling API data for the Site Metrics section on Employers
                  page.
                </li>
                <li>
                  <span className='block font-bold'>Hotjar</span>
                  Added heatmap tracking to understand &amp; determine future
                  strategies for better user experiences.
                </li>
              </ul>
              <div className='mt-4 text-xl font-bold'>
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
                    d='M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7'
                  />
                </svg>{' '}
                New Features
              </div>
              <ul className='mt-2 space-y-2 list-disc ml-14'>
                <li>
                  <span className='block font-bold'>Crisp Chat</span>
                  Added live chat for customer communications. Let's talk!
                </li>
                <li>
                  <span className='block font-bold'>Changelog</span>
                  Our new Changelog page is added. It will be updated with new
                  features, bug fixes, and site improvements.
                </li>
              </ul>
            </div>
            {/* Changelog Event End */}
            {/* Changelog Event */}
            <div className='py-10'>
              <div className='text-lg text-gray-400'>
                October 1 - December 22, 2020
              </div>
              <div className='mt-4 text-xl font-bold'>
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
                    d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                  />
                </svg>{' '}
                Inspiration
              </div>
              <ul className='mt-2 space-y-2 list-disc ml-14'>
                <li>
                  <span className='block font-bold'>Archived</span>
                  This Changelog was later created on December 23, 2020. Any
                  code or site history beforehand won't be logged.
                </li>
                <li>
                  <span className='block font-bold'>Ideation</span>
                  Inspired by the upcoming Jamstack Conf 2020, I purchased the
                  RemoteJamstack.com domain and began planning out the site.
                </li>
              </ul>
            </div>
            {/* Changelog Event End */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Changelog
