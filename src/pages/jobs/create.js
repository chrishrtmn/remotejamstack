import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../libraries/firebase/auth'
import { createJob } from '../../libraries/firebase/db'
import useSWR, { mutate } from 'swr'
import { toast } from 'react-toastify'

const CreateJob = () => {
  const router = useRouter()
  const auth = useAuth()
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data } = useSWR('/api/jobs', fetcher)

  const { control, register, handleSubmit } = useForm()

  const onCreateJob = ({
    jobPosition,
    jobType,
    jobRemoteType,
    jobExperienceLevel,
    jobTimezonePreference,
    jobTravelRequirement,
    jobSponsorship,
    jobDescription,
    jobApplicationLink,
    jobCandidateNotes,
    jobInterviewProcess,
    jobMinCompensation,
    jobMaxCompensation,
    companyName,
    companyTagline,
    companyDescription,
    companyWebsite,
    companyLocation,
    companySize,
    companyInvestmentState,
    siteReferral,
  }) => {
    const newJob = {
      uid: auth.user.uid,
      createdAt: new Date().toISOString(),
      jobPosition,
      jobType,
      jobRemoteType,
      jobExperienceLevel,
      jobTimezonePreference,
      jobTravelRequirement,
      jobSponsorship,
      jobDescription,
      jobApplicationLink,
      jobCandidateNotes,
      jobInterviewProcess,
      jobMinCompensation,
      jobMaxCompensation,
      companyName,
      companyTagline,
      companyDescription,
      companyWebsite,
      companyLocation,
      companySize,
      companyInvestmentState,
      siteReferral,
    }

    createJob(newJob)
    toast("🎉⠀You've successfully posted your job.")
    mutate('/api/jobs', { jobs: [...data.jobs, newJob] })
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
          <form onSubmit={handleSubmit(onCreateJob)}>
            <div className='bg-white border border-gray-200 rounded-md shadow-md'>
              <h3 className='px-4 pt-6 pb-6 text-2xl font-bold text-gray-800 md:px-10 bg-blue-50'>
                Job Details
              </h3>
              <div className='px-4 pt-6 pb-8 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>
                  Position{' '}
                  <span className='text-base italic font-normal text-red-500'>
                    *
                  </span>
                </h3>
                <label className='sr-only'>Job Position</label>
                <input
                  autoFocus
                  type='text'
                  name='jobPosition'
                  placeholder='e.g. Front-End Developer'
                  ref={register({ required: true })}
                  className='w-full px-3 py-2 text-gray-800 placeholder-gray-500 placeholder-opacity-50 border border-gray-200 rounded-md shadow-md'
                />
              </div>
              <div className='px-4 pt-6 pb-8 bg-gray-100 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>
                  Job Type{' '}
                  <span className='text-base italic font-normal text-red-500'>
                    *
                  </span>
                </h3>
                <label className='sr-only'>Job Type</label>
                <select
                  name='jobType'
                  ref={register({ required: true })}
                  className='block w-full px-3 py-2 text-gray-800 border border-gray-200 rounded-md shadow-md appearance-none sm:w-1/2'
                >
                  <option value='' selected disabled>
                    Select
                  </option>
                  <option value='Full-Time'>Full-Time</option>
                  <option value='Part-Time'>Part-Time</option>
                  <option value='Contract'>Contract</option>
                  <option value='Internship'>Internship</option>
                </select>
              </div>
              <div className='px-4 pt-6 pb-8 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>
                  Remote Type{' '}
                  <span className='text-base italic font-normal text-red-500'>
                    *
                  </span>
                </h3>
                <label className='sr-only'>Job Remote Type</label>
                <select
                  name='jobRemoteType'
                  ref={register({ required: true })}
                  className='block w-full px-3 py-2 text-gray-800 border border-gray-200 rounded-md shadow-md appearance-none sm:w-1/2'
                >
                  <option value='' selected>
                    Select
                  </option>
                  <option value='Fully Remote'>Fully Remote</option>
                  <option value='Partially Remote'>Partially Remote</option>
                  <option value='Temporarily Remote'>Temporarily Remote</option>
                  <option value='Remote Optional'>Remote Optional</option>
                </select>
              </div>
              <div className='px-4 pt-6 pb-8 bg-gray-100 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>Experience Level</h3>
                <label className='sr-only'>Job Experience Level</label>
                <select
                  name='jobExperienceLevel'
                  ref={register()}
                  className='block w-full px-3 py-2 text-gray-800 border border-gray-200 rounded-md shadow-md appearance-none sm:w-1/2'
                >
                  <option value='' selected disabled>
                    Select
                  </option>
                  <option value='Entry-Level'>Entry-Level</option>
                  <option value='Mid-Level'>Mid-Level</option>
                  <option value='Senior-Level'>Senior-Level</option>
                </select>
              </div>
              <div className='px-4 pt-6 pb-8 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>
                  Timezone Preference
                </h3>
                <label className='sr-only'>Job Timezone Preference</label>
                <select
                  name='jobTimezonePreference'
                  ref={register()}
                  className='block w-full px-3 py-2 text-gray-800 border border-gray-200 rounded-md shadow-md appearance-none sm:w-1/2'
                >
                  <option value='Any' selected>
                    Any
                  </option>
                  <option value='Americas'>Americas</option>
                  <option value='Asia'>Asia</option>
                  <option value='Europe'>Europe</option>
                  <option value='Pacific'>Pacific</option>
                </select>
              </div>
              <div className='px-4 pt-6 pb-8 bg-gray-100 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>Travel Required?</h3>
                <label className='sr-only'>Job Travel Requirement</label>
                <select
                  name='jobTravelRequirement'
                  ref={register()}
                  className='block w-full px-3 py-2 text-gray-800 border border-gray-200 rounded-md shadow-md appearance-none sm:w-1/2'
                >
                  <option value='' selected>
                    Select
                  </option>
                  <option value='Yes'>Yes</option>
                  <option value='No'>No</option>
                </select>
              </div>
              <div className='px-4 pt-6 pb-8 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>
                  Visa Sponsorship Opportunities
                </h3>
                <label className='sr-only'>
                  Job Visa Sponsorship Opportunities
                </label>
                <select
                  name='jobSponsorship'
                  ref={register()}
                  className='block w-full px-3 py-2 text-gray-800 border border-gray-200 rounded-md shadow-md appearance-none sm:w-1/2'
                >
                  <option value='' selected>
                    Select
                  </option>
                  <option value='Yes'>Yes</option>
                  <option value='No'>No</option>
                </select>
              </div>
              <div className='px-4 pt-6 pb-8 bg-gray-100 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>Job Skills</h3>
                <label className='sr-only'>Job Skills</label>
                <input
                  type='text'
                  name='jobSkills'
                  placeholder='e.g. HTML, CSS, React, Vue, Serverless'
                  ref={register()}
                  className='w-full px-3 py-2 text-gray-800 placeholder-gray-500 placeholder-opacity-50 border border-gray-200 rounded-md shadow-md'
                />
                <p className='mt-2 text-sm text-gray-500'>
                  Enter skills separated by a comma.
                </p>
                <p className='p-3 mt-2 text-sm text-gray-700 border border-red-100 bg-red-50'>
                  <span className='text-red-500'>Recommended: </span>
                  Adding skills can help candidates filter their search results
                  and help you get quality applicants.
                </p>
              </div>
              <div className='px-4 pt-6 pb-8 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>
                  Description{' '}
                  <span className='text-base italic font-normal text-red-500'>
                    *
                  </span>
                </h3>
                <label className='sr-only'>Job Description</label>
                <textarea
                  name='jobDescription'
                  control={control}
                  placeholder='Minimum 120 characters'
                  ref={register({ required: true, min: 120 })}
                  className='block w-full h-32 min-h-0 px-3 py-2 -mb-4 text-gray-800 placeholder-gray-500 placeholder-opacity-50 border border-gray-200 rounded-md shadow-md cursor-text md:h-60 md:min-h-full'
                />
                <p className='mt-6 text-sm text-gray-500'>
                  You can always edit your description after posting your job.
                </p>
              </div>
              <div className='px-4 pt-6 pb-8 bg-gray-100 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>
                  Application Link{' '}
                  <span className='text-base italic font-normal text-red-500'>
                    *
                  </span>
                </h3>
                <label className='sr-only'>Job Application Link</label>
                <input
                  type='text'
                  name='jobApplicationLink'
                  placeholder='URL or email'
                  ref={register({ required: true })}
                  className='w-full px-3 py-2 text-gray-800 placeholder-gray-500 placeholder-opacity-50 border border-gray-200 rounded-md shadow-md'
                />
                <p className='mt-2 text-sm text-gray-500'>
                  Enter a URL (http://) or email address (@) for candidates to
                  apply to this job. This link will be public.
                </p>
              </div>
              <div className='px-4 pt-6 pb-8 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>
                  Notes for Candidates
                </h3>
                <label className='sr-only'>Notes for Candidates</label>
                <textarea
                  name='jobCandidateNotes'
                  placeholder='Minimum 20 characters'
                  ref={register({ min: 20 })}
                  className='block w-full px-3 py-2 text-gray-800 placeholder-gray-500 placeholder-opacity-50 border border-gray-200 rounded-md shadow-md'
                />
                <p className='mt-2 text-sm text-gray-500'>
                  Let your candidate know any notes ahead of applying.
                </p>
              </div>
              <div className='px-4 pt-6 pb-8 bg-gray-100 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>Interview Process</h3>
                <label className='sr-only'>Interview Process</label>
                <textarea
                  name='jobInterviewProcess'
                  placeholder='Minimum 20 characters'
                  ref={register({ min: 20 })}
                  className='block w-full px-3 py-2 text-gray-800 placeholder-gray-500 placeholder-opacity-50 border border-gray-200 rounded-md shadow-md'
                />
                <p className='mt-2 text-sm text-gray-500'>
                  Be transparent about your process to help attract quality
                  candidates. Include how many rounds there are and what happens
                  at each stage.
                </p>
              </div>
              <div className='px-4 pt-6 pb-8 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>Compensation</h3>
                <div className='sm:grid sm:grid-cols-2 sm:gap-5'>
                  <div className='w-full border border-gray-200 rounded-md shadow-md'>
                    <span className='inline-block px-4 text-gray-500'>$</span>
                    <label className='sr-only'>Job Minimum Compensation</label>
                    <input
                      type='number'
                      placeholder='Min'
                      name='jobMinCompensation'
                      ref={register()}
                      className='inline w-1/2 px-3 py-2 text-gray-800 placeholder-gray-500 placeholder-opacity-50 border-transparent'
                    />
                    <span className='inline-block px-4 italic text-gray-500 border-l border-gray-300'>
                      USD
                    </span>
                  </div>
                  <div className='w-full mt-4 border border-gray-200 rounded-md shadow-md sm:mt-0'>
                    <span className='inline-block px-4 text-gray-500'>$</span>
                    <label className='sr-only'>Job Maximum Compensation</label>
                    <input
                      type='number'
                      placeholder='Max'
                      name='jobMaxCompensation'
                      ref={register()}
                      className='inline w-1/2 px-3 py-2 text-gray-800 placeholder-gray-500 placeholder-opacity-50 border-transparent'
                    />
                    <span className='inline-block px-4 italic text-gray-500 border-l border-gray-300'>
                      USD
                    </span>
                  </div>
                </div>
                <p className='mt-2 text-sm text-gray-500'>
                  Posting the salary will increase your chances of receiving
                  relevant candidates.
                </p>
                <p className='p-3 mt-2 text-sm text-gray-700 border border-red-100 bg-red-50'>
                  <span className='text-red-500'>Recommended: </span>
                  Google does not index jobs without salary data. If this job
                  isn't a salary position, please convert the rate to the
                  closest annual figure.
                </p>
              </div>
            </div>
            <div className='mt-16 bg-white border border-gray-200 rounded-md shadow-md'>
              <h3 className='px-4 pt-6 pb-6 text-2xl font-bold text-gray-800 md:px-10 bg-blue-50'>
                Company Details
              </h3>
              <div className='px-4 pt-6 pb-8 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>
                  Company Name{' '}
                  <span className='text-base italic font-normal text-red-500'>
                    *
                  </span>
                </h3>
                <label className='sr-only'>Company Name</label>
                <input
                  type='text'
                  name='companyName'
                  placeholder='e.g. ACME Corporation'
                  ref={register({ required: true })}
                  className='w-full px-3 py-2 text-gray-800 placeholder-gray-500 placeholder-opacity-50 border border-gray-200 rounded-md shadow-md'
                />
              </div>
              <div className='px-4 pt-6 pb-8 bg-gray-100 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>Company Tagline</h3>
                <label className='sr-only'>Company Tagline</label>
                <input
                  type='text'
                  name='companyTagline'
                  placeholder='Maximum 40 characters'
                  ref={register({ min: 40 })}
                  className='w-full px-3 py-2 text-gray-800 placeholder-gray-500 placeholder-opacity-50 border border-gray-200 rounded-md shadow-md'
                />
              </div>
              <div className='px-4 pt-6 pb-8 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>
                  Company Description
                </h3>
                <label className='sr-only'>Company Description</label>
                <textarea
                  name='companyDescription'
                  control={control}
                  placeholder='Minimum 120 characters'
                  ref={register({ min: 120 })}
                  className='block w-full h-32 min-h-0 px-3 py-2 -mb-4 text-gray-800 placeholder-gray-500 placeholder-opacity-50 border border-gray-200 rounded-md shadow-md cursor-text md:h-60 md:min-h-full'
                />
                {/* <p className='mt-6 text-sm text-gray-500'>
                  This can be changed in your settings.
                </p> */}
              </div>
              <div className='px-4 pt-6 pb-8 bg-gray-100 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>Company Location</h3>
                <label className='sr-only'>Company Location</label>
                <input
                  type='text'
                  name='companyLocation'
                  placeholder='e.g. Cleveland, OH'
                  ref={register()}
                  className='w-full px-3 py-2 text-gray-800 placeholder-gray-500 placeholder-opacity-50 border border-gray-200 rounded-md shadow-md'
                />
              </div>
              <div className='px-4 pt-6 pb-8 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>Company Website</h3>
                <label className='sr-only'>Company Website</label>
                <input
                  type='url'
                  name='companyWebsite'
                  placeholder='http://'
                  ref={register()}
                  className='w-full px-3 py-2 text-gray-800 placeholder-gray-500 placeholder-opacity-50 border border-gray-200 rounded-md shadow-md'
                />
                <p className='mt-2 text-sm text-gray-500'>
                  Enter a URL (http://). This link will be public.
                </p>
              </div>
              <div className='px-4 pt-6 pb-8 bg-gray-100 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>Company Size</h3>
                <label className='sr-only'>Company Size</label>
                <select
                  name='companySize'
                  ref={register()}
                  className='block w-full px-3 py-2 text-gray-800 border border-gray-200 rounded-md shadow-md appearance-none sm:w-1/2'
                >
                  <option value='' selected>
                    Select
                  </option>
                  <option value='Small (~500)'>Small (~500)</option>
                  <option value='Medium (500+)'>Medium (500+)</option>
                  <option value='Large (1000+)'>Large (1000+)</option>
                </select>
              </div>
              <div className='px-4 pt-6 pb-8 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>
                  Company Investment Stage
                </h3>
                <label className='sr-only'>Company Investment Stage</label>
                <select
                  name='companyInvestmentStage'
                  ref={register()}
                  className='block w-full px-3 py-2 text-gray-800 border border-gray-200 rounded-md shadow-md appearance-none sm:w-1/2'
                >
                  <option value='' selected>
                    Select
                  </option>
                  <option value='Seed Stage'>Seed Stage</option>
                  <option value='Series A'>Series A</option>
                  <option value='Series B'>Series B</option>
                  <option value='Growth'>Growth</option>
                  <option value='IPO'>IPO</option>
                  <option value='Acquired'>Acquired</option>
                </select>
              </div>
            </div>
            <div className='mt-16 bg-white border border-gray-200 rounded-md shadow-md'>
              <h3 className='px-4 pt-6 pb-6 text-2xl font-bold text-gray-800 md:px-10 bg-blue-50'>
                Review
              </h3>
              <div className='px-4 pt-6 pb-8 md:px-10'>
                <h3 className='mb-2 font-bold sm:text-md'>
                  How did you hear about us?
                </h3>
                <label className='sr-only'>How did you hear about us?</label>
                <select
                  name='siteReferral'
                  ref={register()}
                  className='block w-full px-3 py-2 text-gray-800 border border-gray-200 rounded-md shadow-md appearance-none sm:w-1/2'
                >
                  <option value='' selected disabled>
                    Select
                  </option>
                  <option value='Search'>Search</option>
                  <option value='Twitter'>Twitter</option>
                  <option value='Facebook'>Facebook</option>
                  <option value='LinkedIn'>LinkedIn</option>
                  <option value='Reddit'>Reddit</option>
                  <option value='Indie Hackers'>Indie Hackers</option>
                  <option value='Hacker News'>Hacker News</option>
                  <option value='Product Hunt'>Product Hunt</option>
                  <option value='Advertisment'>Advertisment</option>
                  <option value='Referral'>Referral</option>
                  <option value='Other'>Other</option>
                </select>
                {/* <div className='hidden mt-4'>
                    <label className='sr-only'>URL or email</label>
                    <input
                      type='text'
                      name='siteReferralOther'
                      placeholder='URL'
                      ref={register()}
                      className='block w-1/4 px-3 py-2 text-gray-800 placeholder-gray-500 placeholder-opacity-50 border border-gray-200 rounded-md shadow-md'
                    />
                  </div> */}
              </div>
              <ul className='inline-block p-3 pl-8 mx-4 mb-8 space-y-1 text-sm text-gray-700 list-disc border border-red-100 md:mx-10 bg-red-50'>
                <li>
                  All Basic job posts are{' '}
                  <span className='italic uppercase'>free</span> during our
                  Alpha stage (current). Please don't spam or your account will
                  be deleted.
                </li>
                <li>
                  The option to upgrade your Basic job and to purchase Featured
                  jobs will come in the Beta stage (upcoming).
                </li>
                <li>
                  Automatically posting your job to Google Jobs Network is still
                  under development, and will be done manually by us for the
                  time being.
                </li>
              </ul>
              <div className='px-4 pb-8 md:px-10'>
                <button
                  type='submit'
                  className='w-full px-4 py-2 font-medium leading-6 text-white bg-red-500 rounded-md md:ml-1 sm:w-auto hover:bg-red-600'
                >
                  Submit Basic Job
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateJob
