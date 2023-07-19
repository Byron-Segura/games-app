import { NavLink } from '../../components/NavLink'

export function Error () {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen min-w-full bg-red-300/10'>
      <h3 className='text-red-700/80 text-7xl font-bold'>404 error</h3>
      <p className='mt-4 text-3xl text-neutral-900'>Page not found</p>
      <NavLink to='' style='bg-slate-800 text-white px-6 py-2 rounded mt-8'>GO BACK</NavLink>
    </div>
  )
}
