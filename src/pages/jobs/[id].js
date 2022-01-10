import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

const JobPage = (props) => {
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
          {data.jobPosition}
        </h2>
        <p>Job Employment Type: {data.jobEmploymentType}</p>
        <p>Job Role Level: {data.jobRoleLevel}</p>
        <p>Job Base Compensation: {data.jobBaseCompensation}</p>
        <p>Job Application Link: {data.jobApplicationLink}</p>
        <p>Posted At: {data.createdAt}</p>
        <p>Job Description: {data.jobDescription}</p>
        <p>Job Interview Process: {data.jobInterviewProcess}</p>
        <p>Job Remote Type: {data.jobRemoteType}</p>
        <hr className='pb-10 mt-10' />
        <p>Job ID: {id}</p>
        <p>User ID: {data.uid}</p>
        <p>Job Referral: {data.jobReferral}</p>
      </div>
    </div>
  )
}

export default JobPage
