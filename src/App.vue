<template>
  <h3
    :class="{'title-home': isHome}"
  >
    Curso Vue 3
  </h3>

  <p
    :class="[{'text': false}, 'text2']"
  >
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum provident iusto velit tempore nobis quis.
  </p>

  <div 
    class="todo-item"
    v-for="(item, index) in todos"
    v-bind:key="item.id"
  >
    <div>
      <img 
        :src="item.imgSrc"
        v-bind:alt="item.imgAlt"
      />
    </div>
    {{ index }} - {{ item.title }}
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
      classVar: 'title',
      pClasses: 'text',
      isHome: true,
      todos: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false,
          "imgSrc": "https://placehold.co/150",
          "imgAlt": "Lorem ipsum dolor."
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false,
          "imgSrc": "https://placehold.co/150",
          "imgAlt": "Lorem ipsum dolor."
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        }
      ]
    }
  }
}
</script>

<style>
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
