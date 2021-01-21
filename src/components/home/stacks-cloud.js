import { useState } from 'react'
import Ticker from 'react-ticker'
import PageVisibility from 'react-page-visibility'

const StacksCloud = () => {
  const [pageIsVisible, setPageIsVisible] = useState(true)

  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible)
  }

  return (
    <>
      {/* <div className='w-full pt-20 m-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='text-center '>
          <h3 className='text-5xl font-bold text-center text-gray-800'>
            Popular Tags
          </h3>
          <h4 className='max-w-3xl mx-auto mt-8 text-xl text-gray-500'>
            We cater to jobs that contain at least three tags to form a stack.
          </h4>
        </div>
      </div> */}
      <div className='py-4 mx-auto text-2xl font-bold bg-gray-800 lg:py-8 lg:text-3xl'>
        <PageVisibility onChange={handleVisibilityChange}>
          {pageIsVisible && (
            <>
              <Ticker speed={2}>
                {() => (
                  <>
                    <span className='mx-4 text-gray-300 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      React.js
                    </span>
                    <span className='mx-4 text-gray-600 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      Vue.js
                    </span>
                    <span className='mx-4 text-gray-700 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      Angular
                    </span>
                    <span className='mx-4 text-gray-500 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      Svelte
                    </span>
                    <span className='mx-4 text-gray-300 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      GraphCMS
                    </span>
                    <span className='mx-4 text-gray-400 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      Strapi
                    </span>
                    <span className='mx-4 text-gray-500 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      TypeScript
                    </span>
                    <span className='mx-4 text-gray-700 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      Hugo
                    </span>
                    <span className='mx-4 text-gray-300 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      Serverless
                    </span>
                    <span className='mx-4 text-gray-500 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      Node.js
                    </span>
                    <span className='mx-4 text-gray-700 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      Cloudflare
                    </span>
                  </>
                )}
              </Ticker>
              <div className='py-3'>
                <Ticker speed={3} direction='toRight'>
                  {() => (
                    <>
                      <span className='mx-4 text-gray-600 md:mx-6 lg:mx-10 whitespace-nowrap'>
                        Contentful
                      </span>
                      <span className='mx-4 text-gray-700 md:mx-6 lg:mx-10 whitespace-nowrap'>
                        Sanity
                      </span>
                      <span className='mx-4 text-gray-400 md:mx-6 lg:mx-10 whitespace-nowrap'>
                        Vercel
                      </span>
                      <span className='mx-4 text-gray-500 md:mx-6 lg:mx-10 whitespace-nowrap'>
                        Netlify CMS
                      </span>
                      <span className='mx-4 text-gray-300 md:mx-6 lg:mx-10 whitespace-nowrap'>
                        Next.js
                      </span>
                      <span className='mx-4 text-gray-600 md:mx-6 lg:mx-10 whitespace-nowrap'>
                        Gatbsy
                      </span>
                      <span className='mx-4 text-gray-500 md:mx-6 lg:mx-10 whitespace-nowrap'>
                        Nuxt.js
                      </span>
                      <span className='mx-4 text-gray-400 md:mx-6 lg:mx-10 whitespace-nowrap'>
                        11ty
                      </span>
                      <span className='mx-4 text-gray-700 md:mx-6 lg:mx-10 whitespace-nowrap'>
                        Gridsome
                      </span>
                      <span className='mx-4 text-gray-300 md:mx-6 lg:mx-10 whitespace-nowrap'>
                        Stripe
                      </span>
                      <span className='mx-4 text-gray-600 md:mx-6 lg:mx-10 whitespace-nowrap'>
                        BigCommerce
                      </span>
                      <span className='mx-4 text-gray-500 md:mx-6 lg:mx-10 whitespace-nowrap'>
                        Forestry
                      </span>
                      <span className='mx-4 text-gray-300 md:mx-6 lg:mx-10 whitespace-nowrap'>
                        Supabase
                      </span>
                    </>
                  )}
                </Ticker>
              </div>
              <Ticker speed={4}>
                {() => (
                  <>
                    <span className='mx-4 text-gray-700 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      Jekyll
                    </span>
                    <span className='mx-4 text-gray-300 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      Netlify
                    </span>
                    <span className='mx-4 text-gray-400 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      Google Firebase
                    </span>
                    <span className='mx-4 text-gray-600 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      Render
                    </span>
                    <span className='mx-4 text-gray-500 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      Dato CMS
                    </span>
                    <span className='mx-4 text-gray-700 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      AWS Amplify
                    </span>
                    <span className='mx-4 text-gray-500 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      Fauna
                    </span>
                    <span className='mx-4 text-gray-400 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      Hasura
                    </span>
                    <span className='mx-4 text-gray-300 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      Agility CMS
                    </span>
                    <span className='mx-4 text-gray-600 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      Heroku
                    </span>
                    <span className='mx-4 text-gray-500 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      Primsic CMS
                    </span>
                    <span className='mx-4 text-gray-700 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      SnipCart
                    </span>
                    <span className='mx-4 text-gray-400 md:mx-6 lg:mx-10 whitespace-nowrap'>
                      Nhost
                    </span>
                  </>
                )}
              </Ticker>
            </>
          )}
        </PageVisibility>
      </div>
    </>
  )
}

export default StacksCloud
