import Head from 'next/head'
import ContactForm from '../components/contact/contact-form'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact - Remote Jamstack</title>
      </Head>

      <div className='px-4 pt-10 pb-20 sm:px-6 lg:px-8'>
        <div className='w-full m-auto max-w-prose'>
          <div className='justify-between pb-10 sm:flex'>
            <h2 className='text-3xl font-bold text-gray-800 lg:text-4xl'>
              Contact
            </h2>
          </div>
          <div className='px-4 bg-white border border-gray-200 rounded-md shadow-md md:px-10'>
            <div className='py-10'>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
