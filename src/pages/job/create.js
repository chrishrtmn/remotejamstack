import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../libraries/firebase/auth'
import { createJob } from '../../libraries/firebase/db'
import { toast } from 'react-toastify'

const CreateJob = () => {
  const router = useRouter()
  const auth = useAuth()

  const { register, handleSubmit } = useForm()

  const onCreateJob = ({ jobTitle, jobApplicationLink }) => {
    createJob({
      uid: auth.user.uid,
      createdAt: new Date().toISOString(),
      jobTitle,
      jobApplicationLink,
    })
    toast("You've successfully posted your job opening.")
    router.push('/dashboard')
  }

  return (
    <>
      <Head>
        <title>Create Job - Remote Jamstack</title>
      </Head>

      <div className='px-4 pt-10 pb-20 sm:px-6 lg:px-8'>
        <div className='w-full m-auto max-w-prose'>
          <div className='justify-between pb-10 sm:flex'>
            <h2 className='text-3xl font-bold text-gray-800 lg:text-4xl'>
              Create Job
            </h2>
          </div>
          <div className='px-4 bg-white border border-gray-200 rounded-md shadow-md md:px-10'>
            <div className='py-10'>
              <form onSubmit={handleSubmit(onCreateJob)}>
                <input type='hidden' name='remember' value='true' />
                <div>
                  <label className='sr-only'>Job Title</label>
                  <input
                    autoFocus
                    type='text'
                    name='jobTitle'
                    placeholder='Job Title'
                    ref={register({ required: true })}
                    className='w-full px-3 py-2 mb-5 text-lg text-gray-800 placeholder-gray-500 border border-gray-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent'
                  />
                </div>
                <div>
                  <label className='sr-only'>Job Application Link</label>
                  <input
                    type='url'
                    name='jobApplicationLink'
                    className='w-full px-3 py-2 mb-5 text-lg text-gray-800 placeholder-gray-500 border border-gray-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent'
                    placeholder='Job Application URL'
                    ref={register()}
                  />
                </div>
                <div className='mt-4'>
                  <button
                    type='submit'
                    className='w-full px-4 py-2 text-lg font-medium leading-6 text-white bg-red-500 rounded-md md:ml-1 md:w-auto hover:bg-red-600 focus:outline-none'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateJob
