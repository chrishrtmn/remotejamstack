import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Job = () => {
  const router = useRouter()
  const { id } = router.query
  const { data } = useSWR(`/api/job/${id}`, fetcher)

  if (!data) {
    return 'Loading...'
  }

  return <div>Job Page {data.jobTitle}</div>
}

export default Job
