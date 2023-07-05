import { useState } from 'react'
import { HomeIcon, LatestGamesIcon, MoblieNavButton, SimilarIcon, UpcomingIcon } from './Icons'
import { NavLink } from './NavLink'

export function NavBar () {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <section>
      <button
        className={`items-center p-2 mt-1 ml-3 text-sm text-amber-400 rounded-lg sm:hidden focus:outline-none' ${sidebarOpen ? '' : 'flex'}`}
        aria-controls='default-sidebar'
        type='button'
        onClick={toggleSidebar}
      >
        <span className='sr-only'>Open sidebar</span>
        <MoblieNavButton />
      </button>

      <aside
        className={`fixed left-0 z-40 w-60 -mt-12 sm:mt-0 top-auto h-screen transition-transform ${sidebarOpen ? 'translate-x-0 ' : '-translate-x-full'} sm:translate-x-0`} aria-label='Sidebar'
      >
        <div className='h-full px-3 py-4 bg-stone-800'>
          <ul className='space-y-2 font-medium'>
            <li onClick={toggleSidebar}>
              <NavLink to=''>
                <HomeIcon />
                <span className='ml-1'>Home</span>
              </NavLink>
            </li>
            <li onClick={toggleSidebar}>
              <NavLink to='similar-games'>
                <SimilarIcon />
                <span className='flex-1 ml-3 whitespace-nowrap'>Similar Games</span>
              </NavLink>
            </li>
            <li onClick={toggleSidebar}>
              <NavLink to='upcoming-games'>
                <UpcomingIcon />
                <span className='flex-1 ml-3 whitespace-nowrap'>Upcoming Games</span>
              </NavLink>
            </li>
            <li onClick={toggleSidebar}>
              <NavLink to='latest-releases'>
                <LatestGamesIcon />
                <span className='flex-1 ml-3 whitespace-nowrap'>Latest Releases</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
      <span
        className={sidebarOpen ? 'fixed inset-0 bg-gray-800/20 z-20' : 'hidden'}
        onClick={toggleSidebar}
      />
    </section>

  )
}
