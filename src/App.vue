<template>
  <AppProducts/>
  <button
    @click="alterar"
  >Alterar</button>
</template>

<script>
import AppProducts from "@/components/Products/AppProducts.vue";

export default {
  name: 'App',
  components: {
    AppProducts
  },
  data() {
    return {
      
    }
  },
  methods: {
    alterar() {
      const newUser = {
        firstName: 'Ludimila',
        lastName: 'Macedo',
        email: 'ludimila@macedo.com'
      }
      this.$store.commit('storeUser', newUser);
    }
  },
  created() {
    console.log(this.$store);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
