<template>
  
  <div>
    <input
      v-model="name"
      type="text"
    >
    <br/>
    {{ name }}
  </div>
  
  <div>
    <input
      v-model="pets"
      type="checkbox"
      id="cachorro"
      value="Cachorro"
    >
    <label for="cachorro">Cachorro</label>
    <br/>
    <input
      v-model="pets"
      type="checkbox"
      id="gato"
      value="Gato"
    >
    <label for="gato">Gato</label>
    <br/>
    {{ pets }}
  </div>
  
  <div>
    <select 
      name="tipo_residencia" 
      id="tipo_residencia"
      v-model="tipo_residencia"
    >
      <option value="">Escolha uma opção</option>
      <option value="casa">Casa</option>
      <option value="apartamento">Apartamento</option>
      <option value="trailer">Trailer</option>
    </select>
    <br/>
    {{ tipo_residencia }}
  </div>
  
  <div>
    <input
      v-model="newsLetter"
      type="radio"
      name="newsLetter"
      value="Sim"
    >
    <br/>
    <input
      v-model="newsLetter"
      type="radio"
      name="newsLetter"
      value="Não"
    >
    <br/>
    {{ newsLetter }}
  </div>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      name: 'Augusto Camargo',
      pets: [],
      tipo_residencia: '',
      newsLetter: ''
    }
  }
}
</script>

<style>

div input {
  margin: 15px;
}

.text{
  color: gray;
}

.text2{
  font-weight: bolder;
}

.title-home {
  font-size: 40px;
  color: green;
}

.title {
  color: blue;
  font-size: 24px;
}
.todo-item {
  background-color: #000;
  color: #fff;
  margin: 0 0 5px;
  padding: 3px 6px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
