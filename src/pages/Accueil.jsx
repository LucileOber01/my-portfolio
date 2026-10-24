import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import EnTeteSection from "../components/EnTeteSection";
import ColonneBacklog from "../components/ColonneBacklog";
import { savoirFaire, savoirs, enCours } from "../data/competences";
import { roadmap } from "../data/roadmap";
import FormulaireContact from "../components/FormulaireContact";

function Accueil() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.section) {
      document
        .getElementById(location.state.section)
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
    <title>Lucile Ober · Product Owner / AMOA</title>
      <section
        aria-labelledby="hero-titre"
        className="mx-auto max-w-7xl px-6 pt-5 pb-16"
      >
        <h1 id="hero-titre" className="sr-only">
          Lucile Ober, Product Owner / AMOA
        </h1>
        <div className="flex justify-between gap-4 border-b border-ink/35 pb-5 font-mono text-xs uppercase tracking-widest">
          <p>US-00 · Product brief</p>
          <p className="hidden md:block">
            Build v2026.10 · Release cible : 01.2027
          </p>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-6 md:gap-10">
          <span
            aria-hidden="true"
            className="font-display text-[128px] leading-[0.82] md:text-[260px]"
          >
            Lucile
          </span>
          <div className="size-20 rounded-full border-4 border-white bg-sage md:size-50"></div>
        </div>
        <div className="flex flex-wrap items-end gap-6 md:gap-10">
          <span
            aria-hidden="true"
            className="font-display text-[128px] leading-[0.82] text-transparent [-webkit-text-stroke:2px_var(--color-ink)] md:text-[260px]"
          >
            Ober
          </span>
          <div className="flex flex-col gap-3 pb-4">
            <p className="font-mono text-xs uppercase tracking-widest">
              Product Owner / AMOA
            </p>
            <p className="font-display text-4xl md:text-5xl">
              Designer. Coder. Piloter.
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                to="/projets"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 text-cream hover:bg-ink/85"
              >
                Voir les releases <span aria-hidden="true">→</span>
              </Link>
              <Link
                to="/"
                state={{ section: "contact" }}
                className="inline-flex min-h-12 items-center rounded-full border border-ink px-6 hover:bg-sage"
              >
                Ouvrir un ticket
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="apropos-titre" className="border-t border-ink">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-18">
          <EnTeteSection code="US-01" nom="À propos" info="Statut : validée" />
          <h2 id="apropos-titre" className="font-display text-5xl md:text-7xl">
            À propos
          </h2>
          <div className="grid gap-6 md:grid-cols-12">
            <blockquote className="rounded-card bg-sage p-6 text-xl leading-snug md:col-span-7 md:p-10 md:text-[28px]">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest">
                User story
              </p>
              <p>
                En tant que <strong>recruteur</strong>, je cherche une Product
                Owner <strong>curieuse et adaptable</strong>, afin de faire
                avancer mes projets de <strong>transformation digitale</strong>.
              </p>
            </blockquote>
            <div className="flex flex-col gap-5 md:col-span-5">
              <p className="text-lg leading-relaxed">
                Après plus de trois ans en gestion de produit au sein d'une
                startup, je fais évoluer mon parcours vers la transformation
                digitale et l'innovation technologique. Année de mise à niveau à
                Epitech Lyon en 2026, puis MBA Strategic Project Management en
                2027.
              </p>
              <h3 className="border-t border-ink/35 pt-3 font-mono text-xs uppercase tracking-widest">
                Critères d'acceptation
              </h3>
              <ul className="flex flex-col gap-2.5 text-lg">
                <li>
                  <span aria-hidden="true" className="mr-3 font-mono">
                    [x]
                  </span>
                  3 ans en gestion de produit, jusqu'à Lead Product Manager
                </li>
                <li>
                  <span aria-hidden="true" className="mr-3 font-mono">
                    [x]
                  </span>
                  Coordination Conception, Développement et Produit
                </li>
                <li>
                  <span aria-hidden="true" className="mr-3 font-mono">
                    [x]
                  </span>
                  Anglais B2 (TOEIC)
                </li>
                <li>
                  <span aria-hidden="true" className="mr-3 font-mono">
                    [ ]
                  </span>
                  Alternance de 2 ans dès janvier 2027
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="competences-titre"
        className="border-t border-ink"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-18">
          <EnTeteSection
            code="US-02"
            nom="Compétences"
            info={`${savoirFaire.length + savoirs.length + enCours.length} items · source affichée`}
          />
          <h2
            id="competences-titre"
            className="font-display text-5xl md:text-7xl"
          >
            Backlog de compétences
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ColonneBacklog
              titre="Savoir-faire"
              items={savoirFaire}
              fond="bg-peach"
            />
            <ColonneBacklog titre="Savoirs" items={savoirs} fond="bg-sage" />
          </div>
          <div className="flex flex-col gap-4 rounded-card border border-dashed border-ink p-4 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-mono text-xs uppercase tracking-widest">
                En cours d'acquisition · Epitech 2026
              </h3>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 font-mono text-xs uppercase tracking-wider">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-progress"
                ></span>
                En cours
              </span>
            </div>
            <ul className="flex flex-wrap gap-2.5">
              {enCours.map((item) => (
                <li
                  key={item.code}
                  className="rounded-full bg-white px-4 py-2.5"
                >
                  <span className="font-mono text-xs tracking-wider">
                    {item.code}
                  </span>{" "}
                  · {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="roadmap-titre" className="border-t border-ink">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-18">
          <EnTeteSection
            code="US-03"
            nom="Parcours"
            info="Now · Next · Later"
          />
          <h2 id="roadmap-titre" className="font-display text-5xl md:text-7xl">
            Roadmap
          </h2>
          <ol className="grid gap-6 md:grid-cols-3">
            {roadmap.map((etape) => (
              <li
                key={etape.phase}
                className={`flex flex-col gap-4 rounded-card p-7 ${etape.fond}`}
              >
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest">
                  <span>{etape.phase}</span>
                  <span className="rounded-full border border-ink px-3 py-1.5">
                    {etape.date}
                  </span>
                </div>
                <h3 className="font-display text-[40px] leading-none">
                  {etape.titre}
                </h3>
                <p className="text-lg leading-snug">{etape.texte}</p>
                <p className="border-t border-ink pt-4 font-mono text-xs uppercase tracking-widest">
                  Statut : {etape.statut}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-titre"
        className="border-t border-ink"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-18">
          <EnTeteSection code="US-04" nom="Contact" info="Réponse sous 48 h" />
          <div className="grid gap-12 md:grid-cols-2 md:gap-24">
            <div className="flex flex-col gap-6">
              <h2
                id="contact-titre"
                className="font-display text-5xl md:text-7xl"
              >
                Ouvrir un ticket
              </h2>
              <p className="text-lg">
                Une opportunité d'alternance, un projet, une question : décrivez
                votre besoin, je m'en occupe.
              </p>
              <ul className="border-t border-ink">
                <li className="flex items-center justify-between gap-4 border-b border-ink py-4">
                  <span className="font-mono text-xs uppercase tracking-widest">
                    Email
                  </span>
                  <a
                    href="mailto:lucile.ober@pm.me"
                    className="text-lg underline underline-offset-4 hover:no-underline"
                  >
                    lucile.ober@pm.me
                  </a>
                </li>
                <li className="flex items-center justify-between gap-4 border-b border-ink py-4">
                  <span className="font-mono text-xs uppercase tracking-widest">
                    LinkedIn
                  </span>
                  <a
                    href="www.linkedin.com/in/lucile-ober-508067445"
                    className="text-lg underline underline-offset-4 hover:no-underline"
                  >
                    Profil LinkedIn
                  </a>
                </li>
                <li className="flex items-center justify-between gap-4 border-b border-ink py-4">
                  <span className="font-mono text-xs uppercase tracking-widest">
                    GitHub
                  </span>
                  <a
                    href="https://github.com/LucileOber01"
                    className="text-lg underline underline-offset-4 hover:no-underline"
                  >
                    LucileOber01
                  </a>
                </li>
                <li className="flex items-center justify-between gap-4 border-b border-ink py-4">
                  <span className="font-mono text-xs uppercase tracking-widest">
                    CV
                  </span>
                  <a
                    href={`${import.meta.env.BASE_URL}cv-lucile-ober.pdf`}
                    download
                    className="text-lg underline underline-offset-4 hover:no-underline"
                  >
                    Télécharger (PDF)
                  </a>
                </li>
              </ul>
            </div>
            <FormulaireContact />
          </div>
        </div>
      </section>
    </>
  );
}

export default Accueil;
