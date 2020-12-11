import Head from 'next/head'
import Link from 'next/link'

import { useAuth } from '../utilities/firebase-auth'

import JobsEmpty from '../components/dashboard/jobs-empty'
import Jobs from '../components/dashboard/jobs'

const Dashboard = () => {
  const auth = useAuth()

  if (!auth.user) {
    return (
      <div className='p-10 font-medium text-center'>
        Please sign in or{' '}
        <Link href='/'>
          <a className='text-red-500'>go back home</a>
        </Link>
        <br />
        (This can be the loading state too)
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Dashboard - Remote Jamstack</title>
      </Head>

      <JobsEmpty />
      {/* <Jobs /> */}
    </>
  )
}

export default Dashboard
