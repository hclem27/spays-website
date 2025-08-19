<template>
  <section id="contact" class="contact max-w-3xl mx-auto px-6 py-20 bg-gray-50">
    <h2 class="text-4xl font-bold mb-4 text-center text-gray-900">Contact & Offre</h2>
    <p class="text-center text-gray-600 mb-8 max-w-xl mx-auto">
      Lancez votre site web vitrine professionnel pour seulement **599 €**.  
      Cochez les options si vous voulez ajouter du SEO, un back‑office ou de l’automatisation.  
      Le prix s’ajuste automatiquement.
    </p>

    <form @submit.prevent="handleSubmit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="name">Nom complet</label>
        <input id="name" type="text" v-model="form.name" required class="input-field" :disabled="loading" />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">Email</label>
        <input id="email" type="email" v-model="form.email" required class="input-field" :disabled="loading" />
      </div>

      <div class="mb-4">
        <p class="font-bold mb-2">Options (ajoutez au 599 €) :</p>
        <div v-for="opt in options" :key="opt.key" class="flex items-center mb-2">
          <input type="checkbox" :id="opt.key" v-model="form.selectedOptions" :value="opt.key" class="mr-2" />
          <label :for="opt.key" class="text-gray-700">{{ opt.label }} (+{{ opt.price }} €)</label>
        </div>
      </div>

      <div class="mb-6 text-xl font-bold">
        Prix estimé : {{ totalPrice }} €
      </div>

      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="message">Précisez votre projet / questions</label>
        <textarea id="message" v-model="form.message" rows="4" required class="input-field" :disabled="loading"></textarea>
      </div>

      <button type="submit" class="btn-submit" :disabled="loading">
        {{ loading ? "Envoi..." : "Envoyer ma demande" }}
      </button>

      <transition name="fade">
        <div v-if="successMessage || errorMessage" class="mt-4 text-center">
          <p v-if="successMessage" class="text-green-600 font-semibold">{{ successMessage }}</p>
          <p v-if="errorMessage" class="text-red-600 font-semibold">{{ errorMessage }}</p>
        </div>
      </transition>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      basePrice: 599,
      options: [
        { key: 'seo', label: 'Pack SEO', price: 300 },
        { key: 'backoffice', label: 'Back‑office personnalisé', price: 500 },
        { key: 'automation', label: 'Automatisation / API', price: 500 },
      ],
      form: {
        name: '',
        email: '',
        message: '',
        selectedOptions: []
      },
      loading: false,
      successMessage: '',
      errorMessage: ''
    };
  },
  computed: {
    totalPrice() {
      return this.basePrice + this.form.selectedOptions.reduce((sum, key) => {
        const opt = this.options.find(o => o.key === key);
        return sum + (opt ? opt.price : 0);
      }, 0);
    }
  },
  methods: {
    async handleSubmit() {
      this.loading = true;
      this.successMessage = this.errorMessage = '';
      try {
        const payload = {
          ...this.form,
          totalPrice: this.totalPrice
        };
        const res = await fetch('https://formspree.io/f/xgvygnrd', {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          this.successMessage = `Merci ${this.form.name}, votre demande (≈${this.totalPrice} €) a bien été envoyée !`;
          this.form = { name: '', email: '', message: '', selectedOptions: [] };
        } else {
          this.errorMessage = "Erreur lors de l'envoi, merci de réessayer.";
        }
      } catch {
        this.errorMessage = "Impossible d’envoyer votre demande. Vérifiez votre connexion.";
      } finally {
        this.loading = false;
        setTimeout(() => {
          this.successMessage = this.errorMessage = '';
        }, 6000);
      }
    }
  }
};
</script>

<style>
.input-field {
  width: 100%;
  border: 1px solid #d1d5db;
  padding: 0.75rem;
  border-radius: 0.375rem;
  background: #fff;
  transition: ring 0.3s;
}
.input-field:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.5);
}
.btn-submit {
  width: 100%;
  background: #000;
  color: #fff;
  padding: 0.75rem;
  border: none;
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}
.btn-submit:hover {
  background: #111;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
