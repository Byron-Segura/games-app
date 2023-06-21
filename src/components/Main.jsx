import { Outlet } from 'react-router-dom'

export function Main () {
  return (
    <main className='max-w-7xl mx-4 sm:ml-64 sm:mr-6 sm:mt-6 z-10'>
      <Outlet />
    </main>
  )
}
