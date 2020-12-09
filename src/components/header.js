import Link from 'next/link'
import { useRouter } from 'next/router'

import { useAuth } from '../libraries/firebase-auth'

const Header = () => {
  const router = useRouter()
  const auth = useAuth()

  return (
    <header className='flex justify-between p-5 bg-white shadow-sm'>
      <Link href='/'>
        <a className='pt-1 text-2xl'>
          Remote <span className='font-bold'>Jamstack</span>
        </a>
      </Link>
      <div className='pt-2'>
        <Link href='/jobs'>
          <a className='mr-10 text-md'>Remote Jobs</a>
        </Link>
        <Link href='/employers'>
          <a className='mr-10 text-md'>Employers</a>
        </Link>
      </div>
      <div>
        {auth.user ? (
          <>
            {router.pathname !== '/dashboard' ? (
              <Link href='/dashboard'>
                <a className='font-bold text-red-500'>Go to Dashboard</a>
              </Link>
            ) : null}
            <button
              onClick={(e) => auth.signout()}
              className='p-2 mx-5 text-black border rounded-sm'
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            onClick={(e) => auth.signinWithGitHub()}
            className='p-2 mr-5 text-black border rounded-sm'
          >
            Sign In
          </button>
        )}
        <Link href='/post-job'>
          <a className='inline-block p-2 text-white bg-red-500 rounded-sm'>
            Post a Job
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
