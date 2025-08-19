<template>
  <div>
    <!-- Header -->
    <header
      class="fixed top-0 left-0 right-0 bg-white shadow-md z-50"
      role="banner"
      itemscope
      itemtype="https://schema.org/WPHeader"
    >
      <nav
        class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4"
        aria-label="Navigation principale"
      >
        <!-- Logo -->
        <a href="#hero" class="text-2xl font-extrabold font-logo cursor-pointer text-black" aria-label="Retour à l’accueil">
          Spays
        </a>

        <!-- Menu -->
        <ul class="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#about" class="hover:text-black transition" aria-label="Section à propos">À propos</a>
          </li>
          <li>
            <a href="#services" class="hover:text-black transition" aria-label="Section services">Services</a>
          </li>
          <li>
            <a href="#contact" class="hover:text-black transition" aria-label="Section contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Hero section -->
    <section
      id="hero"
      class="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 text-center pt-24"
      itemscope
      itemtype="https://schema.org/WebPage"
    >
      <h1
        class="text-5xl md:text-6xl font-extrabold text-black leading-tight max-w-4xl mb-6"
        itemprop="headline"
      >
        Votre partenaire digital pour booster votre chiffre d'affaires
      </h1>

      <p class="text-lg md:text-xl text-gray-700 max-w-2xl mb-10" itemprop="description">
        Création de sites web modernes, applications sur mesure et expériences utilisateur optimisées pour maximiser vos résultats.
      </p>
      <a
        href="https://calendly.com/cl-heurtevent"
        target="_blank"
        rel="noopener"
        class="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition"
        aria-label="Page calendly"
      >
        Prendre rendez-vous
      </a>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToSection(id) {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

.font-logo {
  font-family: "Poppins", sans-serif;
}
</style>
