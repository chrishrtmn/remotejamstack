const Testimonials = () => {
  return (
    <div className='py-20 bg-white sm:px-6 lg:px-8'>
      <div className='w-full m-auto max-w-7xl'>
        <blockquote className='max-w-3xl mx-auto text-xl text-center text-gray-800'>
          "The Jamstack architecture is the best way to build modern apps and
          websites where your team can get better performance, easier scaling,
          higher security, and improved developer experiences."
          <cite className='block mt-10 text-lg not-italic'>
            <span className='font-bold'>Chris Hartman</span>{' '}
            <span className='text-gray-600'>
              - Founder &amp; Developer, Remote Jamstack
            </span>
          </cite>
        </blockquote>
      </div>
    </div>
  )
}

export default Testimonials
