import { useAuth } from '../../utilities/firebase-auth'

const Shell = ({ children }) => {
  const auth = useAuth()

  return (
    <div className='px-5 py-10 sm:px-6 lg:px-8'>
      <div className='m-auto max-w-7xl '>
        <div className='grid items-center grid-cols-2 pb-10 border-b-2 border-gray-100'>
          <h2 className='text-4xl font-bold text-gray-800'>Dashboard</h2>
          <span className='text-sm italic text-gray-500 justify-self-end'>
            {auth.user.email}
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
