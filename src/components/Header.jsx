import { ControllerIcon } from './Icons'

export function Header () {
  return (
    <header className='flex flex-row h-20 min-w-full sticky top-0 bg-cyan-950 leading-none p-5'>
      <ControllerIcon />
      <h1 className='text-4xl h-8 text-amber-500 mx-1'>GamesLike</h1>
    </header>
  )
}
