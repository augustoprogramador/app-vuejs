<template>
  <input v-model="user.firstName" type="text" @keyup="digitei">
  <input v-model="user.lastName" type="text" @keyup="digitei">
  <h1>{{ fullName }}</h1>

  <h2>Todos Incompletas</h2>
  <div 
    v-for="todo in unfinishedTodos"
    v-bind:key="todo.id"
  >
    {{ todo.title }}
  </div>

  <h2>Todos Completas</h2>
  <div 
    v-for="todo in finishedTodos"
    v-bind:key="todo.id"
  >
    {{ todo.title }}
  </div>

  <h2>Todos</h2>
  <div 
    v-for="todo in todos"
    v-bind:key="todo.id"
  >
    <input 
      type="checkbox" 
      :id="`todo-${todo.id}`"
      :value="todo.completed"
      v-model="todo.completed"
      :disabled="todo.completed"
    >
    <label :for="`todo-${todo.id}`">{{ todo.title }}</label>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      user: {
        firstName: 'Augusto',
        lastName: 'Camargo',
      },
      todos: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
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
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`
    },
    unfinishedTodos() {
      return this.todos.filter(todo => !todo.completed);
    },
    finishedTodos() {
      return this.todos.filter(todo => todo.completed);
    }
  },
  methods: {
    onClick() {
      console.log('Cliquei', this);
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

<style></style>
