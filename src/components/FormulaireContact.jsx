function FormulaireContact() {
  return (
    <form className="flex flex-col gap-5 rounded-card bg-white p-6 md:p-8">
      <div className="flex justify-between font-mono text-xs uppercase tracking-widest">
        <span>Nouveau ticket</span>
        <span aria-hidden="true">#TCK-0001</span>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="nom" className="text-sm">Nom</label>
        <input id="nom" name="nom" type="text" required autoComplete="name" placeholder="Votre nom" className="min-h-12 rounded-xl border border-muted px-4 text-lg placeholder:text-ink/70" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="votre@email.fr" className="min-h-12 rounded-xl border border-muted px-4 text-lg placeholder:text-ink/70" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="type" className="text-sm">Type de demande</label>
        <select id="type" name="type" className="min-h-12 rounded-xl border border-muted bg-white px-4 text-lg">
          <option>Alternance</option>
          <option>Projet</option>
          <option>Question</option>
          <option>Autre</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm">Message</label>
        <textarea id="message" name="message" required rows="5" placeholder="Décrivez votre besoin" className="rounded-xl border border-muted px-4 py-3 text-lg placeholder:text-ink/70"></textarea>
      </div>

      <button type="submit" className="mt-2 inline-flex min-h-12 items-center gap-2 self-start rounded-full bg-ink px-6 text-cream hover:bg-ink/85">
        Créer le ticket <span aria-hidden="true">→</span>
      </button>
    </form>
  )
}

export default FormulaireContact