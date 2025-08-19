<template>
  <main>
    <section id="about" class="py-20 bg-white px-6" itemscope itemtype="https://schema.org/Person">
      <div
        class="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12"
      >
        <!-- Image ronde -->
        <div class="flex-shrink-0">
          <img
            :src="aboutImage"
            alt="Clément Heurtevent, développeur web"
            class="w-48 h-48 rounded-full object-cover shadow-lg hover:scale-105 transition-transform"
            itemprop="image"
          />
        </div>

        <!-- Texte -->
        <article class="text-center md:text-left max-w-xl">
          <h1
            class="text-5xl font-extrabold text-gray-900 mb-4 relative inline-block after:absolute after:left-0 after:-bottom-2 after:w-20 after:h-1 after:bg-indigo-600 rounded"
            itemprop="name"
          >
            Qui suis-je ?
          </h1>

          <p class="text-lg leading-relaxed text-gray-700 mb-6" itemprop="description">
            Je m’appelle <span itemprop="givenName">Clément</span>, passionné par le développement web et la création digitale depuis plusieurs années.
            J’aime transformer des idées complexes en solutions simples et efficaces, qui fonctionnent vraiment pour mes clients.
          </p>
          <p class="text-lg leading-relaxed text-gray-700 mb-6 italic">
            Plus qu’un développeur, je suis un partenaire engagé, prêt à vous accompagner pour faire grandir votre projet et booster votre activité.
          </p>

          <button
            @click="scrollToContact"
            class="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition"
            aria-label="Me contacter"
          >
            Me contacter
          </button>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
import aboutImage from '../assets/IMG_6466.PNG'

export default {
  name: "About",
  data() {
    return {
      aboutImage
    }
  },
  methods: {
    scrollToContact() {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
}
</script>
