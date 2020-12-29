import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '../libraries/firebase/auth'
import Shell from '../components/dashboard/shell'
import JobsEmpty from '../components/dashboard/jobs-empty'

const Dashboard = () => {
  const { user } = useAuth()

  if (!user) {
    return (
      <>
        <Head>
          <title>Unauthorized - Remote Jamstack</title>
        </Head>

        <Shell>
          <div className='p-10 font-medium text-center'>
            We are still under construction behind the scenes. Please{' '}
            <Link href='#subscribe'>
              <a className='text-red-500'>subscribe</a>
            </Link>{' '}
            to be notified when we launch.
          </div>
        </Shell>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Dashboard - Remote Jamstack</title>
      </Head>

      <Shell>
        <JobsEmpty />
      </Shell>
    </>
  )
}

export default Dashboard
