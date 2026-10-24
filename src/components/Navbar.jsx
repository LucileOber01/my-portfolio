import { useState } from 'react'
import { Link, NavLink } from 'react-router'

function lienClasses({ isActive }) {
  return 'rounded-full px-4 py-2.5 font-mono text-xs uppercase tracking-widest ' + (isActive ? 'bg-ink text-cream' : 'text-ink hover:bg-sage')
}

function lienMobileClasses({ isActive }) {
  return 'flex min-h-12 items-center rounded-full px-5 font-mono text-xs uppercase tracking-widest ' + (isActive ? 'bg-ink text-cream' : 'text-ink hover:bg-sage')
}

function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false)

  function fermerMenu() {
    setMenuOuvert(false)
  }

  return (
    <header className="border-b border-ink">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 md:px-6 md:py-3">
        <Link to="/" onClick={fermerMenu} className="flex items-baseline gap-3">
          <span className="font-display text-3xl tracking-wide">LUCILE OBER</span>
          <span className="hidden font-mono text-xs uppercase tracking-widest lg:inline">/ Product board</span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden md:block">
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

        <button
          type="button"
          onClick={() => setMenuOuvert(!menuOuvert)}
          aria-expanded={menuOuvert}
          aria-controls="menu-mobile"
          aria-label={menuOuvert ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="flex size-11 items-center justify-center rounded-full border border-ink md:hidden"
        >
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round">
            {menuOuvert ? <path d="M4 4L16 16M16 4L4 16" /> : <path d="M3 6H17M3 10H17M3 14H17" />}
          </svg>
        </button>
      </div>

      {menuOuvert && (
        <div id="menu-mobile" className="border-t border-ink px-4 pt-4 pb-6 md:hidden">
          <nav aria-label="Navigation mobile">
            <ul className="flex flex-col gap-2">
              <li><NavLink to="/" end onClick={fermerMenu} className={lienMobileClasses}>US · Accueil</NavLink></li>
              <li><NavLink to="/projets" onClick={fermerMenu} className={lienMobileClasses}>REL · Projets</NavLink></li>
              <li><Link to="/" state={{ section: 'contact' }} onClick={fermerMenu} className={lienMobileClasses({ isActive: false })}>Ouvrir un ticket</Link></li>
            </ul>
          </nav>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink px-4 py-2 font-mono text-xs uppercase tracking-widest">
            <span aria-hidden="true" className="size-2 rounded-full bg-success"></span>
            Ouverte à l'alternance
          </p>
        </div>
      )}
    </header>
  )
}

export default Navbar