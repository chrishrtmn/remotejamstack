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
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <h1>My Job Board</h1>

        {jobPosts.length > 0
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
          : null}
      </div>
    </div>
  )
}
