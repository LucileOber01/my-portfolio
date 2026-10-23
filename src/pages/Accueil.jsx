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

          <div className="grid gap-6 md:grid-cols-12">
            <blockquote className="rounded-card bg-sage p-6 text-xl leading-snug md:col-span-7 md:p-10 md:text-[28px]">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest">User story</p>
              <p>
                En tant que <strong>recruteur</strong>, je cherche une Product Owner{' '}
                <strong>curieuse et adaptable</strong>, afin de faire avancer mes projets de{' '}
                <strong>transformation digitale</strong>.
              </p>
            </blockquote>

            <div className="flex flex-col gap-5 md:col-span-5">
              <p className="text-lg leading-relaxed">
                Après plus de trois ans en gestion de produit au sein d'une startup, je fais évoluer
                mon parcours vers la transformation digitale et l'innovation technologique. Année de
                mise à niveau à Epitech Lyon en 2026, puis MBA Strategic Project Management en 2027.
              </p>

              <h3 className="border-t border-ink/35 pt-3 font-mono text-xs uppercase tracking-widest">
                Critères d'acceptation
              </h3>
              <ul className="flex flex-col gap-2.5 text-lg">
                <li><span aria-hidden="true" className="mr-3 font-mono">[x]</span>3 ans en gestion de produit, jusqu'à Lead Product Manager</li>
                <li><span aria-hidden="true" className="mr-3 font-mono">[x]</span>Coordination Conception, Développement et Produit</li>
                <li><span aria-hidden="true" className="mr-3 font-mono">[x]</span>Anglais B2 (TOEIC)</li>
                <li><span aria-hidden="true" className="mr-3 font-mono">[ ]</span>Alternance de 2 ans dès janvier 2027</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
    
  )
}

export default Accueil