<template>
  <footer
    class="w-full bg-black text-gray-300 py-8 px-6"
    role="contentinfo"
    itemscope
    itemtype="https://schema.org/WPFooter"
  >
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Texte à gauche -->
      <div class="text-center md:text-left space-y-1">
        <p>© 2025 <span itemprop="copyrightHolder">Spays</span>. Tous droits réservés.</p>
        <p>
          Développé par
          <span class="text-white font-semibold" itemprop="creator" itemscope itemtype="https://schema.org/Person">
            <span itemprop="name">Clément Heurtevent</span>
          </span>.
        </p>
      </div>

      <!-- Icônes à droite -->
      <div class="flex items-center gap-6" aria-label="Liens vers les réseaux sociaux et soutien">
        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/cheurtevent"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Profil LinkedIn de Clément Heurtevent"
          class="text-gray-300 hover:text-indigo-500 transition"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v12h-4V8zm7 0h3.75v1.71h.05c.52-1 1.79-2.05 3.7-2.05 3.96 0 4.69 2.6 4.69 5.99V20h-4v-6.18c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.25V20h-4V8z"/>
          </svg>
        </a>

        <!-- GitHub -->
        <a
          href="https://github.com/hclem27"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Profil GitHub de Clément Heurtevent"
          class="text-gray-300 hover:text-indigo-500 transition"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 .5C5.7.5.6 5.6.6 12.1c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.5-3.9-1.5-.6-1.4-1.5-1.8-1.5-1.8-1.2-.8.1-.8.1-.8 1.4.1 2.2 1.4 2.2 1.4 1.2 2.2 3.3 1.6 4.1 1.2.1-.9.5-1.6.9-2-2.5-.3-5.2-1.2-5.2-5.4 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.5.1-3 0 0 1-.3 3.3 1.3a11.5 11.5 0 0 1 6 0C17 5.2 18 5.5 18 5.5c.6 1.5.2 2.7.1 3a4.2 4.2 0 0 1 1.2 3c0 4.3-2.7 5.1-5.3 5.4.6.5 1 1.3 1 2.6v3.9c0 .3.2.6.8.5a11.5 11.5 0 0 0 7.9-10.9C23.4 5.6 18.3.5 12 .5z"
            />
          </svg>
        </a>

        <!-- Buy Me a Coffee -->
        <a
          href="https://coff.ee/spays"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Soutenir Clément Heurtevent sur Buy Me a Coffee"
          class="hover:opacity-80 transition"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me a Coffee"
            class="h-8"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
