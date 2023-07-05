import { NavLink as NavLinkReactRouter } from 'react-router-dom'

export function NavLink ({ to, children, ...props }) {
  return (
    <NavLinkReactRouter
      {...props}
      className={({ isActive }) => isActive ? 'flex items-center p-2 text-amber-400 rounded-lg hover:bg-stone-700 bg-amber-400/10' : 'flex items-center p-2 text-amber-400 rounded-lg hover:bg-stone-700'}
      to={to}
    >
      {children}
    </NavLinkReactRouter>
  )
}
