import Link from 'next/link'

const FeaturedJobsFull = () => {
  return (
    <div className='m-auto max-w-7xl sm:px-6 lg:px-8'>
      <div className='px-10 pt-24 pb-32 text-center'>
        <span className='inline-block px-3 mb-4 text-xs font-medium leading-6 text-red-400 bg-red-100 border border-red-200 rounded-full'>
          Coming Soon
        </span>
        <h2 className='pb-4 text-lg font-medium text-gray-400 uppercase'>
          Featured Jobs
        </h2>
        <h3 className='pb-12 text-5xl font-bold text-center text-gray-800'>
          Drop it{' '}
          <span className='relative z-0 inline-block w-1'>
            <svg
              className='absolute w-16 h-16 -left-8 -bottom-14'
              viewBox='0 0 583 493'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M239.122 378.02C241.554 377.458 243.684 378.149 245.512 380.091C247.527 381.991 248.988 384.905 249.895 388.834C251.622 396.317 251.184 402.527 248.58 407.463C242.263 419.365 235.256 429.554 227.557 438.031C220.046 446.465 210.491 452.021 198.892 454.699C189.351 456.902 181.522 455.852 175.406 451.549C169.246 447.06 164.957 439.577 162.538 429.101C161.329 423.862 160.479 414.206 159.988 400.132C159.699 387.784 159.036 379.366 158 374.876C157.309 371.882 155.934 370.623 153.876 371.098C151.444 371.66 148.718 375.639 145.696 383.037C142.632 390.247 140.042 399.515 137.928 410.841C135.813 422.167 134.67 433.859 134.499 445.919C134.399 461.706 127.334 471.219 113.303 474.458C107.691 475.754 103.496 474.654 100.718 471.157C98.0841 467.43 95.5578 460.328 93.1392 449.852C91.7571 443.865 90.7493 439.073 90.1157 435.475L85.2135 412.961C78.5622 384.151 74.5299 353.455 73.1165 320.874C71.8902 288.25 74.5428 260.05 81.0741 236.276C87.7493 212.271 99.1313 198.411 115.22 194.697C123.826 192.71 131.611 194.854 138.577 201.128C145.687 207.171 150.602 216.086 153.323 227.872C157.686 246.767 156.702 267.684 150.372 290.624C143.999 313.377 131.503 341.189 112.884 374.06C114.568 383.917 116.599 393.991 118.974 404.28C121.476 386.953 125.325 372.468 130.519 360.825C135.857 348.952 141.677 340.022 147.98 334.035C154.47 328.004 160.801 324.277 166.975 322.851C179.135 320.044 186.619 324.72 189.426 336.88C191.111 344.177 192.098 357.841 192.387 377.873C192.59 394.97 193.297 406.137 194.506 411.375C196.233 418.858 199.81 421.974 205.235 420.721C208.977 419.857 212.855 416.597 216.869 410.941C221.028 405.055 226.222 395.974 232.452 383.698C234.093 380.56 236.316 378.668 239.122 378.02ZM115.741 223.839C112.373 224.616 109.755 230.344 107.885 241.022C105.972 251.514 104.951 265.444 104.824 282.814C104.84 299.954 105.856 318.439 107.872 338.27C116.318 321.935 122.426 304.86 126.195 287.043C130.15 269.183 130.617 253.706 127.593 240.61C126.211 234.624 124.498 230.192 122.455 227.314C120.411 224.436 118.173 223.277 115.741 223.839ZM349.392 352.562C351.824 352.001 353.954 352.691 355.782 354.634C357.797 356.533 359.258 359.447 360.165 363.376C361.892 370.859 361.454 377.069 358.85 382.005C353.871 392.022 345.842 402.053 334.762 412.099C323.869 422.102 311.22 428.766 296.815 432.092C277.171 436.627 260.694 434.815 247.381 426.656C234.069 418.498 225.275 405.158 220.999 386.638C218.019 373.729 217.967 361.13 220.844 348.84C223.678 336.362 229.11 325.748 237.139 316.998C245.355 308.204 255.544 302.404 267.704 299.596C278.554 297.091 288.009 298.357 296.069 303.393C304.085 308.242 309.367 316.185 311.916 327.223C314.896 340.131 312.789 352.342 305.594 363.856C298.544 375.139 284.607 386.042 263.784 396.563C270.448 404.089 280.327 406.341 293.423 403.317C301.842 401.374 310.713 396.271 320.038 388.01C329.506 379.518 337.068 369.595 342.722 358.24C344.363 355.103 346.586 353.21 349.392 352.562ZM269.282 328.198C262.36 329.796 257.396 335.179 254.389 344.346C251.569 353.471 251.477 363.739 254.111 375.15L254.241 375.712C264.674 370.544 272.466 364.607 277.617 357.901C282.769 351.194 284.545 344.38 282.947 337.458C282.127 333.903 280.45 331.335 277.917 329.752C275.528 327.939 272.65 327.421 269.282 328.198ZM369.096 415.404C361.987 417.046 356.072 414.47 351.351 407.678C346.817 400.843 342.65 389.194 338.849 372.731C333.235 348.41 331.361 324.507 333.23 301.021C333.661 295.207 335.467 290.652 338.647 287.356C341.971 283.83 347.094 281.268 354.016 279.67C357.758 278.806 360.485 278.669 362.197 279.259C363.91 279.849 365.068 281.453 365.673 284.072C366.364 287.066 366.516 294.124 366.128 305.249C365.985 313.164 366 320.057 366.173 325.929C366.347 331.8 367.009 338.938 368.161 347.342C370.621 329.828 374.519 315.134 379.857 303.261C385.195 291.388 391.016 282.458 397.318 276.471C403.808 270.44 410.14 266.713 416.313 265.287C428.473 262.48 435.957 267.156 438.765 279.316C439.326 281.749 439.845 287.836 440.321 297.579C440.551 305.407 440.883 310.257 441.315 312.128C442.827 318.676 445.921 321.41 450.598 320.33C455.836 319.12 461.621 313.45 467.952 303.318C469.822 300.324 472.067 298.525 474.686 297.921C477.118 297.359 479.248 298.05 481.076 299.992C483.048 301.705 484.444 304.338 485.265 307.893C486.863 314.815 486.244 320.672 483.41 325.464C479.424 332.099 474.33 338.201 468.128 343.771C462.07 349.111 455.112 352.688 447.255 354.502C437.34 356.791 429.18 356.014 422.776 352.172C416.558 348.287 412.456 342.042 410.47 333.436C409.822 330.63 409.455 327.759 409.368 324.824C408.878 320.996 408.482 318.427 408.18 317.117C407.489 314.124 406.114 312.865 404.057 313.34C401.25 313.988 398.243 318.032 395.035 325.473C391.97 332.683 389.38 341.951 387.266 353.277C385.152 364.603 384.009 376.295 383.837 388.355C383.809 397.623 382.759 404.171 380.687 407.999C378.759 411.597 374.895 414.065 369.096 415.404ZM564.509 311.766C566.941 311.204 569.071 311.895 570.899 313.838C572.914 315.737 574.375 318.651 575.282 322.58C576.837 329.315 576.586 335.481 574.528 341.079C571.147 350.333 565.672 358.198 558.103 364.675C550.721 371.108 541.137 375.686 529.351 378.407C511.392 382.553 496.223 380.439 483.846 372.064C471.426 363.503 463.099 350.055 458.867 331.722C455.887 318.813 455.835 306.214 458.712 293.924C461.546 281.446 466.978 270.832 475.007 262.082C483.224 253.288 493.412 247.488 505.572 244.68C516.423 242.175 525.878 243.441 533.937 248.477C541.953 253.326 547.235 261.269 549.784 272.307C552.764 285.216 550.657 297.427 543.462 308.94C536.412 320.223 522.381 331.147 501.372 341.712C507.848 349.281 516.418 351.835 527.082 349.373C534.752 347.602 540.609 344.378 544.652 339.701C548.883 334.98 553.3 327.655 557.904 317.724C559.502 314.4 561.703 312.414 564.509 311.766ZM507.15 273.282C500.229 274.88 495.264 280.263 492.257 289.431C489.437 298.555 489.345 308.823 491.979 320.235L492.109 320.796C502.542 315.628 510.334 309.691 515.486 302.985C520.637 296.278 522.414 289.464 520.816 282.542C519.995 278.987 518.318 276.419 515.785 274.836C513.396 273.023 510.518 272.505 507.15 273.282Z'
                fill='#EF4444'
              />
              <path
                d='M268.607 113.99C245.88 154.977 225.266 199.051 213.588 244.251C209.049 262.784 235.045 267.632 241.05 249.906C253.057 214.457 273.188 181.6 292.508 150.207C310.707 162.212 330.372 175.03 347.762 188.5C360.765 199.538 377.022 221.95 396.518 221.277C406.268 220.942 410.326 213.623 411.457 204.68C413.885 183.059 383.17 166.028 368.705 154.179C344.811 135.189 320.76 119.941 294.431 105.342C285.66 100.479 273.477 105.207 268.607 113.99Z'
                fill='#EF4444'
              />
            </svg>
          </span>
          like it's hot
        </h3>
        <div className='grid grid-cols-3 gap-10 my-16'>
          <div className='bg-white rounded-md shadow-md'>
            <div className='flex p-4'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center w-12 h-12 text-white bg-red-500 rounded-md'>
                  <svg
                    className='w-10 h-10'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
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
                  Open Position
                </p>
                <p className='text-gray-500'>Your Company Name</p>
              </div>
            </div>
            <div className='flex border-t border-gray-200 border-1'>
              <div className='flex-1 p-2 text-sm text-gray-500 border-r border-gray-200 border-1'>
                Full-Time
              </div>
              <div className='flex-1 p-2 text-sm text-gray-500'>Anywhere</div>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md opacity-30'>
            <div className='flex p-4'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center w-12 h-12 text-white bg-gray-900 rounded-md'>
                  <svg
                    className='w-10 h-10'
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
                  Front-End Developer
                </p>
                <p className='text-gray-500'>Vercel</p>
              </div>
            </div>
            <div className='flex border-t border-gray-200 border-1'>
              <div className='flex-1 p-2 text-sm text-gray-500 border-r border-gray-200 border-1'>
                Contract
              </div>
              <div className='flex-1 p-2 text-sm text-gray-500'>
                United States
              </div>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md opacity-25'>
            <div className='flex p-4'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center w-12 h-12 text-white bg-blue-400 rounded-md'>
                  <svg
                    className='w-10 h-10'
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
              <div className='ml-4 text-left'>
                <p className='text-lg font-bold leading-6 text-gray-800'>
                  Support Technician
                </p>
                <p className='text-gray-500'>GraphCMS</p>
              </div>
            </div>
            <div className='flex border-t border-gray-200 border-1'>
              <div className='flex-1 p-2 text-sm text-gray-500 border-r border-gray-200 border-1'>
                Part-Time
              </div>
              <div className='flex-1 p-2 text-sm text-gray-500'>Germany</div>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md opacity-30'>
            <div className='flex p-4'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center w-12 h-12 text-white bg-green-400 rounded-md'>
                  <svg
                    className='w-10 h-10'
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
              <div className='ml-4 text-left'>
                <p className='text-lg font-bold leading-6 text-gray-800'>
                  DX Specialist
                </p>
                <p className='text-gray-500'>Netlify</p>
              </div>
            </div>
            <div className='flex border-t border-gray-200 border-1'>
              <div className='flex-1 p-2 text-sm text-gray-500 border-r border-gray-200 border-1'>
                Full-Time
              </div>
              <div className='flex-1 p-2 text-sm text-gray-500'>
                United States
              </div>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md opacity-25'>
            <div className='flex p-4'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center w-12 h-12 text-white bg-purple-800 rounded-md'>
                  <svg
                    className='w-10 h-10'
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
                  UI Designer
                </p>
                <p className='text-gray-500'>Gatsby</p>
              </div>
            </div>
            <div className='flex border-t border-gray-200 border-1'>
              <div className='flex-1 p-2 text-sm text-gray-500 border-r border-gray-200 border-1'>
                Part-Time
              </div>
              <div className='flex-1 p-2 text-sm text-gray-500'>Anywhere</div>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md opacity-20'>
            <div className='flex p-4'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center w-12 h-12 text-white bg-indigo-400 rounded-md'>
                  <svg
                    className='w-10 h-10'
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
              <div className='flex-1 p-2 text-sm text-gray-500 border-r border-gray-200 border-1'>
                Contract
              </div>
              <div className='flex-1 p-2 text-sm text-gray-500'>
                United States
              </div>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md opacity-25'>
            <div className='flex p-4'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center w-12 h-12 text-white bg-yellow-900 rounded-md'>
                  <svg
                    className='w-10 h-10'
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
                  GraphQL Engineer
                </p>
                <p className='text-gray-500'>Fauna</p>
              </div>
            </div>
            <div className='flex border-t border-gray-200 border-1'>
              <div className='flex-1 p-2 text-sm text-gray-500 border-r border-gray-200 border-1'>
                Contract
              </div>
              <div className='flex-1 p-2 text-sm text-gray-500'>
                United Kingdom
              </div>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md opacity-20'>
            <div className='flex p-4'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center w-12 h-12 text-white bg-blue-900 rounded-md'>
                  <svg
                    className='w-10 h-10'
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
                  Fullstack Developer
                </p>
                <p className='text-gray-500'>Nuxt</p>
              </div>
            </div>
            <div className='flex border-t border-gray-200 border-1'>
              <div className='flex-1 p-2 text-sm text-gray-500 border-r border-gray-200 border-1'>
                Contract
              </div>
              <div className='flex-1 p-2 text-sm text-gray-500'>Canada</div>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md opacity-10'>
            <div className='flex p-4'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center w-12 h-12 text-white bg-pink-900 rounded-md'>
                  <svg
                    className='w-10 h-10'
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
              <div className='flex-1 p-2 text-sm text-gray-500 border-r border-gray-200 border-1'>
                Full-Time
              </div>
              <div className='flex-1 p-2 text-sm text-gray-500'>
                United States
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-xl p-5 mx-auto border border-red-300 border-dashed rounded-md'>
          <p className='text-gray-600 text-md'>
            After the{' '}
            <Link href='/pricing#earlyaccess'>
              <a className='text-red-500'>Early Access</a>
            </Link>{' '}
            promotion ends, your featured jobs can be submitted and displayed
            above.{' '}
            <Link href='/pricing'>
              <a className='text-red-500'>Learn more</a>
            </Link>{' '}
            about our pricing.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeaturedJobsFull
