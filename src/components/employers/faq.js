import Link from 'next/link'
import { useState } from 'react'

const Accordion = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='pb-2'>
        <div
          className={`transition inline hover:text-white bg-gray-900 py-2 rounded-lg px-4 text-lg cursor-pointer ${
            isOpen ? 'text-white bg-gray-700' : 'text-gray-300'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {label}
        </div>
        <div
          className={`my-2 max-w-prose mx-auto text-gray-400 overflow-hidden transition duration-100 h-auto ${
            !isOpen ? 'max-h-0' : 'max-h-full'
          }`}
        >
          <div className='mb-4'>{children}</div>
        </div>
      </div>
    </>
  )
}

const FAQ = () => {
  return (
    <div
      id='faq'
      className='px-4 pt-10 pb-6 m-auto bg-gray-800 md:pt-16 md:pb-12 lg:pb-16 lg:pt-20 max-w-7xl sm:px-6 lg:px-8'
    >
      <div className='text-center'>
        <h2 className='relative inline-block text-4xl font-bold text-center text-white'>
          Frequently Asked Questions
        </h2>
        <p className='px-6 mx-auto mt-2 text-lg text-center text-gray-400 max-w-prose'>
          If you have any questions not shown below,{' '}
          <Link href='/contact'>
            <a className='text-white hover:text-red-500'>contact</a>
          </Link>{' '}
          us and we'll get back to you as soon as possible.
        </p>
        <div className='w-24 h-1 mx-auto mt-4 bg-red-500 rounded'></div>

        <div className='mx-auto mt-8 max-w-prose'>
          <Accordion label='How can we list a job at Remote Jamstack?'>
            You'll need to create an account and then you can go to the "Post a
            Job" menu button in the top right or in your Dashboard. From there,
            follow and fill out the form.
          </Accordion>
          <Accordion label='How much does it cost?'>
            During our pre-launch testing, all Basic job postings will be free!
            Once we officially launch, all new customers can post their first
            job free. Additional jobs will start at $99 per post. We'll have an
            option to upgrade your Basic post, or purchase a Featured post.
          </Accordion>
          <Accordion label='How many days will the listing stay up?'>
            Your job posting will stay up for 30 days once listed.
          </Accordion>
          <Accordion label='How do I edit my job listing?'>
            You'll be able to edit your jobs in your Dashboard. There is a link
            next to each job for you to be able to edit.
          </Accordion>
          <Accordion label='Can I post multiple jobs?'>
            If you need to bulk purchase jobs, please contact us and we'll work
            with you to do so.
          </Accordion>
          <Accordion label='Do you have discounts for non-profits?'>
            As supporters of non-profits and open-source, we do! Please connect
            with us.
          </Accordion>
          <Accordion label='Do you offer refunds?'>
            We do not offer refunds for the time being. All revenue ensures the
            site is continuously maintained by us to provide you with the best
            jobs and user experience.
          </Accordion>
          <Accordion label='How do payments work?'>
            We accept and process payments through{' '}
            <a
              href='https://stripe.com'
              target='_blank'
              rel='noopener'
              className='text-white hover:text-red-500'
            >
              Stripe
            </a>
            , our secure payment provider.
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default FAQ
