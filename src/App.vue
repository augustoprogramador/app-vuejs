<template>
  <AppHook v-if="showAppHook"/>
  <br/>
  <br/>
  <button @click="showAppHook = !showAppHook">Destruir Hook</button>
  <br/>
  <img @click="changeName()" alt="Vue logo" src="./assets/logo.png">
  {{ name }}<br/><br/>
  {{ user.firstName }}<br/><br/>
  {{ admin.admin }}<br/><br/>
  <br/>
  Nome Completo: {{ fullName }} <button @click="user.firstName = 'Ludimila'">Atualizar nome</button>
</template>

<script>
import { computed, reactive, ref, watch } from 'vue';
import AppHook from './components/AppHook.vue';

export default {
  name: 'App',
  components: {
    AppHook
  },
  // Options API
  /**
   * computed: {
   *    fullName() {
   *      return '';
   *    }
   * }
   */
  // Alternativa ao option API que só pode criar atributos reativos
  setup() { // composition API permite controlar o que desejamos que seja reativo
    let name = 'Augusto';

    const user = reactive({
      firstName: 'Augusto',
      lastName: 'Camargo'
    });

    const admin = ref({
      admin: 'Admin',
      login: 'MASTER'
    });

    const showAppHook = ref(true);

    const changeName = () => {
      name = 'Augusto Camargo';
      user.firstName = 'Augusto S';
      // Precisamos usar o .value quando usamos o red, pois ele encapsula o objeto
      // No entanto, não necessitamos disso no template
      admin.value.admin = 'XXXXXX';
    }

    const fullName = computed(() => {
      return `${user.firstName} ${user.lastName}`
    });

    watch(admin, () => {
      console.log('estou de olho');
    });
    // }, {deep: true}); // para observar profundamente, não necessário quando a variável for reactive()
    // Outra opção seria retornar o atributo que queremos observar: () => admin.value.firstName

    return {
      name,
      user,
      admin,
      fullName,
      showAppHook,
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
