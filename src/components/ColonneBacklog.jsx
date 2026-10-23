function ColonneBacklog({ titre, items, fond }) {
  return (
    <div className={`flex flex-col gap-2.5 rounded-card p-6 ${fond}`}>
      <h3 className="flex justify-between px-1 pb-2 font-mono text-xs uppercase tracking-widest">
        <span>{titre}</span>
        <span>{String(items.length).padStart(2, '0')}</span>
      </h3>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item.code} className="flex items-center gap-4 rounded-xl bg-white px-4 py-3.5 text-lg">
            <span className="w-12 shrink-0 font-mono text-xs tracking-wider">{item.code}</span>
            <span className="flex-1">{item.label}</span>
            {item.source && (
              <span className="font-mono text-xs uppercase tracking-wider">↳ {item.source}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ColonneBacklog