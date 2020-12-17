import Link from 'next/link'

const FeaturedJobs = () => {
  return (
    <div className='py-20 m-auto max-w-7xl sm:px-6 lg:px-8'>
      <div className='mb-16 text-center'>
        <h3 className='relative inline-block text-4xl font-bold text-center text-gray-800'>
          Featured Jobs
        </h3>
      </div>
      <div className='grid grid-cols-3 gap-10'>
        <div className='bg-white rounded-md shadow-md'>
          <div className='flex p-4'>
            <div className='flex-shrink-0'>
              <div className='flex items-center justify-center w-12 h-12 text-white bg-red-500 rounded-md'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  className='w-9 h-9'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </div>
            </div>
            <div className='relative flex-grow ml-4 text-left'>
              <svg
                className='absolute w-8 h-8 -top-7 -right-8'
                viewBox='0 0 390 406'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M360.189 203L384.81 165.092C389.565 157.732 390.791 148.613 388.088 140.265C385.374 131.928 379.046 125.252 370.86 122.093L328.654 105.897L326.266 60.7589C325.799 51.9984 321.424 43.9218 314.314 38.7871C307.225 33.6198 298.182 31.9589 289.682 34.2278L246.032 45.8975L217.579 10.7796C212.075 3.9623 203.771 0 194.989 0C186.217 0 177.934 3.9623 172.387 10.7688L143.935 45.8867L100.284 34.2169C91.8386 31.9698 82.7741 33.609 75.6637 38.7763C68.575 43.9435 64.1785 52.031 63.7117 60.7697L61.3452 105.886L19.1494 122.082C10.9643 125.241 4.63543 131.917 1.92152 140.255C-0.792379 148.624 0.412594 157.721 5.19992 165.081L29.7987 203L5.18907 240.908C0.42345 248.268 -0.792379 257.387 1.91067 265.702C4.62457 274.072 10.9534 280.748 19.1385 283.885L61.3343 300.071L63.7117 345.209C64.1676 354.002 68.5641 362.067 75.6637 367.202C82.7633 372.369 91.806 374.052 100.295 371.761L143.946 360.092L172.398 395.188C177.924 402.027 186.217 405.989 195 405.989C203.782 405.989 212.065 402.027 217.601 395.199L246.053 360.113L289.704 371.772C298.15 374.063 307.203 372.391 314.335 367.213C321.424 362.035 325.821 353.98 326.298 345.23L328.676 300.093L370.882 283.896C379.067 280.759 385.396 274.083 388.11 265.724C390.813 257.365 389.608 248.279 384.832 240.919L360.189 203ZM101.283 246.607L92.859 212.965C90.5142 203.651 88.2345 192.394 87.073 182.179L86.6387 182.309C83.6752 193.838 80.2014 206.094 75.8917 220.336L67.9345 246.607H49.8165L76.2608 159.415H99.2855L107.699 191.363C110.098 200.557 111.976 211.413 112.877 221.248H113.268C115.46 209.72 118.641 197.952 122.593 184.893L130.322 159.404H148.429L121.995 246.585H101.283V246.607V246.607ZM214.442 175.568H180.42L174.938 193.697H207.017L202.153 209.73H170.064L163.79 230.4H199.624L194.728 246.574H139.104L165.537 159.393H219.359L214.442 175.568ZM291.245 246.607H269.903L273.898 209.101C274.886 200.286 275.939 192.144 277.915 182.19H277.665C273.149 192.003 269.208 200.297 264.454 209.101L244.794 246.607H223.224L228.945 159.415H250.027L245.728 195.379C244.534 205.725 242.927 216.982 241.689 225.786H241.939C246.227 216.352 251.46 205.877 256.92 195.141L275.114 159.436H296.076L291.929 196.183C290.768 206.376 289.356 215.712 287.706 225.395H287.945C292.19 215.679 297.216 205.486 302.188 195.13L320.11 159.426H340.172L291.245 246.607Z'
                  fill='#EF4444'
                />
              </svg>
              <p className='text-lg font-bold leading-6 text-gray-800'>
                Your Open Position
              </p>
              <p className='text-gray-600'>Your Company Name</p>
            </div>
          </div>
          <div className='flex border-t border-gray-200 border-1'>
            <div className='flex-1 px-4 py-2 text-sm text-gray-600 border-r border-gray-200 border-1'>
              Full-Time
            </div>
            <div className='flex-1 px-4 py-2 text-sm text-gray-600'>
              Anywhere
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md shadow-md opacity-25'>
          <div className='flex p-4'>
            <div className='flex-shrink-0'>
              <div className='flex items-center justify-center w-12 h-12 text-white bg-gray-500 rounded-md'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  className='w-9 h-9'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
                  />
                </svg>
              </div>
            </div>
            <div className='relative w-full ml-4 text-left'>
              <svg
                aria-hidden='true'
                focusable='false'
                className='absolute w-8 h-8 -top-7 -right-8'
                viewBox='0 0 390 406'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M360.189 203L384.81 165.092C389.565 157.732 390.791 148.613 388.088 140.265C385.374 131.928 379.046 125.252 370.86 122.093L328.654 105.897L326.266 60.7589C325.799 51.9984 321.424 43.9218 314.314 38.7871C307.225 33.6198 298.182 31.9589 289.682 34.2278L246.032 45.8975L217.579 10.7796C212.075 3.9623 203.771 0 194.989 0C186.217 0 177.934 3.9623 172.387 10.7688L143.935 45.8867L100.284 34.2169C91.8386 31.9698 82.7741 33.609 75.6637 38.7763C68.575 43.9435 64.1785 52.031 63.7117 60.7697L61.3452 105.886L19.1494 122.082C10.9643 125.241 4.63543 131.917 1.92152 140.255C-0.792379 148.624 0.412594 157.721 5.19992 165.081L29.7987 203L5.18907 240.908C0.42345 248.268 -0.792379 257.387 1.91067 265.702C4.62457 274.072 10.9534 280.748 19.1385 283.885L61.3343 300.071L63.7117 345.209C64.1676 354.002 68.5641 362.067 75.6637 367.202C82.7633 372.369 91.806 374.052 100.295 371.761L143.946 360.092L172.398 395.188C177.924 402.027 186.217 405.989 195 405.989C203.782 405.989 212.065 402.027 217.601 395.199L246.053 360.113L289.704 371.772C298.15 374.063 307.203 372.391 314.335 367.213C321.424 362.035 325.821 353.98 326.298 345.23L328.676 300.093L370.882 283.896C379.067 280.759 385.396 274.083 388.11 265.724C390.813 257.365 389.608 248.279 384.832 240.919L360.189 203ZM101.283 246.607L92.859 212.965C90.5142 203.651 88.2345 192.394 87.073 182.179L86.6387 182.309C83.6752 193.838 80.2014 206.094 75.8917 220.336L67.9345 246.607H49.8165L76.2608 159.415H99.2855L107.699 191.363C110.098 200.557 111.976 211.413 112.877 221.248H113.268C115.46 209.72 118.641 197.952 122.593 184.893L130.322 159.404H148.429L121.995 246.585H101.283V246.607V246.607ZM214.442 175.568H180.42L174.938 193.697H207.017L202.153 209.73H170.064L163.79 230.4H199.624L194.728 246.574H139.104L165.537 159.393H219.359L214.442 175.568ZM291.245 246.607H269.903L273.898 209.101C274.886 200.286 275.939 192.144 277.915 182.19H277.665C273.149 192.003 269.208 200.297 264.454 209.101L244.794 246.607H223.224L228.945 159.415H250.027L245.728 195.379C244.534 205.725 242.927 216.982 241.689 225.786H241.939C246.227 216.352 251.46 205.877 256.92 195.141L275.114 159.436H296.076L291.929 196.183C290.768 206.376 289.356 215.712 287.706 225.395H287.945C292.19 215.679 297.216 205.486 302.188 195.13L320.11 159.426H340.172L291.245 246.607Z'
                  fill='#9ca3af'
                />
              </svg>
              <p className='text-lg font-bold leading-6 text-gray-800'>
                Front-End Developer
              </p>
              <p className='text-gray-500'>Vercel</p>
            </div>
          </div>
          <div className='flex border-t border-gray-200 border-1'>
            <div className='flex-1 px-4 py-2 text-sm text-gray-500 border-r border-gray-200 border-1'>
              Contract
            </div>
            <div className='flex-1 px-4 py-2 text-sm text-gray-500'>
              United States
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md shadow-md opacity-20'>
          <div className='flex p-4'>
            <div className='flex-shrink-0'>
              <div className='flex items-center justify-center w-12 h-12 text-white bg-blue-300 rounded-md'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  className='w-9 h-9'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
                  />
                </svg>
              </div>
            </div>
            <div className='relative w-full ml-4 text-left'>
              <svg
                aria-hidden='true'
                focusable='false'
                className='absolute w-8 h-8 -top-7 -right-8'
                viewBox='0 0 390 406'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M360.189 203L384.81 165.092C389.565 157.732 390.791 148.613 388.088 140.265C385.374 131.928 379.046 125.252 370.86 122.093L328.654 105.897L326.266 60.7589C325.799 51.9984 321.424 43.9218 314.314 38.7871C307.225 33.6198 298.182 31.9589 289.682 34.2278L246.032 45.8975L217.579 10.7796C212.075 3.9623 203.771 0 194.989 0C186.217 0 177.934 3.9623 172.387 10.7688L143.935 45.8867L100.284 34.2169C91.8386 31.9698 82.7741 33.609 75.6637 38.7763C68.575 43.9435 64.1785 52.031 63.7117 60.7697L61.3452 105.886L19.1494 122.082C10.9643 125.241 4.63543 131.917 1.92152 140.255C-0.792379 148.624 0.412594 157.721 5.19992 165.081L29.7987 203L5.18907 240.908C0.42345 248.268 -0.792379 257.387 1.91067 265.702C4.62457 274.072 10.9534 280.748 19.1385 283.885L61.3343 300.071L63.7117 345.209C64.1676 354.002 68.5641 362.067 75.6637 367.202C82.7633 372.369 91.806 374.052 100.295 371.761L143.946 360.092L172.398 395.188C177.924 402.027 186.217 405.989 195 405.989C203.782 405.989 212.065 402.027 217.601 395.199L246.053 360.113L289.704 371.772C298.15 374.063 307.203 372.391 314.335 367.213C321.424 362.035 325.821 353.98 326.298 345.23L328.676 300.093L370.882 283.896C379.067 280.759 385.396 274.083 388.11 265.724C390.813 257.365 389.608 248.279 384.832 240.919L360.189 203ZM101.283 246.607L92.859 212.965C90.5142 203.651 88.2345 192.394 87.073 182.179L86.6387 182.309C83.6752 193.838 80.2014 206.094 75.8917 220.336L67.9345 246.607H49.8165L76.2608 159.415H99.2855L107.699 191.363C110.098 200.557 111.976 211.413 112.877 221.248H113.268C115.46 209.72 118.641 197.952 122.593 184.893L130.322 159.404H148.429L121.995 246.585H101.283V246.607V246.607ZM214.442 175.568H180.42L174.938 193.697H207.017L202.153 209.73H170.064L163.79 230.4H199.624L194.728 246.574H139.104L165.537 159.393H219.359L214.442 175.568ZM291.245 246.607H269.903L273.898 209.101C274.886 200.286 275.939 192.144 277.915 182.19H277.665C273.149 192.003 269.208 200.297 264.454 209.101L244.794 246.607H223.224L228.945 159.415H250.027L245.728 195.379C244.534 205.725 242.927 216.982 241.689 225.786H241.939C246.227 216.352 251.46 205.877 256.92 195.141L275.114 159.436H296.076L291.929 196.183C290.768 206.376 289.356 215.712 287.706 225.395H287.945C292.19 215.679 297.216 205.486 302.188 195.13L320.11 159.426H340.172L291.245 246.607Z'
                  fill='#9ca3af'
                />
              </svg>
              <p className='text-lg font-bold leading-6 text-gray-800'>
                GraphQL Technician
              </p>
              <p className='text-gray-500'>GraphCMS</p>
            </div>
          </div>
          <div className='flex border-t border-gray-200 border-1'>
            <div className='flex-1 px-4 py-2 text-sm text-gray-500 border-r border-gray-200 border-1'>
              Part-Time
            </div>
            <div className='flex-1 px-4 py-2 text-sm text-gray-500'>
              Germany
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md shadow-md opacity-25'>
          <div className='flex p-4'>
            <div className='flex-shrink-0'>
              <div className='flex items-center justify-center w-12 h-12 text-white bg-green-300 rounded-md'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  className='w-9 h-9'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5'
                  />
                </svg>
              </div>
            </div>
            <div className='relative w-full ml-4 text-left'>
              <svg
                aria-hidden='true'
                focusable='false'
                className='absolute w-8 h-8 -top-7 -right-8'
                viewBox='0 0 390 406'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M360.189 203L384.81 165.092C389.565 157.732 390.791 148.613 388.088 140.265C385.374 131.928 379.046 125.252 370.86 122.093L328.654 105.897L326.266 60.7589C325.799 51.9984 321.424 43.9218 314.314 38.7871C307.225 33.6198 298.182 31.9589 289.682 34.2278L246.032 45.8975L217.579 10.7796C212.075 3.9623 203.771 0 194.989 0C186.217 0 177.934 3.9623 172.387 10.7688L143.935 45.8867L100.284 34.2169C91.8386 31.9698 82.7741 33.609 75.6637 38.7763C68.575 43.9435 64.1785 52.031 63.7117 60.7697L61.3452 105.886L19.1494 122.082C10.9643 125.241 4.63543 131.917 1.92152 140.255C-0.792379 148.624 0.412594 157.721 5.19992 165.081L29.7987 203L5.18907 240.908C0.42345 248.268 -0.792379 257.387 1.91067 265.702C4.62457 274.072 10.9534 280.748 19.1385 283.885L61.3343 300.071L63.7117 345.209C64.1676 354.002 68.5641 362.067 75.6637 367.202C82.7633 372.369 91.806 374.052 100.295 371.761L143.946 360.092L172.398 395.188C177.924 402.027 186.217 405.989 195 405.989C203.782 405.989 212.065 402.027 217.601 395.199L246.053 360.113L289.704 371.772C298.15 374.063 307.203 372.391 314.335 367.213C321.424 362.035 325.821 353.98 326.298 345.23L328.676 300.093L370.882 283.896C379.067 280.759 385.396 274.083 388.11 265.724C390.813 257.365 389.608 248.279 384.832 240.919L360.189 203ZM101.283 246.607L92.859 212.965C90.5142 203.651 88.2345 192.394 87.073 182.179L86.6387 182.309C83.6752 193.838 80.2014 206.094 75.8917 220.336L67.9345 246.607H49.8165L76.2608 159.415H99.2855L107.699 191.363C110.098 200.557 111.976 211.413 112.877 221.248H113.268C115.46 209.72 118.641 197.952 122.593 184.893L130.322 159.404H148.429L121.995 246.585H101.283V246.607V246.607ZM214.442 175.568H180.42L174.938 193.697H207.017L202.153 209.73H170.064L163.79 230.4H199.624L194.728 246.574H139.104L165.537 159.393H219.359L214.442 175.568ZM291.245 246.607H269.903L273.898 209.101C274.886 200.286 275.939 192.144 277.915 182.19H277.665C273.149 192.003 269.208 200.297 264.454 209.101L244.794 246.607H223.224L228.945 159.415H250.027L245.728 195.379C244.534 205.725 242.927 216.982 241.689 225.786H241.939C246.227 216.352 251.46 205.877 256.92 195.141L275.114 159.436H296.076L291.929 196.183C290.768 206.376 289.356 215.712 287.706 225.395H287.945C292.19 215.679 297.216 205.486 302.188 195.13L320.11 159.426H340.172L291.245 246.607Z'
                  fill='#9ca3af'
                />
              </svg>
              <p className='text-lg font-bold leading-6 text-gray-800'>
                DX Specialist
              </p>
              <p className='text-gray-500'>Netlify</p>
            </div>
          </div>
          <div className='flex border-t border-gray-200 border-1'>
            <div className='flex-1 px-4 py-2 text-sm text-gray-500 border-r border-gray-200 border-1'>
              Full-Time
            </div>
            <div className='flex-1 px-4 py-2 text-sm text-gray-500'>Canada</div>
          </div>
        </div>
        <div className='bg-white rounded-md shadow-md opacity-20'>
          <div className='flex p-4'>
            <div className='flex-shrink-0'>
              <div className='flex items-center justify-center w-12 h-12 text-white bg-purple-300 rounded-md'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  className='w-9 h-9'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
                  />
                </svg>
              </div>
            </div>
            <div className='ml-4 text-left'>
              <p className='text-lg font-bold leading-6 text-gray-800'>
                UI/UX Developer
              </p>
              <p className='text-gray-500'>Gatsby</p>
            </div>
          </div>
          <div className='flex border-t border-gray-200 border-1'>
            <div className='flex-1 px-4 py-2 text-sm text-gray-500 border-r border-gray-200 border-1'>
              Part-Time
            </div>
            <div className='flex-1 px-4 py-2 text-sm text-gray-500'>
              Anywhere
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md shadow-md opacity-10'>
          <div className='flex p-4'>
            <div className='flex-shrink-0'>
              <div className='flex items-center justify-center w-12 h-12 text-white bg-indigo-300 rounded-md'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  className='w-9 h-9'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                  />
                </svg>
              </div>
            </div>
            <div className='ml-4 text-left'>
              <p className='text-lg font-bold leading-6 text-gray-800'>
                React Developer
              </p>
              <p className='text-gray-500'>Facebook</p>
            </div>
          </div>
          <div className='flex border-t border-gray-200 border-1'>
            <div className='flex-1 px-4 py-2 text-sm text-gray-500 border-r border-gray-200 border-1'>
              Contract
            </div>
            <div className='flex-1 px-4 py-2 text-sm text-gray-500'>
              United States
            </div>
          </div>
        </div>

        <div className='bg-white rounded-md shadow-md opacity-20'>
          <div className='flex p-4'>
            <div className='flex-shrink-0'>
              <div className='flex items-center justify-center w-12 h-12 text-white bg-yellow-300 rounded-md'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  className='w-9 h-9'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
              </div>
            </div>
            <div className='ml-4 text-left'>
              <p className='text-lg font-bold leading-6 text-gray-800'>
                Full-Stack Developer
              </p>
              <p className='text-gray-500'>Nuxt</p>
            </div>
          </div>
          <div className='flex border-t border-gray-200 border-1'>
            <div className='flex-1 px-4 py-2 text-sm text-gray-500 border-r border-gray-200 border-1'>
              Contract
            </div>
            <div className='flex-1 px-4 py-2 text-sm text-gray-500'>
              United States
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md shadow-md opacity-10'>
          <div className='flex p-4'>
            <div className='flex-shrink-0'>
              <div className='flex items-center justify-center w-12 h-12 text-white bg-red-300 rounded-md'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  className='w-9 h-9'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
                  />
                </svg>
              </div>
            </div>
            <div className='ml-4 text-left'>
              <p className='text-lg font-bold leading-6 text-gray-800'>
                Serverless Engineer
              </p>
              <p className='text-gray-500'>Fauna</p>
            </div>
          </div>
          <div className='flex border-t border-gray-200 border-1'>
            <div className='flex-1 px-4 py-2 text-sm text-gray-500 border-r border-gray-200 border-1'>
              Contract
            </div>
            <div className='flex-1 px-4 py-2 text-sm text-gray-500'>
              United Kingdom
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md shadow-md opacity-5'>
          <div className='flex p-4'>
            <div className='flex-shrink-0'>
              <div className='flex items-center justify-center w-12 h-12 text-white bg-pink-300 rounded-md'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  className='w-9 h-9'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
                  />
                </svg>
              </div>
            </div>
            <div className='ml-4 text-left'>
              <p className='text-lg font-bold leading-6 text-gray-800'>
                Back-End Developer
              </p>
              <p className='text-gray-500'>Google</p>
            </div>
          </div>
          <div className='flex border-t border-gray-200 border-1'>
            <div className='flex-1 px-4 py-2 text-sm text-gray-500 border-r border-gray-200 border-1'>
              Full-Time
            </div>
            <div className='flex-1 px-4 py-2 text-sm text-gray-500'>
              United States
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedJobs
