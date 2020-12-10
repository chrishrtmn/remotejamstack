import Link from 'next/link'
import { useRouter } from 'next/router'

import { useAuth } from '../utilities/firebase-auth'

import HeaderBanner from './header-banner'

const Header = () => {
  const router = useRouter()
  const auth = useAuth()

  return (
    <>
      <HeaderBanner />

      <header className='relative p-5 bg-white shadow-md'>
        <div className='flex justify-between w-full m-auto max-w-7xl sm:px-6 lg:px-8'>
          <Link href='/'>
            <a className='pt-1 text-2xl text-gray-700'>
              <span className='font-light'>Remote</span>{' '}
              <span className='font-bold'>Jamstack</span>
            </a>
          </Link>
          <div className='flex'>
            <Link href='/jobs'>
              <a className='pt-2 font-medium text-gray-700 text-md hover:text-blue-700'>
                Remote Jobs
              </a>
            </Link>
            <Link href='/about'>
              <a className='pt-2 ml-8 font-medium text-gray-700 text-md hover:text-blue-700'>
                What We Do
              </a>
            </Link>

            {auth.user ? (
              <>
                <Link href='/jobs/create'>
                  <a className='inline-block px-4 py-2 mx-8 font-medium text-white bg-blue-700 border border-opacity-0 rounded-md hover:bg-blue-800'>
                    Submit Job
                  </a>
                </Link>
                <div className='relative'>
                  <div>
                    <button
                      className='flex items-center max-w-xs text-sm bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                      id='user-menu'
                      aria-haspopup='true'
                    >
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='w-10 h-10 rounded-md tr'
                        src={auth.user.photoUrl}
                        alt=''
                      />
                    </button>
                  </div>
                  <div
                    className='absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-200 rounded-sm shadow-md ring-1 ring-black ring-opacity-5'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='user-menu'
                  >
                    <div class='py-1'>
                      <Link href='/dashboard'>
                        <a
                          className='block px-5 py-2 text-sm text-gray-700 hover:bg-gray-100'
                          role='menuitem'
                        >
                          Dashboard
                        </a>
                      </Link>
                    </div>
                    <div class='py-1'>
                      <Link href='/profile'>
                        <a
                          className='block px-5 py-2 text-sm text-gray-700 hover:bg-gray-100'
                          role='menuitem'
                        >
                          Profile
                        </a>
                      </Link>
                      <Link href='/settings'>
                        <a
                          className='block px-5 py-2 text-sm text-gray-700 hover:bg-gray-100'
                          role='menuitem'
                        >
                          Settings
                        </a>
                      </Link>
                    </div>
                    <div class='py-1'>
                      <button
                        onClick={(e) => auth.signout()}
                        className='w-full px-5 py-2 text-sm text-left text-gray-700 hover:bg-gray-100'
                        role='menuitem'
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={(e) => auth.signinWithGitHub()}
                  className='inline-block px-4 py-2 ml-8 mr-4 font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100'
                >
                  Login
                </button>
                <Link href='/signup'>
                  <a className='inline-block px-4 py-2 font-medium text-white bg-blue-700 border border-opacity-0 rounded-md hover:bg-blue-900'>
                    Sign Up
                  </a>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
