const StatsDisplayFull = () => (
  <div className='m-auto max-w-7xl sm:px-6 lg:px-8'>
    <div className='px-10 py-20'>
      <h2 className='text-xl font-medium text-gray-700'>Site statistics</h2>

      <div className='grid grid-cols-3 gap-10 mt-8 mb-20'>
        <div className='flex px-6 py-4 bg-white rounded-md shadow-md'>
          <div className='flex-shrink-0'>
            <div className='mb-2 font-medium text-gray-400 text-md'>
              Companies have trusted us
            </div>
            <div className='text-4xl font-bold text-gray-700'>20+</div>
          </div>
        </div>

        <div className='flex px-6 py-4 bg-white rounded-md shadow-md'>
          <div className='flex-shrink-0'>
            <div className='mb-2 font-medium text-gray-400 text-md'>
              Total page views
            </div>
            <div className='text-4xl font-bold text-gray-700'>1,000+</div>
          </div>
        </div>

        <div className='flex px-6 py-4 bg-white rounded-md shadow-md'>
          <div className='flex-shrink-0'>
            <div className='mb-2 font-medium text-gray-400 text-md'>
              Percentage of JavaScript on the web
            </div>
            <div className='text-4xl font-bold text-gray-700'>94%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default StatsDisplayFull
