const TestimonialsFull = () => {
  return (
    <div className='py-32 bg-gray-800'>
      <div className='w-full m-auto sm:px-6 lg:px-8 max-w-7xl'>
        <div className='px-10 text-center'>
          <h2 className='pb-4 text-lg font-medium text-gray-400 uppercase'>
            User Testimonial
          </h2>
          <h3 className='inline-block pb-16 text-5xl font-bold text-center text-gray-200'>
            We're{' '}
            <span className='relative inline-block'>
              jammin'
              <svg
                className='absolute w-auto h-12 text-red-500 transform -bottom-12 left-2 -rotate-3'
                viewBox='0 0 1064 769'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1042.91 0.0566553L21.0434 79.3006C-6.90519 81.525 -7.12354 137.135 21.0434 134.91L824.566 72.6274L311.447 245.435C288.411 253.22 292.232 303.964 317.233 300.071L568.334 260.31L693.666 240.43C721.976 233.987 750.622 230.223 779.368 229.169L666.045 313.557C632.529 338.72 568.552 366.108 550.757 414.35C539.84 445.074 551.958 473.574 565.714 497.764C607.309 572.837 632.201 640.264 620.301 734.106C615.825 769.14 657.857 784.155 662.442 748.842C675.107 650.413 656.656 573.672 617.353 490.396C610.205 482.281 605.105 471.652 602.696 459.85C600.286 448.048 600.676 435.602 603.816 424.081L641.372 396.276L697.815 354.569L848.366 241.542C861.249 231.81 863.869 202.337 848.366 193.579C784.281 157.432 708.841 178.425 639.734 192.467L1048.16 54.6933C1071.96 46.9079 1067.92 -1.88969 1042.91 0.0566553Z'
                  fill='#EF4444'
                />
              </svg>
            </span>
          </h3>
          <blockquote className='text-2xl text-gray-300'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            pretium lectus in posuere sagittis. Aliquam porttitor tristique
            porttitor. Aenean felis ex, egestas id faucibus id, efficitur non
            quam."
            <cite className='block mt-10 text-xl not-italic'>
              <span className='font-bold'>Judith Black</span> /{' '}
              <span className='text-gray-500'>CEO, Workcation</span>
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsFull
