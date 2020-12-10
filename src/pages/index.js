import Head from 'next/head'

import { useAuth } from '../utilities/firebase-auth'

import Header from '../components/header'

const Home = () => {
  const auth = useAuth()

  return (
    <>
      <Head>
        <title>Remote Jamstack</title>
      </Head>

      <Header />

      <div className='px-10 py-20 text-center'>
        <h1 className='max-w-md py-20 mx-auto text-5xl font-medium text-center'>
          <span className='text-red-500'>Remote</span> jobs for the{' '}
          <span className='pt-2 text-red-500'>Jamstack</span> ecosystem
        </h1>
      </div>
    </>
  )
}

export default Home
