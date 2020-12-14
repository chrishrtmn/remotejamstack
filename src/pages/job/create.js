import { useForm } from 'react-hook-form'

const JobCreateForm = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div className='flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <h2 className='mt-6 text-3xl font-extrabold text-center text-gray-900'>
            Create Job
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-6'>
          <input type='hidden' name='remember' value='true' />
          <div className='space-y-4'>
            <div>
              <label>Job Title</label>
              <input
                autoFocus
                type='text'
                name='Job Title'
                ref={register({ required: true })}
                className='relative block w-full p-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-md sm:text-sm'
              />
            </div>
            <div>
              <label>Job Application Link</label>
              <input
                type='url'
                name='Job Application Link'
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

export default JobCreateForm
