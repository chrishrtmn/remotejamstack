import { useAuth } from '../../libraries/firebase/auth'

const Shell = ({ children }) => {
  const { user } = useAuth()

  return (
    <div className='px-5 pt-10 pb-20 sm:px-6 lg:px-8'>
      <div className='m-auto max-w-7xl '>
        <div className='grid items-center grid-cols-2 pb-10 border-b-2 border-gray-100'>
          <h2 className='text-4xl font-bold text-gray-800'>Dashboard</h2>
          <span className='text-sm italic text-gray-500 justify-self-end'>
            {user?.email}
          </span>
        </div>
        <div className='p-6 text-gray-800 bg-white rounded-md shadow-md '>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Shell
