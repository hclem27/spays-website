<template>
  <div class="font-sans text-gray-900">
    <Hero />
    <About />
    <Services />
    <WhyMe />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Hero from './Hero.vue'
import About from './About.vue'
import Services from './Services.vue'
import WhyMe from './Whyme.vue'
import Contact from './Contact.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Hero,
    About,
    Services,
    WhyMe,
    Contact,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #f9fafb;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
