import { useState } from 'react'

export function NavBar () {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <section>
      <button
        className={sidebarOpen ? 'hidden' : 'inline-flex items-center p-2 mt-1 ml-3 text-sm text-amber-400 rounded-lg sm:hidden focus:outline-none focus:ring-2 focus:ring-amber-200 '}
        aria-controls='default-sidebar'
        type='button'
        onClick={toggleSidebar}
      >
        <span className='sr-only'>Open sidebar</span>
        <svg
          className='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path clipRule='evenodd' fillRule='evenodd' d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z' />
        </svg>
      </button>

      <aside
        className={`fixed left-0 z-40 w-60 top-auto h-screen transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`} aria-label='Sidebar'
      >
        <div className='h-full px-3 py-4 bg-stone-800'>
          <ul className='space-y-2 font-medium'>
            <li>
              <a href='#' className='flex items-center p-2 text-amber-400 rounded-lg hover:bg-stone-700'>
                <svg aria-hidden='true' className='w-6 h-6 text-amber-400 transition duration-75  group-hover:text-gray-800 ' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z' /><path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z' /></svg>
                <span className='ml-3'>Home</span>
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center p-2 text-amber-400 rounded-lg hover:bg-stone-700'>
                <svg aria-hidden='true' className='flex-shrink-0 w-6 h-6  transition duration-75 text-amber-400  group-hover:text-white' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' /></svg>
                <span className='flex-1 ml-3 whitespace-nowrap'>Similar Games</span>
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center p-2 text-amber-400 rounded-lg hover:bg-stone-700'>
                <svg aria-hidden='true' className='flex-shrink-0 w-6 h-6 transition duration-75 text-amber-400  group-hover:text-white' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z' /><path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z' /></svg>
                <span className='flex-1 ml-3 whitespace-nowrap'>Upcoming Games</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div
        className={sidebarOpen ? 'flex w-screen h-screen opacity-5 z-10' : 'hidden'}
        onClick={toggleSidebar}
      />
    </section>

  )
}
