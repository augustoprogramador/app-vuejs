<template>
  <div>
    <input 
      type="text"
      v-model="name"
    >
    <br/>
    {{ name }}
  </div>
  <h1>User</h1>
  <div>
    <input 
      type="text"
      v-model="user.firstName"
    >
    <br/>
    {{ user.firstName }}
  </div>
  <br/>
  <label for="paginacao">Paginação</label>
  <select v-model="pageCount" name="paginacao" id="paginacao">
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="15">15</option>
  </select>
  {{ pageCount }}
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      name: '',
      pageCount: 0,
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
  watch: { // Observer
    // name(newValue, oldValue) {
    //   console.log(newValue, oldValue);
    // },
    name(value) {
      if (value.length >= 3)
        this.saveUserName();
    },
    pageCount() {
      this.changePageCount();
    },
    user: { // TRANSFORMEI EM OBJETO
      handler() {
        console.log(this.user);
      },
      deep: true
    },
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
    },
    saveUserName() {
      console.log('Ajax');
      console.log(this.name);
    },
    changePageCount() {
      console.log('changePageCount');
    }
  }
}
</script>

<style></style>
