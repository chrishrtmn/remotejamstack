import Head from 'next/head'
import Link from 'next/link'

import { useAuth } from '../../libraries/firebase-auth'

import Header from '../../components/header'
import JobsEmpty from '../../components/dashboard/jobs-empty'

//import Subscribe from '../components/subscribe'

const Dashboard = () => {
  const auth = useAuth()

  if (!auth.user) {
    return (
      <div className='p-10 font-bold text-center'>
        Please sign in or{' '}
        <Link href='/'>
          <a className='text-red-500'>go back home</a>
        </Link>
        <br />
        (This is the loading state too)
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Dashboard - Remote Jamstack</title>
      </Head>

      <Header />

      <div className='p-10 text-center'>
        <JobsEmpty />
      </div>
    </>
  )
}

export default Dashboard
