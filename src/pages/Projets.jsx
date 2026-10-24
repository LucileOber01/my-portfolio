import { useRef, useState } from 'react'
import CarteRelease from '../components/CarteRelease'
import { releases } from '../data/releases'

function Projets() {
  const livrees = releases.filter((release) => release.statut === 'Livré').length
  const enCours = releases.length - livrees

  const listeRef = useRef(null)
  const [index, setIndex] = useState(0)

  function defiler(direction) {
    const liste = listeRef.current
    const pas = liste.firstElementChild.offsetWidth + 24
    liste.scrollBy({ left: direction * pas, behavior: 'smooth' })
  }

  function mettreAJour() {
    const liste = listeRef.current
    const maximum = liste.scrollWidth - liste.clientWidth
    const avancement = maximum > 0 ? liste.scrollLeft / maximum : 0
    setIndex(Math.round(avancement * (releases.length - 1)))
  }

  const progression = ((index + 1) / releases.length) * 100

  return (
    <>
    <title>Projets · Lucile Ober, Product Owner / AMOA</title>
      <section aria-labelledby="projets-titre" className="border-b border-ink">
        <div className="mx-auto max-w-7xl px-6 pt-5 pb-12">
          <div className="flex justify-between gap-4 border-b border-ink/35 pb-5 font-mono text-xs uppercase tracking-widest">
            <p>REL · Releases</p>
            <p>{String(releases.length).padStart(2, '0')} releases · {livrees} livrées · {enCours} en cours</p>
          </div>
          <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h1 id="projets-titre" className="font-display text-8xl leading-[0.82] md:text-[180px]">
              Pro<span className="text-transparent [-webkit-text-stroke:2px_var(--color-ink)]">jets</span>
            </h1>
            <p className="max-w-md text-lg leading-snug">
              Concevoir, développer, piloter : les projets où j'ai mis en pratique ces trois casquettes.
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Liste des releases" className="mx-auto max-w-7xl px-6 py-14">
        <ul
          ref={listeRef}
          onScroll={mettreAJour}
          tabIndex={0}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-ink"
        >
          {releases.map((release) => (
            <li key={release.code} className="w-[85%] shrink-0 snap-start md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]">
              <CarteRelease release={release} />
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center gap-6 border-t border-ink pt-6">
          <button
            type="button"
            onClick={() => defiler(-1)}
            disabled={index === 0}
            aria-label="Release précédente"
            className="flex size-12 shrink-0 items-center justify-center rounded-full border border-ink hover:bg-sage disabled:opacity-30"
          >
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 15L7 10L12 5" />
            </svg>
          </button>

          <div aria-hidden="true" className="h-0.5 flex-1 bg-ink/20">
            <div className="h-full bg-ink transition-all duration-300" style={{ width: `${progression}%` }}></div>
          </div>

          <p className="font-mono text-xs tracking-widest">
            {String(index + 1).padStart(2, '0')} / {String(releases.length).padStart(2, '0')}
          </p>

          <button
            type="button"
            onClick={() => defiler(1)}
            disabled={index === releases.length - 1}
            aria-label="Release suivante"
            className="flex size-12 shrink-0 items-center justify-center rounded-full border border-ink hover:bg-sage disabled:opacity-30"
          >
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 5L13 10L8 15" />
            </svg>
          </button>
        </div>
      </section>
    </>
  )
}

export default Projets