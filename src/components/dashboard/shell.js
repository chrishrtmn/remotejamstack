import { useAuth } from '../../utilities/firebase-auth'

const Shell = ({ children }) => {
  const auth = useAuth()

  return (
    <div className='w-full py-10 m-auto sm:px-6 lg:px-8 max-w-7xl'>
      <div className='grid items-center grid-cols-2 pb-5 border-b-2 border-gray-100'>
        <h2 className='text-4xl font-bold text-gray-800'>Dashboard</h2>
        <span className='text-sm italic text-gray-600 justify-self-end'>
          {auth.user.email}
        </span>
      </div>
      <div className='p-6 text-gray-700 bg-white rounded-md shadow-md '>
        {children}
      </div>
    </div>
  )
}

export default Shell
