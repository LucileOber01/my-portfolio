function Projets() {
  return (
    <section aria-labelledby="projets-titre" className="border-b border-ink">
      <div className="mx-auto max-w-7xl px-6 pt-5 pb-12">
        <div className="flex justify-between gap-4 border-b border-ink/35 pb-5 font-mono text-xs uppercase tracking-widest">
          <p>REL · Releases</p>
          <p>05 releases · 5 livrées</p>
        </div>
        <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h1 id="projets-titre" className="font-display text-8xl leading-[0.82] md:text-[180px]">
            Pro<span className="text-transparent [-webkit-text-stroke:2px_var(--color-ink)]">jets</span>
          </h1>
          <p className="max-w-md text-lg leading-snug">
            Mes expériences transformées en projets. Chaque release a son cartel et renvoie aux compétences du backlog.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projets