import { useState } from 'react'
import { NavLink as NavLinkReactRouter } from 'react-router-dom'
import { HomeIcon, SimilarIcon, UpcomingIcon } from './Icons'

export function NavBar () {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const NavLink = ({ to, children, ...props }) => {
    return (
      <NavLinkReactRouter
        {...props}
        className='flex items-center p-2 text-amber-400 rounded-lg hover:bg-stone-700'
        to={to}
      >
        {children}
      </NavLinkReactRouter>
    )
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
        className={`fixed left-0 z-40 w-60 -mt-12 sm:mt-0 top-auto h-screen transition-transform ${sidebarOpen ? 'translate-x-0 ' : '-translate-x-full'} sm:translate-x-0`} aria-label='Sidebar'
      >
        <div className='h-full px-3 py-4 bg-stone-800'>
          <ul className='space-y-2 font-medium'>
            <li>
              <NavLink to=''>
                <HomeIcon />
                <span className='ml-1'>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='similar-games'>
                <SimilarIcon />
                <span className='flex-1 ml-3 whitespace-nowrap'>Similar Games</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='upcoming-games'>
                <UpcomingIcon />
                <span className='flex-1 ml-3 whitespace-nowrap'>Upcoming Games</span>
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
