import Head from 'next/head'
import Newsletter from '../components/newsletter'

const About = () => {
  return (
    <>
      <Head>
        <title>About - Remote Jamstack</title>
      </Head>

      <div className='px-5 sm:px-6 lg:px-8'>
        <div className='py-10 mx-auto max-w-7xl'>
          <h2 className='pb-10 text-4xl font-bold text-gray-800'>About</h2>
          <h3 className='pb-5 mt-10 text-2xl font-bold'>Site Technology</h3>
          <p>Made with Next.js, Tailwind CSS, Firebase, Vercel</p>
          <h3
            id='chris'
            className='pt-10 pb-5 mt-10 text-2xl font-bold border-t-4 border-gray-300'
          >
            About Me
          </h3>
          <p>
            My name is Chris Hartman and I'm the sole founder and developer of
            Remote Jamstack.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
