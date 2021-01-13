import { formatDistanceToNow, parseISO } from 'date-fns'

const JobsTable = ({ jobs }) => {
  return (
    <div className='overflow-hidden border-b border-gray-200 shadow-md sm:rounded-md'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th
              scope='col'
              className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
            >
              Name
            </th>
            <th
              scope='col'
              className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
            >
              Title
            </th>
            <th
              scope='col'
              className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
            >
              Status
            </th>
            <th
              scope='col'
              className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
            >
              Role
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td className='px-6 py-4 whitespace-nowrap'>
                <div className='flex items-center'>
                  <div className='flex-shrink-0 w-10 h-10'></div>
                  <div className='ml-4'>
                    <div className='text-sm font-medium text-gray-900'>
                      {job.jobTitle}
                    </div>
                    <div className='text-sm text-gray-500'>
                      {job.jobApplicationLink}
                    </div>
                  </div>
                </div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-900'>Created at</div>
                <div className='text-sm text-gray-500'>
                  {formatDistanceToNow(parseISO(job.createdAt))} ago
                </div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-md'>
                  User ID: {job.uid}
                </span>
              </td>
              <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                Job ID: {job.id}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default JobsTable
