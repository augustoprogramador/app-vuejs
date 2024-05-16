<template>
  <img @click="changeName()" alt="Vue logo" src="./assets/logo.png">
  {{ name }}
  {{ admin.admin }}
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import { reactive, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  // Alternativa ao option API que só pode criar atributos reativos
  setup() { // composition API permite controlar o que desejamos que seja reativo
    let name = 'Augusto';

    const user = reactive({
      firstName: 'Augusto',
      lastName: 'Camargo'
    });

    const admin = ref({
      admin: 'Augusto',
      login: 'Camargo'
    });

    const changeName = () => {
      name = 'Augusto Camargo';
      user.firstName = 'Augusto S';
      // Precisamos usar o .value quando usamos o red, pois ele encapsula o objeto
      // No entanto, não necessitamos disso no template
      admin.value.admin = 'XXXXXX';
    }

    return {
      name,
      user,
      admin,
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
