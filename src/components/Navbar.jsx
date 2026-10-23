import { NavLink } from 'react-router'

function Navbar() {
  const lienClasses = ({ isActive }) =>
    'rounded-full px-4 py-2.5 font-mono text-xs uppercase tracking-widest ' +
    (isActive ? 'bg-ink text-cream' : 'text-ink hover:bg-sage')

  return (
    <header className="border-b border-ink">
      <nav aria-label="Navigation principale" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <NavLink to="/" className="font-display text-3xl tracking-wide">
          LUCILE OBER
        </NavLink>
        <ul className="flex gap-1">
          <li>
            <NavLink to="/" end className={lienClasses}>US · Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/projets" className={lienClasses}>REL · Projets</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar