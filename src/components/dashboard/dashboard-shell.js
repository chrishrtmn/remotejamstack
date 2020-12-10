import { useAuth } from '../../utilities/firebase-auth'

const DashboardShell = ({ children }) => {
  const auth = useAuth()

  return (
    <div className='w-full m-auto max-w-7xl sm:px-6 lg:px-8'>
      <div className='p-6 text-gray-700 bg-white rounded-md shadow-md '>
        <div className='grid items-center grid-cols-2 pb-5 border-b-2 border-gray-100'>
          <h2 className='text-4xl font-bold justify-self-start'>Dashboard</h2>
          <span className='text-sm italic text-gray-400 justify-self-end'>
            {auth.user.email}
          </span>
        </div>
        <div className='p-6 pt-12'>{children}</div>
      </div>
    </div>
  )
}

export default DashboardShell
