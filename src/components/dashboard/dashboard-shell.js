const DashboardShell = ({ children }) => (
  <div className='w-full max-w-6xl p-5 pb-10 m-auto text-black bg-white rounded-lg shadow-sm'>
    <h2 className='pb-5 text-4xl font-bold text-left border-b-2 border-gray-100'>
      Dashboard
    </h2>
    {children}
  </div>
)

export default DashboardShell
