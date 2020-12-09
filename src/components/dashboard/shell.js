const Shell = ({ children }) => (
  <div className='p-5 pb-10 text-black bg-white rounded-lg shadow-sm'>
    <h2 className='pb-5 text-4xl font-bold text-left border-b-2 border-gray-100'>
      Dashboard
    </h2>
    {children}
  </div>
)

export default Shell
