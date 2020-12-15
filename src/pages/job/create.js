import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../utilities/auth'
import { createJob } from '../../utilities/db'
import { toast } from 'react-toastify'

const CreateJob = () => {
  const router = useRouter()
  const auth = useAuth()

  const { register, handleSubmit } = useForm()

  const onCreateJob = ({ jobTitle, jobApplicationLink }) => {
    createJob({
      uid: auth.user.uid,
      createAt: new Date().toISOString(),
      jobTitle,
      jobApplicationLink,
    })
    toast("You've successfully posted your job opening.")
    router.push('/dashboard')
  }

  return (
    <div className='px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full mx-auto space-y-8 max-w-7xl'>
        <h2 className='text-4xl font-bold text-gray-800'>Create Job</h2>
        <form
          onSubmit={handleSubmit(onCreateJob)}
          className='p-10 mt-8 space-y-6 bg-white'
        >
          <input type='hidden' name='remember' value='true' />
          <div className='space-y-4'>
            <div>
              <label>Job Title</label>
              <input
                autoFocus
                type='text'
                name='jobTitle'
                ref={register({ required: true })}
                className='relative block w-full p-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-md sm:text-sm'
              />
            </div>
            <div>
              <label>Job Application Link</label>
              <input
                type='url'
                name='jobApplicationLink'
                className='relative block w-full p-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-md sm:text-sm'
                placeholder='URL'
                ref={register()}
              />
            </div>
          </div>
          <div>
            <button
              type='submit'
              className='relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md group hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateJob
