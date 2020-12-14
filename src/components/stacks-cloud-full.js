import { useState } from 'react'

import Ticker from 'react-ticker'
import PageVisibility from 'react-page-visibility'

const StacksCloudFull = () => {
  const [pageIsVisible, setPageIsVisible] = useState(true)

  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible)
  }

  return (
    <>
      <div className='w-full pt-20 m-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='text-center '>
          {/* <h2 className='pb-4 text-lg font-medium text-gray-400 uppercase'>
            Popular Tags
          </h2> */}
          <h3 className='text-5xl font-bold text-center text-gray-800'>
            Popular Tags
            {/* Stacks On Stacks On{' '}
            <span className='relative z-0'>
              Stacks
              <svg
                className='absolute w-14 h-14 -left-8 -bottom-11'
                viewBox='0 0 530 438'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M186.584 161.412C187.879 167.025 187.634 171.515 185.849 174.884C184.252 178.209 180.834 180.476 175.596 181.687C176.128 185.702 176.862 192.725 177.796 202.756C178.947 216.284 179.601 223.819 179.759 225.358C191.723 353.244 171.328 423.281 118.573 435.47C103.047 439.058 89.8727 437.471 79.052 430.709C68.4183 423.904 61.5694 413.86 58.5052 400.577C53.0243 376.817 58.2925 353.529 74.31 330.714C90.2843 307.711 113.353 286.419 143.515 266.839C142.509 253.08 141.359 240.832 140.064 230.096L135.34 186.554C123.857 188.025 113.251 189.884 103.524 192.132C77.5206 198.14 58.9284 205.096 47.747 213C36.5655 220.904 32.2911 230.562 34.9236 241.975C36.2183 247.587 39.4917 253.235 44.7436 258.919C46.2976 260.531 47.312 262.365 47.7867 264.423C48.693 268.352 47.4552 272.382 44.0733 276.514C40.8353 280.415 36.8779 282.906 32.2011 283.986C26.2148 285.369 21.049 283.903 16.7035 279.586C9.48029 272.19 4.55238 262.786 1.9198 251.374C-8.43791 206.473 25.6682 174.946 104.238 156.792C127.061 151.519 147.97 149.052 166.964 149.393C178.232 149.548 184.771 153.555 186.584 161.412ZM115.295 404.6C124.461 402.482 132.031 393.442 138.004 377.479C143.977 361.517 146.432 335.431 145.369 299.22C104.342 329.785 87.1726 359.567 93.862 388.565C95.3293 394.926 97.9696 399.538 101.783 402.401C105.553 405.077 110.057 405.81 115.295 404.6ZM259.776 372.695C248.177 375.375 237.946 373.305 229.083 366.485C220.219 359.666 214.212 349.427 211.061 335.77C207.609 320.803 207.811 305.878 211.669 290.996C215.483 275.926 222.168 263.051 231.724 252.369C241.423 241.458 252.727 234.511 265.635 231.528C269.75 230.577 272.657 230.792 274.355 232.174C276.197 233.324 278.06 235.85 279.945 239.75C283.701 238.094 287.73 236.768 292.033 235.774C301.199 233.656 306.538 235.871 308.048 242.419C308.955 246.348 309.709 256.027 310.313 271.455C310.973 293.964 312.274 309.428 314.216 317.847C314.864 320.653 316.036 322.747 317.734 324.128C319.619 325.466 321.684 325.876 323.929 325.357C327.483 324.536 331.268 321.297 335.283 315.64C339.255 309.796 344.357 300.734 350.589 288.456C352.23 285.318 354.453 283.425 357.259 282.777C359.691 282.215 361.821 282.905 363.648 284.848C365.662 286.747 367.123 289.661 368.029 293.59C369.755 301.073 369.316 307.284 366.711 312.221C361.242 323.534 354.96 333.459 347.866 341.996C340.771 350.532 333.201 355.73 325.157 357.588C318.984 359.015 312.804 358.275 306.616 355.369C300.573 352.233 295.4 347.32 291.098 340.628C284.995 358.591 274.554 369.28 259.776 372.695ZM263.339 342.017C267.455 341.066 270.822 337.726 273.442 331.998C276.061 326.269 277.285 319.188 277.113 310.754L275.584 256.719C267.77 258.722 261.165 263.401 255.768 270.756C250.515 277.882 247.003 286.576 245.233 296.838C243.462 307.1 243.785 317.469 246.202 327.946C247.54 333.746 249.655 337.789 252.547 340.077C255.626 342.321 259.224 342.968 263.339 342.017ZM376.993 345.611C369.884 347.254 363.97 344.679 359.251 337.887C354.718 331.052 350.553 319.403 346.755 302.939C341.145 278.618 339.276 254.713 341.148 231.225C341.58 225.41 343.386 220.854 346.567 217.558C349.891 214.031 355.014 211.468 361.936 209.869C365.677 209.004 368.404 208.867 370.116 209.456C371.829 210.046 372.987 211.65 373.591 214.27C374.282 217.263 374.432 224.322 374.043 235.448C373.899 243.363 373.913 250.257 374.085 256.129C374.214 261.814 374.854 268.859 376.005 277.263C377.689 261.504 380.827 247.773 385.418 236.071C390.197 224.325 395.673 215.178 401.846 208.628C408.164 201.848 414.596 197.701 421.144 196.188C427.691 194.675 432.62 195.113 435.929 197.501C439.426 199.846 441.886 204.106 443.311 210.28C444.692 216.267 445.418 227.528 445.488 244.065C445.545 251.146 445.682 256.435 445.897 259.932C448.446 242.79 452.317 228.397 457.513 216.753C462.896 205.065 468.76 196.32 475.106 190.519C481.41 184.53 487.648 180.822 493.821 179.396C499.807 178.013 504.664 178.566 508.391 181.054C512.262 183.313 514.887 187.436 516.268 193.423C517.391 198.287 518.476 207.692 519.526 221.637C520.288 233.482 521.294 244.679 522.545 255.228C523.754 265.59 525.803 277.038 528.695 289.573C530.335 296.682 530.025 302.173 527.766 306.045C525.65 309.687 521.319 312.264 514.771 313.777C508.598 315.203 503.741 314.651 500.201 312.118C496.662 309.586 494.158 305.14 492.691 298.779C490.964 291.295 489.426 278.645 488.074 260.828C486.866 245.342 485.788 235.542 484.838 231.426C484.148 228.432 482.774 227.173 480.716 227.649C478.284 228.211 475.557 232.191 472.534 239.589C469.469 246.8 466.878 256.07 464.762 267.397C462.646 278.724 461.501 290.418 461.328 302.478C461.341 311.934 460.291 318.483 458.175 322.124C456.247 325.723 452.289 328.214 446.303 329.597C440.13 331.023 434.784 329.204 430.266 324.139C425.892 318.844 422.733 311.987 420.791 303.568C419.151 296.459 417.713 285.953 416.476 272.05C415.211 259.731 414.147 251.7 413.284 247.959C412.593 244.965 411.219 243.706 409.161 244.182C406.355 244.83 403.577 249.019 400.829 256.748C398.08 264.478 395.856 274.056 394.157 285.484C392.645 296.868 391.839 307.893 391.737 318.558C391.708 327.826 390.657 334.375 388.584 338.204C386.656 341.802 382.792 344.271 376.993 345.611Z'
                  fill='#EF4444'
                />
                <path
                  d='M282.896 17.4377C259.637 58.1258 238.451 101.927 226.186 146.972C221.405 165.444 247.336 170.63 253.571 152.983C266.038 117.694 286.596 85.1017 306.323 53.9625C324.364 66.2039 343.86 79.2766 361.074 92.9726C373.931 104.179 389.895 126.8 409.398 126.381C419.152 126.173 423.306 118.907 424.553 109.98C427.262 88.3924 396.771 70.963 382.462 58.9271C358.817 39.6268 334.967 24.0678 308.83 9.12697C300.123 4.14985 287.88 8.71886 282.896 17.4377Z'
                  fill='#EF4444'
                />
              </svg>
              <span className='absolute font-normal text-red-500 right-1.5 top-1 transform rotate-12'>
                /
              </span>
            </span> */}
          </h3>
          <h4 className='max-w-3xl mx-auto mt-8 text-xl text-gray-500'>
            We cater to jobs that contain at least three tags to form a stack.
          </h4>
        </div>
      </div>
      <div className='py-20 mx-auto text-4xl font-bold'>
        <PageVisibility onChange={handleVisibilityChange}>
          {pageIsVisible && (
            <>
              <Ticker speed={2}>
                {() => (
                  <>
                    <span className='mx-10 text-gray-800 whitespace-nowrap'>
                      React.js
                    </span>
                    <span className='mx-10 text-gray-500 whitespace-nowrap'>
                      Vue.js
                    </span>
                    <span className='mx-10 text-gray-300 whitespace-nowrap'>
                      Angular
                    </span>
                    <span className='mx-10 text-gray-400 whitespace-nowrap'>
                      Svelte
                    </span>
                    <span className='mx-10 text-gray-800 whitespace-nowrap'>
                      GraphCMS
                    </span>
                    <span className='mx-10 text-gray-500 whitespace-nowrap'>
                      Strapi
                    </span>
                    <span className='mx-10 text-gray-400 whitespace-nowrap'>
                      Typescript
                    </span>
                    <span className='mx-10 text-gray-300 whitespace-nowrap'>
                      Hugo
                    </span>
                    <span className='mx-10 text-gray-400 whitespace-nowrap'>
                      Serverless
                    </span>
                    <span className='mx-10 text-gray-500 whitespace-nowrap'>
                      CSS
                    </span>
                  </>
                )}
              </Ticker>
              <div className='py-6'>
                <Ticker speed={3} direction='toRight'>
                  {() => (
                    <>
                      <span className='mx-10 text-gray-800 whitespace-nowrap'>
                        Contentful
                      </span>
                      <span className='mx-10 text-gray-400 whitespace-nowrap'>
                        Sanity
                      </span>
                      <span className='mx-10 text-gray-300 whitespace-nowrap'>
                        Netlify CMS
                      </span>
                      <span className='mx-10 text-gray-800 whitespace-nowrap'>
                        Next.js
                      </span>
                      <span className='mx-10 text-gray-300 whitespace-nowrap'>
                        Gatbsy
                      </span>
                      <span className='mx-10 text-gray-500 whitespace-nowrap'>
                        Nuxt.js
                      </span>
                      <span className='mx-10 text-gray-800 whitespace-nowrap'>
                        Vercel
                      </span>
                      <span className='mx-10 text-gray-400 whitespace-nowrap'>
                        11ty
                      </span>
                      <span className='mx-10 text-gray-300 whitespace-nowrap'>
                        Gridsome
                      </span>
                      <span className='mx-10 text-gray-500 whitespace-nowrap'>
                        Stripe
                      </span>
                    </>
                  )}
                </Ticker>
              </div>
              <Ticker speed={4}>
                {() => (
                  <>
                    <span className='mx-10 text-gray-300 whitespace-nowrap'>
                      Jekyll
                    </span>
                    <span className='mx-10 text-gray-800 whitespace-nowrap'>
                      Netlify
                    </span>
                    <span className='mx-10 text-gray-400 whitespace-nowrap'>
                      Google Firebase
                    </span>
                    <span className='mx-10 text-gray-500 whitespace-nowrap'>
                      Render
                    </span>
                    <span className='mx-10 text-gray-300 whitespace-nowrap'>
                      AWS Amplify
                    </span>
                    <span className='mx-10 text-gray-800 whitespace-nowrap'>
                      Fauna
                    </span>
                    <span className='mx-10 text-gray-400 whitespace-nowrap'>
                      Hasura
                    </span>
                    <span className='mx-10 text-gray-500 whitespace-nowrap'>
                      Heroku
                    </span>
                    <span className='mx-10 text-gray-800 whitespace-nowrap'>
                      Express
                    </span>
                    <span className='mx-10 text-gray-400 whitespace-nowrap'>
                      Primsic CMS
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

export default StacksCloudFull
