import { NavLink as NavLinkReactRouter } from 'react-router-dom'

export function NavLink ({ to, children, style, ...props }) {
  const navStyle = style || 'flex items-center p-2 text-amber-400 rounded-lg hover:bg-stone-700'

  return (
    <NavLinkReactRouter
      {...props}
      className={({ isActive }) => isActive ? (navStyle + ' bg-amber-400/10') : navStyle}
      to={to}
    >
      {children}
    </NavLinkReactRouter>
  )
}
