<template>
  <div>
    <button
      v-on:click="onClick"
      @mouseover="passei"
    >Enviar</button>
  </div>

  <form action="" @submit.prevent="submit">
    <input type="text" @keyup="digitei">
    <button type="submit">Enviar form</button>
  </form>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
    onClick() {
      console.log('Cliquei');
    },
    passei() {
      console.log('passei');
    },
    submit() {
      console.log('enviei o form')
    },
    digitei(event) {
      console.log('digitei no form', event.target.value)
    }
  }
}
</script>

<style>
</style>
