<template>
  <div class="header">Headerrrr</div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  beforeUnmount() {
    console.log('beforeUnmount', {
      Estado: this.name,
      DOM: this.$el
    })
  },
  unmounted() {
    console.log('unmounted', {
      Estado: this.name,
      DOM: this.$el
    });
  },
  methods: {
  }
}
</script>

<style>
.header {
  color: white;
  background-color: black;
}
</style>