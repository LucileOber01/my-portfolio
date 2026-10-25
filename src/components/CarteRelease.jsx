const stylesBadge = {
  Pro: "border border-ink",
  Initiative: "bg-ink text-cream",
  Epitech: "bg-sage",
  Personnel: "bg-peach",
};

function CarteRelease({ release }) {
  const lignes = [
    ["Contexte", release.contexte],
    ["Objectif", release.objectif],
    ["Rôle", release.role],
    ["Résultat", release.resultat],
    ["Technos", release.technos],
  ];

  return (
    <article className="group flex h-full flex-col gap-5 rounded-card bg-white p-6 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgb(48_63_60/0.4)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest">
        <span>{release.code}</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-ink px-3 py-1.5">
          <span
            aria-hidden="true"
            className={`size-2 rounded-full ${release.statut === "Livré" ? "bg-success" : "bg-progress"}`}
          ></span>
          {release.statut}
        </span>
      </div>
      <div
        className={`flex h-50 items-center justify-center overflow-hidden rounded-2xl ${release.visuel}`}
      >
        {release.image ? (
          <img
            src={release.image}
            alt={release.alt}
            loading="lazy"
            className={`transition duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${release.logo ? "h-20 w-auto rounded-2xl" : "size-full object-cover object-top"}`}
          />
        ) : (
          <div className="flex flex-col items-center gap-1">
            <span
              aria-hidden="true"
              className="font-display text-8xl leading-[0.9] text-transparent [-webkit-text-stroke:1.5px_var(--color-ink)]"
            >
              {release.code}
            </span>
            <span className="font-mono text-xs uppercase tracking-widest">
              {release.mention}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col items-start gap-3">
        <span
          className={`rounded-full px-3 py-1 text-sm ${stylesBadge[release.badge]}`}
        >
          {release.badge}
        </span>
        <h2 className="font-display text-4xl leading-none">{release.titre}</h2>
      </div>
      <dl className="border-t border-ink">
        {lignes.map(([label, valeur]) => (
          <div
            key={label}
            className="grid grid-cols-[100px_1fr] gap-4 border-b border-ink py-3"
          >
            <dt className="font-mono text-xs uppercase tracking-widest">
              {label}
            </dt>
            <dd>{valeur}</dd>
          </div>
        ))}
      </dl>
      <div>
        <h3 className="mb-3 font-mono text-xs uppercase tracking-widest">
          Compétences mobilisées
        </h3>
        <ul className="flex flex-wrap gap-2">
          {release.competences.map((competence) => (
            <li
              key={competence}
              className="rounded-full border border-ink/35 bg-cream px-3 py-1.5 text-sm"
            >
              {competence}
            </li>
          ))}
        </ul>
      </div>
      {release.codeSource && (
        <a
          href={release.codeSource}
          className="mt-auto self-start underline underline-offset-4 hover:no-underline"
        >
          Code source sur GitHub <span aria-hidden="true">→</span>
        </a>
      )}
    </article>
  );
}

export default CarteRelease;