<template>
  <section
    id="contact"
    class="contact max-w-3xl mx-auto px-6 py-20"
    itemscope
    itemtype="https://schema.org/ContactPage"
    aria-labelledby="contact-title"
  >
    <h2
      id="contact-title"
      class="text-4xl font-bold mb-4 text-center text-gray-900"
    >
      Contactez-moi
    </h2>

    <p class="text-center text-gray-600 mb-8 max-w-xl mx-auto">
      Vous avez un projet de site vitrine, une application web ou un SaaS à
      développer ? Contactez-moi et échangeons sur vos idées. Je réponds
      généralement sous 24 heures.
    </p>

    <form
      @submit.prevent="handleSubmit"
      itemprop="potentialAction"
      itemscope
      itemtype="https://schema.org/CommunicateAction"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <!-- Nom -->
      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="name">
          Nom complet
        </label>
        <input
          id="name"
          type="text"
          v-model="form.name"
          required
          aria-label="Nom complet"
          class="bg-white border border-gray-300 rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          :disabled="loading"
        />
      </div>

      <!-- Email -->
      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          v-model="form.email"
          required
          aria-label="Adresse email"
          class="bg-white border border-gray-300 rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          :disabled="loading"
        />
      </div>

      <!-- Message -->
      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="message">
          Message
        </label>
        <textarea
          id="message"
          v-model="form.message"
          rows="5"
          required
          aria-label="Votre message"
          class="bg-white border border-gray-300 rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
          :disabled="loading"
        ></textarea>
      </div>

      <!-- Bouton d'envoi -->
      <button
        type="submit"
        class="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition"
        :disabled="loading"
        aria-label="Envoyer le message"
      >
        {{ loading ? "Envoi..." : "Envoyer" }}
      </button>

      <!-- Messages de réponse -->
      <transition name="fade">
        <div>
          <p
            v-if="successMessage"
            class="mt-6 text-green-600 font-semibold text-center"
            role="status"
          >
            {{ successMessage }}
          </p>
          <p
            v-if="errorMessage"
            class="mt-6 text-red-600 font-semibold text-center"
            role="alert"
          >
            {{ errorMessage }}
          </p>
        </div>
      </transition>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      successMessage: '',
      errorMessage: '',
      loading: false
    }
  },
  methods: {
    async handleSubmit() {
      this.successMessage = ''
      this.errorMessage = ''
      this.loading = true

      try {
        const response = await fetch('https://formspree.io/f/xgvygnrd', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        })

        if (response.ok) {
          this.successMessage = `Merci ${this.form.name}, votre message a bien été envoyé !`
          this.form.name = ''
          this.form.email = ''
          this.form.message = ''
        } else {
          this.errorMessage = "Une erreur s'est produite. Veuillez réessayer."
        }
      } catch (error) {
        this.errorMessage = "Impossible d’envoyer le message. Vérifiez votre connexion ou réessayez plus tard."
      } finally {
        this.loading = false
        setTimeout(() => {
          this.successMessage = ''
          this.errorMessage = ''
        }, 5000)
      }
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
