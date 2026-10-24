const stylesBadge = {
  Pro: 'border border-ink',
  Initiative: 'bg-ink text-cream',
  Epitech: 'bg-sage',
  Personnel: 'bg-peach',
}

function CarteRelease({ release }) {
  const lignes = [
    ['Contexte', release.contexte],
    ['Objectif', release.objectif],
    ['Rôle', release.role],
    ['Résultat', release.resultat],
    ['Technos', release.technos],
  ]

  return (
    <article className="flex h-full flex-col gap-5 rounded-card bg-white p-6">
      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest">
        <span>{release.code}</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-ink px-3 py-1.5">
          <span aria-hidden="true" className={`size-2 rounded-full ${release.statut === 'Livré' ? 'bg-success' : 'bg-progress'}`}></span>
          {release.statut}
        </span>
      </div>

      <div aria-hidden="true" className={`h-50 rounded-2xl ${release.visuel}`}></div>

      <div className="flex flex-col items-start gap-3">
        <span className={`rounded-full px-3 py-1 text-sm ${stylesBadge[release.badge]}`}>{release.badge}</span>
        <h2 className="font-display text-4xl leading-none">{release.titre}</h2>
      </div>

      <dl className="border-t border-ink">
        {lignes.map(([label, valeur]) => (
          <div key={label} className="grid grid-cols-[100px_1fr] gap-4 border-b border-ink py-3">
            <dt className="font-mono text-xs uppercase tracking-widest">{label}</dt>
            <dd>{valeur}</dd>
          </div>
        ))}
      </dl>

      <div>
        <h3 className="mb-3 font-mono text-xs uppercase tracking-widest">Compétences mobilisées</h3>
        <ul className="flex flex-wrap gap-2">
          {release.competences.map((competence) => (
            <li key={competence} className="rounded-full border border-ink/35 bg-cream px-3 py-1.5 text-sm">{competence}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default CarteRelease