<template>
  <div>
    <AppHeader v-if="showHeader"/>
    <h1>Hello World!</h1>
    <button @click="showHeader = !showHeader">{{ showHeader ? 'Esconder' : 'Mostrar' }}</button>
    <input 
      type="text"
      v-model="name"
    >
    {{ name }}
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader
  },
  data() {
    return {
      name: 'Augusto',
      showHeader: true
    }
  },

  // HOOKS
  // beforeCreate() {
  //   console.log('beforeCreate', {
  //     Estado: this.name,
  //     DOM: this.$el
  //   })
  // },
  // created() {
  //   console.log('created', {
  //     Estado: this.name,
  //     DOM: this.$el
  //   })
  // },
  // beforeMount() {
  //   console.log('beforeMount', {
  //     Estado: this.name,
  //     DOM: this.$el
  //   })
  // },
  // mounted() {
  //   console.log('mounted', {
  //     Estado: this.name,
  //     DOM: this.$el
  //   })
  // },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },


  watch: {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style></style>
