import { Link } from 'react-router'
import EnTeteSection from '../components/EnTeteSection'
function Accueil() {
  return (
    <>
    <section aria-labelledby="hero-titre" className="mx-auto max-w-7xl px-6 pt-12 pb-16">
      <h1 id="hero-titre" className="sr-only">Lucile Ober, Product Owner / AMOA</h1>

      <div className="flex flex-wrap items-center gap-6 md:gap-10">
        <span aria-hidden="true" className="font-display text-[128px] leading-[0.82] md:text-[260px]">
          Lucile
        </span>
        <div className="size-20 rounded-full border-4 border-white bg-sage md:size-50"></div>
      </div>

      <div className="flex flex-wrap items-end gap-6 md:gap-10">
        <span aria-hidden="true" className="font-display text-[128px] leading-[0.82] text-transparent [-webkit-text-stroke:2px_var(--color-ink)] md:text-[260px]">
          Ober
        </span>
               <div className="flex flex-col gap-3 pb-4">
          <p className="font-mono text-xs uppercase tracking-widest">Product Owner / AMOA</p>
          <p className="font-display text-4xl md:text-5xl">Designer. Coder. Piloter.</p>
          <Link
            to="/projets"
            className="mt-2 inline-flex min-h-12 items-center gap-2 self-start rounded-full bg-ink px-6 text-cream hover:bg-ink/85"
          >
            Voir les releases <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
     <section aria-labelledby="apropos-titre" className="border-t border-ink">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-18">
          <EnTeteSection code="US-01" nom="À propos" info="Statut : validée" />
          <h2 id="apropos-titre" className="font-display text-5xl md:text-7xl">À propos</h2>
        </div>
      </section>
    </>
    
  )
}

export default Accueil