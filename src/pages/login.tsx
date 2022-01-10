import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '../libraries/firebase/auth'

const LoginPage = () => {
  const router = useRouter()
  const { user } = useAuth()

  if (!user) {
    return (
      <>
        <Head>
          <title>Login - Remote Jamstack</title>
        </Head>

        <div className='px-4 py-10 md:py-16 lg:py-20 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-7xl'>
            <div className='flex justify-between pb-10'>
              <h2 className='text-3xl font-bold text-gray-800 lg:text-4xl'>
                Login
              </h2>
              <div className='inline-block px-4 py-2 font-medium text-gray-400 border border-gray-200 rounded-md place-self-center'>
                Coming Soon
              </div>
            </div>
            <div className='p-6 bg-white rounded-md shadow-md'>
              <div className='p-10 font-medium text-center'>
                We are still under construction behind the scenes. Please{' '}
                <Link href='#subscribe'>
                  <a className='text-red-500 cursor-pointer'>subscribe</a>
                </Link>{' '}
                to be notified when we launch.
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Login - Remote Jamstack</title>
      </Head>

      <div>Login page</div>
    </>
  )
}

export default LoginPage
