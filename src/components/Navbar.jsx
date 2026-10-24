import { Link, NavLink } from 'react-router'

function lienClasses({ isActive }) {
  return 'rounded-full px-4 py-2.5 font-mono text-xs uppercase tracking-widest ' + (isActive ? 'bg-ink text-cream' : 'text-ink hover:bg-sage')
}

function Navbar() {
  return (
    <header className="border-b border-ink">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <Link to="/" className="flex items-baseline gap-3">
          <span className="font-display text-3xl tracking-wide">LUCILE OBER</span>
          <span className="hidden font-mono text-xs uppercase tracking-widest lg:inline">/ Product board</span>
        </Link>
        <nav aria-label="Navigation principale">
          <ul className="flex items-center gap-1">
            <li><NavLink to="/" end className={lienClasses}>US · Accueil</NavLink></li>
            <li><NavLink to="/projets" className={lienClasses}>REL · Projets</NavLink></li>
            <li><Link to="/" state={{ section: 'contact' }} className={lienClasses({ isActive: false })}>Ouvrir un ticket</Link></li>
          </ul>
        </nav>
        <p className="hidden items-center gap-2 rounded-full border border-ink px-4 py-2 font-mono text-xs uppercase tracking-widest lg:flex">
          <span aria-hidden="true" className="size-2 rounded-full bg-success"></span>
          Ouverte à l'alternance
        </p>
      </div>
    </header>
  )
}

export default Navbar