function Footer() {
  return (
    <footer className="border-t border-ink">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 md:gap-3">
        <div className="flex justify-center font-mono text-xs uppercase tracking-widest md:justify-between">
          <p>
            © 2026 Lucile Ober<span className="md:hidden"> · v2026.10</span>
          </p>
          <p className="hidden md:block">Build v2026.10 · React + Tailwind</p>
        </div>
        <p className="text-center text-sm md:text-left">
          Crédits : polices League Gothic, Questrial et IBM Plex Mono (Google
          Fonts, licence OFL) · logo Discord © Discord Inc. · formulaire
          Formspree · hébergement GitHub Pages{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
