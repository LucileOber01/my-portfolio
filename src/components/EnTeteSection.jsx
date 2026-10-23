function EnTeteSection({ code, nom, info }) {
  return (
    <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest">
      <span className="rounded bg-ink px-2.5 py-1.5 text-cream">{code}</span>
      <span>{nom}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-ink/35"></span>
      <span className="hidden md:inline">{info}</span>
    </div>
  )
}

export default EnTeteSection