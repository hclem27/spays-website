<template>
  <section
    id="whyme"
    class="why-me bg-white py-20 px-6 text-gray-900"
    itemscope
    itemtype="https://schema.org/CreativeWork"
  >
    <h2
      class="text-5xl font-bold text-center mb-16 relative inline-block
      after:absolute after:left-1/2 after:-bottom-3 after:-translate-x-1/2
      after:w-24 after:h-1 after:bg-indigo-600 rounded"
      itemprop="headline"
    >
      Pourquoi choisir Spays ?
    </h2>

    <meta itemprop="description" content="Découvrez les résultats concrets obtenus par mes clients : +30% de chiffre d’affaires, +25% de conversion, -15% de coûts grâce à des solutions digitales sur mesure." />

    <div class="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
      <article
        v-for="(stat, index) in stats"
        :key="index"
        class="flex flex-col items-center text-center p-8 border rounded-lg shadow-md hover:shadow-xl transition min-h-[320px]"
        itemscope
        itemtype="https://schema.org/HowToTip"
      >
        <div
          class="w-14 h-14 mb-6 text-black animate-bounce"
          v-html="stat.icon"
          aria-hidden="true"
        />
        <h3 class="text-3xl font-bold mb-3" itemprop="name">{{ stat.headline }}</h3>
        <p class="text-lg font-medium mb-2" itemprop="text">{{ stat.sub }}</p>
        <p class="text-gray-600">{{ stat.desc }}</p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        {
          headline: "+30%",
          sub: "Augmentation moyenne du chiffre d’affaires",
          desc: "Grâce à nos solutions digitales personnalisées et optimisées.",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7" /></svg>`
        },
        {
          headline: "+25%",
          sub: "Hausse de conversion clients",
          desc: "Grâce à une UX design pensée pour votre cible.",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10l6 6 8-16" /></svg>`
        },
        {
          headline: "-15%",
          sub: "Réduction des coûts opérationnels",
          desc: "Grâce à une automatisation intelligente et un support dédié.",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8v4l3 3" /><path d="M12 20h9" /></svg>`
        }
      ]
    };
  }
};
</script>
