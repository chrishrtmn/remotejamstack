import { useForm, ValidationError } from '@formspree/react'

const NewsletterForm = () => {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID
  )

  if (state.succeeded) {
    return (
      <div className='flex p-4 text-white border border-white rounded-md'>
        <svg
          className='h-8 text-green-500'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>{' '}
        <span className='mt-1 ml-2'>Thank you for subscribing!</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className='p-1 bg-white rounded-md md:flex'>
      <label htmlFor='email' className='sr-only'>
        Email
      </label>
      <input
        id='email'
        type='email'
        name='email'
        placeholder='Enter your email'
        className='flex-grow w-full px-3 py-2 mb-1 text-lg text-gray-800 rounded-md md:mb-0 md:w-auto focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent md:rounded-tl-md md:rounded-bl-md'
        required
      />
      <ValidationError field='email' prefix='Email' errors={state.errors} />
      <button
        type='submit'
        disabled={state.submitting}
        className='w-full px-4 py-2 text-lg font-medium leading-6 text-white bg-red-500 rounded-md md:ml-1 md:w-auto hover:bg-red-600 focus:outline-none md:rounded-tr-md md:rounded-tl-none md:rounded-bl-none md:rounded-br-md'
      >
        Notify Me
      </button>
    </form>
  )
}

export default NewsletterForm