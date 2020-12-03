import { useState, useEffect } from 'react'
import Head from 'next/head'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

async function fetchJobPosts() {
  const entries = await client.getEntries()
  if (entries.items) return entries.items.map(({ fields }) => fields)
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export default function Home() {
  const [jobPosts, setJobPosts] = useState([])

  useEffect(() => {
    async function getJobPosts() {
      const posts = await fetchJobPosts()
      setJobPosts([...posts])
    }

    getJobPosts()
  }, [])

  return (
    <div>
      <Head>
        <title>Remote Jamstack</title>
      </Head>

      <div className='p-20 text-center'>
        <div className='text-2xl text-white'>
          Remote <span className='font-bold'>Jamstack</span>
        </div>
        <h1 className='py-20 text-5xl font-medium text-white'>
          Remote jobs for the{' '}
          <span className='block pt-2 text-theme-red'>Jamstack ecosystem</span>
        </h1>
        <p className='text-lg text-white'>Coming soon.</p>
        {/*<nav>
          <ul className='text-white'>
            <li>Jobs</li>
            <li>Employers</li>
            <li className='px-4 py-2 bg-theme-blue'>Post a Job</li>
          </ul>
        </nav>*/}
      </div>
      <div>
        {/**jobPosts.length > 0
          ? jobPosts.map((job) => (
              <div>
                <img src={job.companyImage} />
                <a href={job.link}>
                  {job.title} - {job.company}
                </a>
                <p>{job.location}</p>
                <p>{job.createdAt}</p>
              </div>
            ))
          : null**/}
      </div>
    </div>
  )
}
