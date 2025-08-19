<template>
  <section
    id="services"
    class="py-20 bg-white px-6"
    itemscope
    itemtype="https://schema.org/Service"
  >
    <h2
      class="text-5xl font-bold text-center mb-16 text-gray-900 relative inline-block
        after:absolute after:left-1/2 after:-bottom-3 after:-translate-x-1/2
        after:w-24 after:h-1 after:bg-indigo-600 rounded"
      itemprop="name"
    >
      Mes services
    </h2>

    <meta itemprop="serviceType" content="Développement web, SEO, design UX, support technique, automatisation" />

    <div class="max-w-6xl mx-auto grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <!-- CARD -->
      <article
        v-for="(service, index) in services"
        :key="index"
        class="group flex flex-col items-center text-center p-8 border rounded-lg shadow-md hover:shadow-xl hover:bg-gray-50 transition min-h-[360px]"
        itemscope
        itemprop="hasOfferCatalog"
        itemtype="https://schema.org/OfferCatalog"
      >
        <div class="w-10 h-10 text-black mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:text-indigo-600" v-html="service.icon" />

        <h3 class="text-2xl font-semibold mb-4" itemprop="name">
          {{ service.title }}
        </h3>
        <p itemprop="description" class="mb-4">
          {{ service.description }}
        </p>
        <a
        href="https://calendly.com/cl-heurtevent"
        target="_blank"
        rel="noopener"
        class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
      >
        Prendre rendez-vous
      </a>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    scrollToContact() {
      const section = document.getElementById("contact")
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  },
  data() {
    return {
      services: [
  {
    title: 'Offre Flash – Site vitrine en 7 jours',
    description:
      'Un site pro moderne, 4 pages, responsive, formulaire de contact, SEO de base – livré clé en main pour seulement 599€.',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M8 4v16"/><path d="M16 10H8"/></svg>`,
    cta: true
  },
  {
    title: 'Automatisation sur mesure',
    description:
      'Simplifiez votre quotidien grâce à des outils no-code / API sur-mesure. Gagnez du temps, réduisez vos coûts.',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M9 17v-6a3 3 0 0 1 6 0v6"/><path d="M5 21h14"/><path d="M12 3v4"/></svg>`
  },
  {
    title: 'Design & Expérience Utilisateur',
    description:
      'Un design clair, responsive et orienté conversion pour renforcer la crédibilité et l’impact de votre site.',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>`
  }
]

    }
  }
}
</script>
