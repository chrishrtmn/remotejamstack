import Link from 'next/link'

const FAQ = () => {
  return (
    <div className='py-20 m-auto bg-gray-800 max-w-7xl sm:px-6 lg:px-8'>
      {/* <div className='mb-16 text-center'> */}
      <div className='text-center'>
        <h2 className='relative inline-block text-4xl font-bold text-center text-white'>
          Frequently Asked Questions
        </h2>
        <p className='px-6 mx-auto mt-2 text-lg text-center text-gray-400 max-w-prose'>
          This section is under construction behind the scenes. Please{' '}
          <Link href='#subscribe'>
            <a className='text-red-500'>subscribe</a>
          </Link>{' '}
          to be notified when we launch. If you have questions,{' '}
          <a
            className='text-red-500'
            href='mailto:hello@remotejamstack.com?subject=What%20is%20the%20subject%3F&body=What%20would%20you%20like%20to%20say%3F'
            target='_blank'
            rel='noopener noreferrer'
          >
            email
          </a>{' '}
          us and we'll get back to you.
        </p>
        <div className='w-24 h-1 mx-auto mt-4 bg-red-500 rounded'></div>
      </div>
    </div>
  )
}

export default FAQ
