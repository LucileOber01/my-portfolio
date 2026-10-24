import { useState } from 'react'

const FORMSPREE_URL = 'https://formspree.io/f/xaeenqyn'

function FormulaireContact() {
  const [statut, setStatut] = useState('attente')
  const [ticket, setTicket] = useState(null)

  async function envoyer(event) {
    event.preventDefault()
    setStatut('envoi')
    const donnees = new FormData(event.target)
    try {
      const reponse = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: donnees,
        headers: { Accept: 'application/json' },
      })
      if (!reponse.ok) throw new Error()
      setTicket({ nom: donnees.get('nom'), type: donnees.get('type') })
      setStatut('cree')
    } catch {
      setStatut('erreur')
    }
  }

  return (
    <div aria-live="polite">
      {statut === 'cree' ? (
        <div className="flex flex-col gap-5 rounded-card bg-white p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-widest">
            <span>Ticket créé</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink px-3 py-1.5">
              <span aria-hidden="true" className="size-2 rounded-full bg-progress"></span>
              En attente de réponse
            </span>
          </div>
          <h3 className="font-display text-4xl">Merci, votre ticket est créé.</h3>
          <p className="text-lg">Je reviens vers vous sous 48 h à l'adresse indiquée.</p>
          <dl className="border-t border-ink">
            <div className="flex justify-between gap-4 border-b border-ink py-3">
              <dt className="font-mono text-xs uppercase tracking-widest">Type</dt>
              <dd className="text-lg">{ticket.type}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-ink py-3">
              <dt className="font-mono text-xs uppercase tracking-widest">De</dt>
              <dd className="text-lg">{ticket.nom}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-ink py-3">
              <dt className="font-mono text-xs uppercase tracking-widest">Réponse</dt>
              <dd className="text-lg">Sous 48 h</dd>
            </div>
          </dl>
          <button type="button" onClick={() => setStatut('attente')} className="inline-flex min-h-12 items-center self-start rounded-full border border-ink px-6 hover:bg-sage">
            Ouvrir un autre ticket
          </button>
        </div>
      ) : (
        <form onSubmit={envoyer} className="flex flex-col gap-5 rounded-card bg-white p-6 md:p-8">
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

          {statut === 'erreur' && (
            <p className="text-error">L'envoi a échoué. Réessayez, ou écrivez-moi directement à lucile.ober@pm.me.</p>
          )}

          <button type="submit" disabled={statut === 'envoi'} className="mt-2 inline-flex min-h-12 items-center gap-2 self-start rounded-full bg-ink px-6 text-cream hover:bg-ink/85 disabled:opacity-60">
            {statut === 'envoi' ? 'Envoi en cours…' : <>Créer le ticket <span aria-hidden="true">→</span></>}
          </button>
        </form>
      )}
    </div>
  )
}

export default FormulaireContact