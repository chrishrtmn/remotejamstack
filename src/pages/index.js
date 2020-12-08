import Head from 'next/head'
//import Subscribe from '../components/subscribe'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Remote Jamstack</title>
      </Head>

      <div className='px-10 py-20 text-center'>
        <div className='text-2xl text-white'>
          Remote <span className='font-bold'>Jamstack</span>
        </div>

        <h1 className='max-w-md py-20 mx-auto text-5xl font-medium text-center text-white'>
          <span className='text-theme-red'>Remote</span> jobs for the{' '}
          <span className='pt-2 text-theme-red'>Jamstack</span> ecosystem
        </h1>
      </div>
    </div>
  )
}
