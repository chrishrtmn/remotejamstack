import Link from 'next/link'
import { formatDistanceToNow, parseISO } from 'date-fns'

const JobsTable = ({ jobs }) => {
  return (
    <div className='overflow-hidden border-b border-gray-200 shadow-md sm:rounded-md'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th scope='col' className='sr-only'>
              Logo
            </th>
            <th
              scope='col'
              className='py-3 pl-3 pr-6 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
            >
              Title &amp; User ID
            </th>
            <th
              scope='col'
              className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
            >
              Listed Date
            </th>
            <th
              scope='col'
              className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
            >
              Application Link
            </th>
            <th
              scope='col'
              className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
            >
              Job ID
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {jobs.map((job, index) => (
            <tr key={index} className='hover:bg-gray-100'>
              <td className='py-4 pl-6 whitespace-nowrap'>
                <div className='w-10 h-10'>
                  <img
                    className='w-10 h-10 rounded-md'
                    src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60'
                    alt=''
                  />
                </div>
              </td>
              <td className='py-4 pl-3 pr-6 whitespace-nowrap'>
                <div>
                  <Link href={'/job/' + job.id}>
                    <a className='text-sm font-medium text-gray-900'>
                      {job.jobTitle}
                    </a>
                  </Link>
                  <div className='text-sm text-gray-500'>{job.uid}</div>
                </div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>
                  Created {formatDistanceToNow(parseISO(job.createdAt))} ago
                </div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-md'>
                  {job.jobApplicationLink}
                </span>
              </td>
              <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                {job.id}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default JobsTable
