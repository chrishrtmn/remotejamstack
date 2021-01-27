import Link from 'next/link'
import { useAuth } from '../libraries/firebase/auth'
import { Menu, Transition } from '@headlessui/react'
import { toast } from 'react-toastify'
import ActiveLink from '../utilities/active-link'
import HeaderBanner from './header-banner'

const Header = () => {
  const auth = useAuth()

  const userToast = (message) => {
    toast(message, {
      bodyClassName: 'text-center text-gray-500 text-md font-medium',
    })
  }

  return (
    <>
      <HeaderBanner />

      <header className='relative top-0 z-20 px-5 bg-white shadow-md sm:px-6 lg:px-8 lg:sticky'>
        <div className='mx-auto max-w-7xl'>
          <div className='flex justify-between py-3'>
            <Link href='/'>
              <a className='pt-1'>
                <svg
                  className='h-8 header_nav:h-10'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 2270 381'
                >
                  <path
                    fill='#EF4444'
                    fillRule='evenodd'
                    d='M1001.83 380.376c341.69-36.294 627.67-42.409 1245.05-40.616 30.46-.987 30.66-50.031 1.1-54.997-417.53 12.71-833.81 16.298-1251.491 40.261-34.323 1.08-28.713 56.407 5.341 55.352z'
                    clipRule='evenodd'
                  />
                  <path
                    fill='#1F2937'
                    d='M267.528 206.776c2.496 0 4.416 1.152 5.76 3.456 1.536 2.304 2.304 5.472 2.304 9.504 0 7.488-1.824 13.44-5.472 17.856-9.216 11.136-18.528 19.776-27.936 25.92-9.408 5.952-20.544 8.928-33.408 8.928-12.48 0-23.136-3.36-31.968-10.08-8.64-6.72-16.896-18.24-24.768-34.56-6.336-13.056-11.328-22.656-14.976-28.8-3.648-6.336-7.296-10.848-10.944-13.536-3.456-2.688-7.776-4.32-12.96-4.896-.768 4.032-2.976 16.704-6.624 38.016-1.536 9.6-2.496 15.456-2.88 17.568-1.92 11.712-5.76 20.736-11.52 27.072-5.76 6.144-14.496 9.216-26.208 9.216-12.864 0-24.288-3.744-34.272-11.232-9.792-7.68-17.376-18.24-22.752-31.68C3.528 215.896.84 200.44.84 183.16c0-32.256 5.568-60.096 16.704-83.52 11.328-23.424 27.072-41.28 47.232-53.568 20.352-12.48 43.776-18.72 70.272-18.72 18.432 0 33.888 2.784 46.368 8.352 12.48 5.568 21.696 13.248 27.648 23.04 6.144 9.792 9.216 20.832 9.216 33.12 0 10.752-2.592 21.312-7.776 31.68-4.992 10.176-12.576 19.2-22.752 27.072-10.176 7.872-22.56 13.728-37.152 17.568 9.216 2.496 16.32 6.528 21.312 12.096 4.992 5.568 9.984 13.728 14.976 24.48 5.376 11.52 10.656 19.968 15.84 25.344 5.376 5.376 11.52 8.064 18.432 8.064 6.144 0 12-2.016 17.568-6.048 5.568-4.224 12.576-11.328 21.024-21.312 2.304-2.688 4.896-4.032 7.776-4.032zM73.416 180.28c-6.528 0-11.04-1.536-13.536-4.608-2.304-3.072-3.456-6.528-3.456-10.368 0-4.608 1.44-8.256 4.32-10.944 3.072-2.688 6.528-4.032 10.368-4.032h7.2c3.072-18.816 5.952-35.04 8.64-48.672 2.496-12.48 10.56-18.72 24.192-18.72 10.944 0 16.416 4.896 16.416 14.688 0 2.112-.096 3.744-.288 4.896l-8.64 47.808c10.368-.576 19.776-3.072 28.224-7.488 8.64-4.416 15.456-10.56 20.448-18.432 5.184-7.872 7.776-16.8 7.776-26.784 0-12.096-4.128-21.6-12.384-28.512-8.256-6.912-20.352-10.368-36.288-10.368-18.816 0-35.328 4.704-49.536 14.112-14.016 9.216-24.96 23.04-32.832 41.472-7.872 18.24-11.808 40.512-11.808 66.816 0 12.288 1.248 22.848 3.744 31.68 2.496 8.832 5.568 15.456 9.216 19.872 3.648 4.416 7.104 6.624 10.368 6.624 2.496 0 4.512-1.248 6.048-3.744 1.728-2.496 3.072-6.528 4.032-12.096l7.776-43.2z'
                  />
                  <path
                    fill='#1F2937'
                    d='M375.053 206.776c2.496 0 4.416 1.152 5.76 3.456 1.536 2.304 2.304 5.472 2.304 9.504 0 7.68-1.824 13.632-5.472 17.856-7.104 8.64-17.184 16.608-30.24 23.904-12.864 7.296-26.688 10.944-41.472 10.944-20.16 0-35.808-5.472-46.944-16.416-11.136-10.944-16.704-25.92-16.704-44.928 0-13.248 2.784-25.536 8.352-36.864 5.568-11.52 13.248-20.64 23.04-27.36 9.984-6.72 21.216-10.08 33.696-10.08 11.136 0 20.064 3.36 26.784 10.08 6.72 6.528 10.08 15.456 10.08 26.784 0 13.248-4.8 24.672-14.4 34.272-9.408 9.408-25.44 16.896-48.096 22.464 4.8 8.832 13.92 13.248 27.36 13.248 8.64 0 18.432-2.976 29.376-8.928 11.136-6.144 20.736-14.112 28.8-23.904 2.304-2.688 4.896-4.032 7.776-4.032zm-72.576-41.76c-7.104 0-13.152 4.128-18.144 12.384-4.8 8.256-7.2 18.24-7.2 29.952v.576c11.328-2.688 20.256-6.72 26.784-12.096 6.528-5.376 9.792-11.616 9.792-18.72 0-3.648-1.056-6.528-3.168-8.64-1.92-2.304-4.608-3.456-8.064-3.456z'
                  />
                  <path
                    fill='#1F2937'
                    d='M380.116 272.44c-7.296 0-12.48-3.84-15.552-11.52-2.88-7.68-4.32-19.968-4.32-36.864 0-24.96 3.552-48.672 10.656-71.136 1.728-5.568 4.512-9.6 8.352-12.096 4.032-2.688 9.6-4.032 16.704-4.032 3.84 0 6.528.48 8.064 1.44 1.536.96 2.304 2.784 2.304 5.472 0 3.072-1.44 9.984-4.32 20.736-1.92 7.68-3.456 14.4-4.608 20.16-1.152 5.568-2.112 12.576-2.88 21.024 5.184-14.976 11.328-27.648 18.432-38.016 7.296-10.368 14.688-18.048 22.176-23.04 7.68-5.184 14.88-7.776 21.6-7.776 6.72 0 11.424 1.536 14.112 4.608 2.88 3.072 4.32 7.776 4.32 14.112 0 6.144-1.824 17.28-5.472 33.408-1.536 6.912-2.592 12.096-3.168 15.552 9.6-23.616 20.256-40.8 31.968-51.552 11.712-10.752 22.656-16.128 32.832-16.128 12.48 0 18.72 6.24 18.72 18.72 0 7.488-2.112 21.024-6.336 40.608-3.648 16.704-5.472 27.744-5.472 33.12 0 7.68 2.784 11.52 8.352 11.52 3.84 0 8.352-2.304 13.536-6.912 5.376-4.8 12.48-12.48 21.312-23.04 2.304-2.688 4.896-4.032 7.776-4.032 2.496 0 4.416 1.152 5.76 3.456 1.536 2.304 2.304 5.472 2.304 9.504 0 7.68-1.824 13.632-5.472 17.856-8.256 10.176-17.184 18.528-26.784 25.056-9.408 6.528-20.16 9.792-32.256 9.792-9.792 0-17.184-2.784-22.176-8.352-4.992-5.76-7.488-14.016-7.488-24.768 0-5.376 1.344-14.976 4.032-28.8 2.496-12.096 3.744-20.448 3.744-25.056 0-3.072-1.056-4.608-3.168-4.608-2.496 0-6.048 3.264-10.656 9.792-4.608 6.336-9.216 14.784-13.824 25.344-4.608 10.56-8.352 21.696-11.232 33.408-2.112 9.216-4.608 15.36-7.488 18.432-2.688 3.072-7.104 4.608-13.248 4.608-6.336 0-11.136-2.976-14.4-8.928-3.072-6.144-4.608-13.536-4.608-22.176 0-7.296.96-17.856 2.88-31.68 1.536-12.288 2.304-20.352 2.304-24.192 0-3.072-1.056-4.608-3.168-4.608-2.88 0-6.528 3.456-10.944 10.368-4.416 6.912-8.736 15.744-12.96 26.496-4.032 10.752-7.296 21.312-9.792 31.68-2.112 9.024-4.608 15.168-7.488 18.432-2.688 3.072-7.008 4.608-12.96 4.608z'
                  />
                  <path
                    fill='#1F2937'
                    d='M720.86 182.584c2.496 0 4.416 1.248 5.76 3.744 1.344 2.496 2.016 5.664 2.016 9.504 0 9.216-2.784 14.688-8.352 16.416-11.52 4.032-24.192 6.336-38.016 6.912-3.648 16.128-10.848 29.088-21.6 38.88-10.752 9.6-22.944 14.4-36.576 14.4-11.52 0-21.408-2.784-29.664-8.352-8.064-5.568-14.208-12.96-18.432-22.176-4.224-9.216-6.336-19.2-6.336-29.952 0-14.592 2.784-27.552 8.352-38.88 5.568-11.52 13.248-20.448 23.04-26.784 9.792-6.528 20.64-9.792 32.544-9.792 14.592 0 26.304 5.088 35.136 15.264 9.024 9.984 14.304 22.368 15.84 37.152 9.024-.576 19.776-2.496 32.256-5.76 1.536-.384 2.88-.576 4.032-.576zm-94.464 59.328c6.144 0 11.424-2.496 15.84-7.488 4.608-4.992 7.68-12.192 9.216-21.6-5.952-4.032-10.56-9.312-13.824-15.84-3.072-6.528-4.608-13.44-4.608-20.736 0-3.072.288-6.144.864-9.216h-1.44c-7.68 0-14.112 3.744-19.296 11.232-4.992 7.296-7.488 17.664-7.488 31.104 0 10.56 2.016 18.624 6.048 24.192 4.224 5.568 9.12 8.352 14.688 8.352z'
                  />
                  <path
                    fill='#1F2937'
                    d='M839.678 206.776c2.496 0 4.416 1.152 5.76 3.456 1.536 2.304 2.304 5.472 2.304 9.504 0 7.68-1.824 13.632-5.472 17.856-8.256 10.176-17.28 18.528-27.072 25.056-9.792 6.528-21.024 9.792-33.696 9.792-39.168 0-58.752-27.552-58.752-82.656 0-8.448.288-16.992.864-25.632h-11.232c-5.76 0-9.696-1.056-11.808-3.168-1.92-2.112-2.88-5.472-2.88-10.08 0-10.752 4.32-16.128 12.96-16.128h16.416c3.264-21.12 8.256-40.416 14.976-57.888 6.72-17.472 14.784-31.392 24.192-41.76 9.6-10.368 19.872-15.552 30.816-15.552 8.064 0 14.4 3.552 19.008 10.656 4.608 7.104 6.912 16.032 6.912 26.784 0 29.76-12.48 55.68-37.44 77.76h32.256c3.072 0 5.28.672 6.624 2.016 1.344 1.344 2.016 3.84 2.016 7.488 0 13.248-10.848 19.872-32.544 19.872H758.75c-.384 9.6-.576 17.088-.576 22.464 0 19.968 2.304 33.984 6.912 42.048 4.8 8.064 12.288 12.096 22.464 12.096 8.256 0 15.552-2.496 21.888-7.488 6.336-4.992 13.824-12.48 22.464-22.464 2.304-2.688 4.896-4.032 7.776-4.032zm-50.4-159.552c-2.88 0-6.144 3.648-9.792 10.944-3.456 7.104-6.816 17.088-10.08 29.952-3.072 12.672-5.664 26.784-7.776 42.336 11.328-9.792 19.776-20.736 25.344-32.832 5.76-12.288 8.64-23.424 8.64-33.408 0-11.328-2.112-16.992-6.336-16.992z'
                  />
                  <path
                    fill='#1F2937'
                    d='M927.397 215.416c2.496 0 4.416 1.152 5.76 3.456 1.536 2.304 2.304 5.472 2.304 9.504 0 6.912-1.632 12.864-4.896 17.856-5.376 8.256-12.48 14.688-21.312 19.296-8.64 4.608-19.008 6.912-31.104 6.912-18.432 0-32.736-5.472-42.912-16.416-10.176-11.136-15.264-26.112-15.264-44.928 0-13.248 2.784-25.536 8.352-36.864 5.568-11.52 13.248-20.64 23.04-27.36 9.984-6.72 21.216-10.08 33.696-10.08 11.136 0 20.064 3.36 26.784 10.08 6.72 6.528 10.08 15.456 10.08 26.784 0 13.248-4.8 24.672-14.4 34.272-9.408 9.408-25.536 16.896-48.384 22.464 4.608 8.832 12.384 13.248 23.328 13.248 7.872 0 14.304-1.824 19.296-5.472 5.184-3.648 11.136-9.792 17.856-18.432 2.304-2.88 4.896-4.32 7.776-4.32zm-47.232-50.4c-7.104 0-13.152 4.128-18.144 12.384-4.8 8.256-7.2 18.24-7.2 29.952v.576c11.328-2.688 20.256-6.72 26.784-12.096 6.528-5.376 9.792-11.616 9.792-18.72 0-3.648-1.056-6.528-3.168-8.64-1.92-2.304-4.608-3.456-8.064-3.456zM1225.7 50.104c0 5.76-1.25 10.08-3.74 12.96-2.31 2.88-6.15 4.32-11.52 4.32-.39 4.032-1.25 11.04-2.59 21.024-1.92 13.44-2.98 20.928-3.17 22.464-17.09 127.296-52.71 190.944-106.85 190.944-15.94 0-28.42-4.512-37.44-13.536-8.83-9.024-13.25-20.352-13.25-33.984 0-24.384 10.37-45.888 31.11-64.512 20.73-18.816 48-34.368 81.79-46.656 2.11-13.632 3.74-25.824 4.89-36.576l5.19-43.488c-11.52-1.152-22.27-1.728-32.26-1.728-26.69 0-46.37 2.592-59.04 7.776-12.67 5.184-19.01 13.632-19.01 25.344 0 5.76 1.92 12 5.76 18.72 1.16 1.92 1.73 3.936 1.73 6.048 0 4.032-2.11 7.68-6.33 10.944-4.04 3.072-8.45 4.608-13.25 4.608-6.15 0-10.85-2.592-14.11-7.776-5.38-8.832-8.07-19.104-8.07-30.816 0-46.08 40.32-69.12 120.96-69.12 23.43 0 44.35 2.304 62.79 6.912 10.94 2.688 16.41 8.064 16.41 16.128zM1101.57 271c9.41 0 18.82-7.104 28.23-21.312 9.41-14.208 17.66-39.072 24.77-74.592-46.85 20.544-70.28 45.696-70.28 75.456 0 6.528 1.54 11.616 4.61 15.264 3.07 3.456 7.3 5.184 12.67 5.184zM1249.53 272.44c-11.9 0-21.41-4.32-28.51-12.96-7.11-8.64-10.66-19.968-10.66-33.984 0-15.36 3.55-29.856 10.66-43.488 7.1-13.824 16.51-24.864 28.22-33.12 11.91-8.448 24.48-12.672 37.73-12.672 4.22 0 7.01.864 8.35 2.592 1.54 1.536 2.79 4.416 3.75 8.64 4.03-.768 8.25-1.152 12.67-1.152 9.41 0 14.11 3.36 14.11 10.08 0 4.032-1.44 13.632-4.32 28.8-4.42 22.08-6.62 37.44-6.62 46.08 0 2.88.67 5.184 2.01 6.912 1.54 1.728 3.46 2.592 5.76 2.592 3.65 0 8.07-2.304 13.25-6.912 5.18-4.8 12.19-12.48 21.02-23.04 2.31-2.688 4.9-4.032 7.78-4.032 2.5 0 4.42 1.152 5.76 3.456 1.54 2.304 2.3 5.472 2.3 9.504 0 7.68-1.82 13.632-5.47 17.856-7.87 9.792-16.22 18.048-25.05 24.768-8.84 6.72-17.38 10.08-25.64 10.08-6.33 0-12.19-2.112-17.56-6.336-5.19-4.416-9.12-10.368-11.81-17.856-9.99 16.128-22.56 24.192-37.73 24.192zm10.37-29.088c4.22 0 8.25-2.496 12.09-7.488 3.84-4.992 6.63-11.616 8.36-19.872L1291 163c-8.06.192-15.55 3.264-22.46 9.216-6.72 5.76-12.1 13.44-16.13 23.04-4.03 9.6-6.05 19.776-6.05 30.528 0 5.952 1.15 10.368 3.46 13.248 2.49 2.88 5.85 4.32 10.08 4.32z'
                  />
                  <path
                    fill='#1F2937'
                    d='M1369.83 272.44c-7.29 0-12.48-3.84-15.55-11.52-2.88-7.68-4.32-19.968-4.32-36.864 0-24.96 3.55-48.672 10.66-71.136 1.73-5.568 4.51-9.6 8.35-12.096 4.03-2.688 9.6-4.032 16.7-4.032 3.84 0 6.53.48 8.07 1.44 1.53.96 2.3 2.784 2.3 5.472 0 3.072-1.44 9.984-4.32 20.736-1.92 7.68-3.45 14.4-4.61 20.16-1.15 5.568-2.11 12.576-2.88 21.024 5.19-14.976 11.33-27.648 18.44-38.016 7.29-10.368 14.68-18.048 22.17-23.04 7.68-5.184 14.88-7.776 21.6-7.776 6.72 0 11.43 1.536 14.11 4.608 2.88 3.072 4.32 7.776 4.32 14.112 0 6.144-1.82 17.28-5.47 33.408-1.53 6.912-2.59 12.096-3.17 15.552 9.6-23.616 20.26-40.8 31.97-51.552 11.71-10.752 22.66-16.128 32.83-16.128 12.48 0 18.72 6.24 18.72 18.72 0 7.488-2.11 21.024-6.33 40.608-3.65 16.704-5.47 27.744-5.47 33.12 0 7.68 2.78 11.52 8.35 11.52 3.84 0 8.35-2.304 13.53-6.912 5.38-4.8 12.48-12.48 21.32-23.04 2.3-2.688 4.89-4.032 7.77-4.032 2.5 0 4.42 1.152 5.76 3.456 1.54 2.304 2.31 5.472 2.31 9.504 0 7.68-1.83 13.632-5.48 17.856-8.25 10.176-17.18 18.528-26.78 25.056-9.41 6.528-20.16 9.792-32.26 9.792-9.79 0-17.18-2.784-22.17-8.352-4.99-5.76-7.49-14.016-7.49-24.768 0-5.376 1.34-14.976 4.03-28.8 2.5-12.096 3.75-20.448 3.75-25.056 0-3.072-1.06-4.608-3.17-4.608-2.5 0-6.05 3.264-10.66 9.792-4.61 6.336-9.21 14.784-13.82 25.344-4.61 10.56-8.35 21.696-11.23 33.408-2.12 9.216-4.61 15.36-7.49 18.432-2.69 3.072-7.11 4.608-13.25 4.608-6.34 0-11.14-2.976-14.4-8.928-3.07-6.144-4.61-13.536-4.61-22.176 0-7.296.96-17.856 2.88-31.68 1.54-12.288 2.31-20.352 2.31-24.192 0-3.072-1.06-4.608-3.17-4.608-2.88 0-6.53 3.456-10.95 10.368-4.41 6.912-8.73 15.744-12.96 26.496-4.03 10.752-7.29 21.312-9.79 31.68-2.11 9.024-4.61 15.168-7.49 18.432-2.68 3.072-7 4.608-12.96 4.608z'
                  />
                  <path
                    fill='#1F2937'
                    d='M1617.27 278.776c-9.99 0-17.67-2.304-23.04-6.912-5.19-4.608-7.78-9.792-7.78-15.552 0-4.992 1.83-9.312 5.47-12.96 3.65-3.648 9.03-5.472 16.13-5.472 2.5 0 5.38.288 8.64.864l7.78.864c-.2-4.992-1.35-9.696-3.46-14.112-1.92-4.416-4.42-8.64-7.49-12.672-3.07-4.224-5.95-7.872-8.64-10.944-5.95 11.328-11.9 20.736-17.85 28.224a198.774 198.774 0 01-19.01 21.312c-3.46 3.456-7.11 5.184-10.95 5.184-3.07 0-5.56-1.056-7.48-3.168-1.92-2.304-2.88-5.088-2.88-8.352 0-3.84 1.34-7.392 4.03-10.656l3.74-4.608c10.56-13.056 18.53-23.808 23.91-32.256 3.26-5.568 7.1-12.96 11.52-22.176a847.502 847.502 0 0012.96-29.088c3.64-8.448 11.23-12.672 22.75-12.672 5.38 0 9.12.48 11.23 1.44 2.11.96 3.17 2.496 3.17 4.608 0 1.152-.39 2.976-1.15 5.472-.77 2.496-1.83 4.992-3.17 7.488-3.46 6.912-5.18 12.768-5.18 17.568 0 2.88.96 6.048 2.88 9.504 2.11 3.456 5.27 7.776 9.5 12.96 6.14 8.064 10.75 14.976 13.82 20.736 3.27 5.568 4.9 11.712 4.9 18.432 0 1.92-.19 4.608-.58 8.064 9.41-3.648 20.45-13.344 33.12-29.088 2.31-2.688 4.9-4.032 7.78-4.032 2.49 0 4.41 1.152 5.76 3.456 1.54 2.304 2.3 5.472 2.3 9.504 0 7.296-1.82 13.248-5.47 17.856-9.6 11.904-18.82 20.064-27.65 24.48-8.64 4.224-19.39 6.528-32.25 6.912-7.68 6.528-16.8 9.792-27.36 9.792z'
                  />
                  <path
                    fill='#1F2937'
                    d='M1815.05 206.776c2.5 0 4.42 1.152 5.76 3.456 1.54 2.304 2.31 5.472 2.31 9.504 0 7.68-1.83 13.632-5.47 17.856-8.26 10.176-17.28 18.528-27.08 25.056-9.79 6.528-21.02 9.792-33.69 9.792-39.17 0-58.75-27.552-58.75-82.656 0-8.448.28-16.992.86-25.632h-11.23c-5.76 0-9.7-1.056-11.81-3.168-1.92-2.112-2.88-5.472-2.88-10.08 0-10.752 4.32-16.128 12.96-16.128h16.42c3.26-21.12 8.25-40.416 14.97-57.888 6.72-17.472 14.79-31.392 24.19-41.76 9.6-10.368 19.88-15.552 30.82-15.552 8.06 0 14.4 3.552 19.01 10.656 4.61 7.104 6.91 16.032 6.91 26.784 0 29.76-12.48 55.68-37.44 77.76h32.26c3.07 0 5.28.672 6.62 2.016 1.34 1.344 2.02 3.84 2.02 7.488 0 13.248-10.85 19.872-32.55 19.872h-35.13c-.39 9.6-.58 17.088-.58 22.464 0 19.968 2.3 33.984 6.91 42.048 4.8 8.064 12.29 12.096 22.47 12.096 8.25 0 15.55-2.496 21.88-7.488 6.34-4.992 13.83-12.48 22.47-22.464 2.3-2.688 4.89-4.032 7.77-4.032zm-50.4-159.552c-2.88 0-6.14 3.648-9.79 10.944-3.45 7.104-6.81 17.088-10.08 29.952-3.07 12.672-5.66 26.784-7.77 42.336 11.32-9.792 19.77-20.736 25.34-32.832 5.76-12.288 8.64-23.424 8.64-33.408 0-11.328-2.11-16.992-6.34-16.992z'
                  />
                  <path
                    fill='#1F2937'
                    d='M1835.09 272.44c-11.9 0-21.41-4.32-28.51-12.96-7.1-8.64-10.66-19.968-10.66-33.984 0-15.36 3.56-29.856 10.66-43.488 7.1-13.824 16.51-24.864 28.22-33.12 11.91-8.448 24.48-12.672 37.73-12.672 4.23 0 7.01.864 8.35 2.592 1.54 1.536 2.79 4.416 3.75 8.64 4.03-.768 8.25-1.152 12.67-1.152 9.41 0 14.11 3.36 14.11 10.08 0 4.032-1.44 13.632-4.32 28.8-4.41 22.08-6.62 37.44-6.62 46.08 0 2.88.67 5.184 2.01 6.912 1.54 1.728 3.46 2.592 5.76 2.592 3.65 0 8.07-2.304 13.25-6.912 5.19-4.8 12.19-12.48 21.03-23.04 2.3-2.688 4.89-4.032 7.77-4.032 2.5 0 4.42 1.152 5.76 3.456 1.54 2.304 2.31 5.472 2.31 9.504 0 7.68-1.83 13.632-5.48 17.856-7.87 9.792-16.22 18.048-25.05 24.768-8.83 6.72-17.38 10.08-25.63 10.08-6.34 0-12.2-2.112-17.57-6.336-5.19-4.416-9.12-10.368-11.81-17.856-9.98 16.128-22.56 24.192-37.73 24.192zm10.37-29.088c4.22 0 8.26-2.496 12.1-7.488 3.84-4.992 6.62-11.616 8.35-19.872L1876.56 163c-8.06.192-15.55 3.264-22.46 9.216-6.72 5.76-12.1 13.44-16.13 23.04-4.03 9.6-6.05 19.776-6.05 30.528 0 5.952 1.16 10.368 3.46 13.248 2.5 2.88 5.86 4.32 10.08 4.32z'
                  />
                  <path
                    fill='#1F2937'
                    d='M1989.96 272.44c-18.82 0-33.51-5.28-44.07-15.84-10.37-10.752-15.55-24.864-15.55-42.336 0-15.552 3.07-29.184 9.22-40.896 6.14-11.712 14.11-20.736 23.9-27.072 9.79-6.336 20.07-9.504 30.82-9.504 10.56 0 18.72 3.168 24.48 9.504 5.95 6.144 8.92 14.112 8.92 23.904 0 8.064-1.82 14.88-5.47 20.448-3.45 5.568-8.06 8.352-13.82 8.352-3.65 0-6.63-.864-8.93-2.592-2.11-1.728-3.17-4.128-3.17-7.2 0-1.344.2-2.88.58-4.608.38-1.728.67-2.976.86-3.744.96-2.88 1.44-5.568 1.44-8.064 0-2.496-.67-4.416-2.01-5.76-1.15-1.344-2.88-2.016-5.19-2.016-4.41 0-8.54 2.016-12.38 6.048-3.84 3.84-6.91 9.12-9.22 15.84-2.3 6.72-3.45 14.112-3.45 22.176 0 22.272 9.69 33.408 29.09 33.408 7.87 0 16.32-2.592 25.34-7.776 9.22-5.376 18.24-13.344 27.07-23.904 2.31-2.688 4.9-4.032 7.78-4.032 2.49 0 4.41 1.152 5.76 3.456 1.53 2.304 2.3 5.472 2.3 9.504 0 7.296-1.82 13.248-5.47 17.856-9.03 11.136-19.87 19.776-32.54 25.92-12.48 5.952-24.58 8.928-36.29 8.928z'
                  />
                  <path
                    fill='#1F2937'
                    d='M2163.38 241.048c7.87 1.536 11.81 5.856 11.81 12.96 0 4.8-2.21 9.12-6.63 12.96-4.22 3.648-10.36 5.472-18.43 5.472-13.82 0-25.15-4.224-33.98-12.672-8.64-8.64-12.96-19.872-12.96-33.696 0-7.488 3.84-12.864 11.52-16.128 8.45-3.648 14.49-7.488 18.14-11.52 3.65-4.224 5.47-9.312 5.47-15.264 0-3.456-.76-6.048-2.3-7.776-1.34-1.728-3.07-2.592-5.18-2.592-5.19 0-10.95 3.744-17.28 11.232-6.15 7.488-11.91 17.184-17.28 29.088a203.595 203.595 0 00-12.68 36.288c-2.11 9.024-4.6 15.168-7.48 18.432-2.69 3.072-7.01 4.608-12.96 4.608-5.96 0-10.37-2.112-13.25-6.336-2.69-4.416-4.51-11.136-5.47-20.16-.96-9.024-1.44-22.272-1.44-39.744 0-29.568 2.97-60.384 8.92-92.448 6.15-32.064 15.08-58.944 26.79-80.64C2090.61 11.224 2104.82.28 2121.33.28c8.83 0 15.94 3.84 21.31 11.52 5.57 7.488 8.36 17.28 8.36 29.376 0 19.392-5.67 39.552-17 60.48-11.32 20.736-29.76 45.024-55.29 72.864-.58 9.984-.87 20.256-.87 30.816 9.22-24 19.78-41.376 31.68-52.128 11.91-10.944 23.04-16.416 33.41-16.416 9.6 0 17.28 3.264 23.04 9.792 5.95 6.528 8.93 14.592 8.93 24.192 0 10.56-2.69 20.256-8.06 29.088-5.38 8.832-14.6 16.704-27.65 23.616 1.15 5.76 3.45 9.792 6.91 12.096 3.65 2.112 9.41 3.936 17.28 5.472zm-48.1-212.256c-3.45 0-7.29 4.992-11.52 14.976-4.22 9.792-8.35 23.136-12.38 40.032-3.84 16.704-7.01 34.944-9.5 54.72 11.9-14.016 21.69-29.28 29.37-45.792 7.87-16.512 11.81-31.488 11.81-44.928 0-6.144-.67-10.848-2.02-14.112-1.34-3.264-3.26-4.896-5.76-4.896z'
                  />
                </svg>
              </a>
            </Link>
            <div className='header_nav:hidden'>
              <div className='flex items-center justify-center'>
                <div className='relative inline-block text-left'>
                  <Menu>
                    {({ open }) => (
                      <>
                        <span className='rounded-md shadow-sm'>
                          <Menu.Button className='inline-flex px-2 text-gray-800 hover:text-red-500'>
                            {/* <span>Menu</span> */}
                            <svg
                              className='w-8 h-8'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h16M4 18h7'
                              />
                            </svg>
                          </Menu.Button>
                        </span>
                        <Transition
                          show={open}
                          enter='transition ease-out duration-100'
                          enterFrom='transform opacity-0 scale-95'
                          enterTo='transform opacity-100 scale-100'
                          leave='transition ease-in duration-75'
                          leaveFrom='transform opacity-100 scale-100'
                          leaveTo='transform opacity-0 scale-95'
                        >
                          <Menu.Items
                            static
                            className='absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-md outline-none'
                          >
                            <div className='py-1'>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link href='/jobs'>
                                    <a
                                      className={`${
                                        active
                                          ? 'bg-gray-100 text-gray-900'
                                          : 'text-gray-700'
                                      } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                    >
                                      Browse Jobs
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link href='/employers'>
                                    <a
                                      className={`${
                                        active
                                          ? 'bg-gray-100 text-gray-900'
                                          : 'text-gray-700'
                                      } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                    >
                                      Employers &amp; Recruiters
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link href='/login'>
                                    <a
                                      className={`${
                                        active
                                          ? 'bg-gray-100 text-gray-900'
                                          : 'text-gray-700'
                                      } border-t border-gray-100 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                    >
                                      Login
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link href='/signup'>
                                    <a
                                      className={`${
                                        active
                                          ? 'bg-gray-100 text-gray-900'
                                          : 'text-gray-700'
                                      } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                    >
                                      Signup
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div>
            </div>
            <div className='hidden header_nav:flex'>
              <ActiveLink activeClassName='text-red-500' href='/jobs'>
                <a className='pt-2.5 font-medium text-gray-800 text-md hover:text-red-500'>
                  Browse Jobs
                </a>
              </ActiveLink>
              {/* <Link href='/about'>
                <a className='pt-2.5 ml-8 font-medium text-gray-800 text-md hover:text-red-500'>
                  About
                </a>
              </Link> */}
              <ActiveLink activeClassName='text-red-500' href='/employers'>
                <a className='pt-2.5 ml-8 font-medium text-gray-800 text-md hover:text-red-500'>
                  Employers &amp; Recruiters
                </a>
              </ActiveLink>
              {auth.user ? (
                <>
                  <Link href='/jobs/create'>
                    <a className='inline-block px-4 py-2 mx-8 font-medium text-red-500 border border-red-200 rounded-md hover:border-red-300 hover:bg-red-50'>
                      Post a Job
                    </a>
                  </Link>
                  <div className='relative'>
                    <button
                      className='flex items-center max-w-xs text-sm bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-red-300 focus:ring-white'
                      id='user-menu'
                      aria-haspopup='true'
                    >
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='rounded-md w-11 h-11 tr'
                        src={auth.user?.photoUrl}
                        alt=''
                      />
                    </button>
                    <div
                      className='absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-md ring-1 ring-black ring-opacity-5'
                      role='menu'
                      aria-orientation='vertical'
                      aria-labelledby='user-menu'
                    >
                      <div className='py-1'>
                        <ActiveLink
                          activeClassName='text-red-500 bg-red-50 hover:bg-red-50'
                          href='/dashboard'
                        >
                          <a
                            className='block px-5 py-2 text-sm text-gray-800 hover:bg-gray-100'
                            role='menuitem'
                          >
                            Dashboard
                          </a>
                        </ActiveLink>
                      </div>
                      <div className='py-1'>
                        <ActiveLink
                          activeClassName='text-red-500 bg-red-50 hover:bg-red-50'
                          href='/profile'
                        >
                          <a
                            className='block px-5 py-2 text-sm text-gray-800 hover:bg-gray-100'
                            role='menuitem'
                          >
                            Profile
                          </a>
                        </ActiveLink>
                        <ActiveLink
                          activeClassName='text-red-500 bg-red-50 hover:bg-red-50'
                          href='/settings'
                        >
                          <a
                            className='block px-5 py-2 text-sm text-gray-800 hover:bg-gray-100'
                            role='menuitem'
                          >
                            Settings
                          </a>
                        </ActiveLink>
                      </div>
                      <div className='py-1'>
                        <button
                          onClick={(e) =>
                            auth.signout() && userToast('👋⠀You logged out.')
                          }
                          className='w-full px-5 py-2 text-sm text-left text-gray-800 hover:bg-gray-100'
                          role='menuitem'
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* <button
                    onClick={
                      (e) => auth.signinWithGitHub() //&& userToast('🥳⠀Welcome back!')
                    }
                    className='inline-block px-4 pb-2 pt-1.5 ml-8 font-medium text-gray-800 border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300'
                  >
                    Github Login
                  </button> */}
                  <Link href='/login'>
                    <a className='inline-block px-4 py-2 ml-8 mr-4 font-medium text-gray-800 border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300'>
                      Login
                    </a>
                  </Link>
                  <Link href='/signup'>
                    <a className='inline-block px-4 py-2 font-medium text-red-500 border border-red-200 rounded-md hover:text-red-500 hover:bg-red-50 hover:border-red-300'>
                      Sign Up
                    </a>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
