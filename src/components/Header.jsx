import { ControllerIcon } from './Icons'

export function Header () {
  return (
    <header className='flex flex-row min-w-full sticky top-0 bg-rose-950 leading-none text-start z-50'>
      <div className='flex flex-row max-w-7xl my-5 mx-3'>
        <ControllerIcon />
        <h1 className='text-3xl text-amber-400 mx-1'>Games<strong>Search</strong></h1>
      </div>
    </header>
  )
}
