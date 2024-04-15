import Link from "next/link";

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container max-w-4xl px-4 py-10 mx-auto md:py-16 lg:py-20 sm:px-6 lg:px-8">
        <h2 className="relative block text-4xl font-bold text-center text-gray-800">
          Pricing
        </h2>
        <p className="px-6 mx-auto mt-2 text-lg text-center text-gray-500 max-w-prose">
          We offer multiple options for the job posting you'd like to list.
        </p>
        <div className="w-24 h-1 mx-auto mt-4 bg-red-500 rounded"></div>
        <div className="my-6">
          <div className="relative justify-between gap-5 md:grid lg:gap-10 md:grid-cols-2">
            <div className="max-w-sm mx-auto my-8">
              <div className="mb-4 bg-white rounded-md shadow-md">
                <div className="px-4 py-8 text-gray-800 sm:px-8">
                  <div className="block pb-4 mx-auto text-center">
                    <p className="inline px-4 py-1 text-base font-medium text-red-400 uppercase border border-red-200 rounded-full bg-red-50">
                      Basic
                    </p>
                    <p className="mt-3 -ml-4 text-5xl font-bold uppercase">
                      <span className="inline-block text-3xl align-top">$</span>
                      0
                    </p>
                  </div>
                  <ul>
                    <li className="flex p-2">
                      <div className="text-red-400 rounded-full fill-current">
                        <svg
                          className="w-5 h-5 align-middle"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="ml-3 leading-6 text-gray-700 text-md">
                        List your job for 30 days
                      </span>
                    </li>
                    <li className="flex p-2">
                      <div className="text-red-400 rounded-full fill-current">
                        <svg
                          className="w-5 h-5 align-middle"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="ml-3 leading-6 text-gray-700 text-md">
                        Share your listing to Google Jobs Network
                      </span>
                    </li>
                    {/* <li className='flex p-2'>
                      <div className='text-red-400 rounded-full fill-current'>
                        <svg
                          className='w-5 h-5 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span className='ml-3 leading-6 text-gray-700 text-md'>
                        Additional jobs will be $99
                      </span>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="relative w-full">
                <svg
                  className="absolute inset-x-0 z-20 mx-auto -top-8"
                  width="9"
                  height="49"
                  viewBox="0 0 9 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="4.5"
                    y1="7"
                    x2="4.5"
                    y2="42"
                    stroke="#f9b9b9"
                    strokeWidth="3"
                  />
                  <circle cx="4.5" cy="4.5" r="4.5" fill="#f9b9b9" />
                  <circle cx="4.5" cy="44.5" r="4.5" fill="#f9b9b9" />
                </svg>
              </div>
              <div className="relative bg-white rounded-md shadow-md">
                <div className="absolute z-10 grid w-full h-full bg-white rounded-md bg-opacity-80">
                  <div className="absolute px-4 py-1 text-base font-medium text-center text-red-400 uppercase border border-red-200 rounded-full bg-red-50 place-self-center">
                    Coming Soon
                  </div>
                </div>
                <div className="px-4 py-8 text-gray-800 sm:px-8">
                  <div className="block pb-4 mx-auto text-center">
                    <p className="relative inline px-2 py-1 mr-2 text-xs font-medium text-red-400 uppercase border border-red-200 rounded-full -top-1 bg-red-50">
                      Add Upgrade
                    </p>
                    <p className="inline text-2xl font-bold uppercase">
                      <span className="inline-block text-lg align-top">$</span>
                      49
                    </p>
                  </div>
                  <ul>
                    <li className="flex p-2">
                      <div className="text-red-400 rounded-full fill-current">
                        <svg
                          className="w-5 h-5 align-middle"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="ml-3 leading-6 text-gray-700 text-md">
                        Your job gets highlighted for better visibility
                      </span>
                    </li>
                    <li className="flex p-2">
                      <div className="text-red-400 rounded-full fill-current">
                        <svg
                          className="w-5 h-5 align-middle"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="ml-3 leading-6 text-gray-700 text-md">
                        Include your company logo to stand out more
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="max-w-sm mx-auto my-8 bg-white rounded-md shadow-md">
              <div className="relative text-gray-800">
                <div className="absolute z-10 grid w-full h-full bg-white rounded-md bg-opacity-80">
                  <div className="absolute px-4 py-1 text-base font-medium text-center text-red-400 uppercase border border-red-200 rounded-full bg-red-50 place-self-center">
                    Coming Soon
                  </div>
                </div>
                <div className="px-4 py-8 text-gray-800 sm:px-8">
                  <div className="block max-w-sm pb-4 mx-auto text-center">
                    <p className="inline px-4 py-1 text-base font-medium text-red-400 uppercase border border-red-200 rounded-full bg-red-50">
                      Featured
                    </p>
                    <p className="mt-3 -ml-4 text-5xl font-bold uppercase">
                      <span className="inline-block text-3xl align-top">$</span>
                      299
                    </p>
                  </div>
                  <ul>
                    <li className="flex p-2">
                      <div className="text-red-500 rounded-full fill-current">
                        <svg
                          className="w-5 h-5 align-middle"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="ml-3 leading-6 text-gray-700 text-md">
                        List your job for 30 days
                      </span>
                    </li>
                    <li className="flex p-2">
                      <div className="text-red-500 rounded-full fill-current">
                        <svg
                          className="w-5 h-5 align-middle"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="ml-3 leading-6 text-gray-700 text-md">
                        Share your listing to Google Jobs Network
                      </span>
                    </li>
                    <li className="flex p-2">
                      <div className="text-red-500 rounded-full fill-current">
                        <svg
                          className="w-5 h-5 align-middle"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="ml-3 leading-6 text-gray-700 text-md">
                        Your job gets pinned at the top for the best visibility
                      </span>
                    </li>
                    <li className="flex p-2">
                      <div className="text-red-500 rounded-full fill-current">
                        <svg
                          className="w-5 h-5 align-middle"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="ml-3 leading-6 text-gray-700 text-md">
                        Include your company logo to stand out more
                      </span>
                    </li>
                    <li className="flex p-2">
                      <div className="text-red-500 rounded-full fill-current">
                        <svg
                          className="w-5 h-5 align-middle"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="ml-3 leading-6 text-gray-700 text-md">
                        Share your job across our social media channels
                      </span>
                    </li>
                    <li className="flex p-2">
                      <div className="text-red-500 rounded-full fill-current">
                        <svg
                          className="w-5 h-5 align-middle"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="ml-3 leading-6 text-gray-700 text-md">
                        Feature your job in our weekly newsletter
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="inline-block px-8 py-4 border border-gray-400 border-dashed rounded-md">
            Looking to bulk purchase jobs? Are you a charity or non-profit?{" "}
            <Link href="/contact">
              <a className="border-b border-red-500 hover:text-red-500">
                Get in touch with us.
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
