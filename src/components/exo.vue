<template>
    <p>{{ value }}</p>
    <button onclick="incremente"> +1</button>
    <button onclick="decrement"> -1</button>
</template>

<script>
export default {
  name: 'Exo',
  data() {
    return {
      value: 0
    };
  },
  methods: {
    incremente() {
      this.value++;
    },
    decrement() {
      this.value--;
    }
  }
};
</script>