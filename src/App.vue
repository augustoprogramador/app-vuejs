<template>
  <img @click="changeName()" alt="Vue logo" src="./assets/logo.png">
  {{ name }}
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  // Alternativa ao option API que só pode criar atributos reativos
  setup() { // composition API permite controlar o que desejamos que seja reativo
    let name = 'Augusto';

    const changeName = () => {
      name = 'Augusto Camargo';
    }

    return {
      name,
      changeName,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
