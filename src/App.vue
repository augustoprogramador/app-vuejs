<template>
  <div>
    <AppHeader>
      <!-- <template v-slot:title>
        Home
      </template> -->
      <template v-slot:description>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat error consectetur sint, deleniti dicta praesentium maxime?</p>
      </template>
    </AppHeader>
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
