import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Job = (props) => {
  const router = useRouter()
  const { id } = router.query
  const { data } = useSWR(`/api/jobs/${id}`, fetcher)

  if (!data) {
    return 'Loading...'
  }

  return (
    <div className='px-5 pt-10 pb-20 sm:px-6 lg:px-8'>
      <div className='m-auto max-w-7xl '>
        <h2 className='pb-10 text-4xl font-bold text-gray-800'>
          {data.jobTitle}
        </h2>
        <p>Job ID: {id}</p>
        <p>Job Application Link: {data.jobApplicationLink}</p>
        <p>Created At: {data.createdAt}</p>
        <p>User ID: {data.uid}</p>
      </div>
    </div>
  )
}

export default Job
