const Testimonials = () => {
  return (
    <div className='px-4 py-10 bg-white md:py-16 lg:py-20 sm:px-6 lg:px-8'>
      <div className='w-full m-auto max-w-7xl'>
        <div className='mb-16 text-center'>
          <h2 className='relative inline-block text-4xl font-bold text-center text-gray-800'>
            Testimonials
          </h2>
          <div className='w-24 h-1 mx-auto mt-4 bg-red-500 rounded'></div>
        </div>
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
