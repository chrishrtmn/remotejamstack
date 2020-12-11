import Link from 'next/link'

const Masthead = () => {
  return (
    <div className='px-10 pb-32 text-center bg-white pt-28'>
      <h1 className='max-w-3xl mx-auto font-bold text-center text-gray-700 text-7xl'>
        Remote jobs for the Jamstack ecosystem
      </h1>
      <p className='max-w-xl py-8 mx-auto text-xl text-gray-700'>
        We cater to jobs with a focus on modern technologies using JavaScript,
        APIs, and markup.
      </p>
      <div>
        <Link href='/job/create'>
          <a className='inline-block px-8 py-2 mx-4 text-lg font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800'>
            Submit Job
          </a>
        </Link>
        <Link href='/about'>
          <a className='inline-block px-8 py-2 mx-4 text-lg font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100'>
            Learn More
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Masthead
