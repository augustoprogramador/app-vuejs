<template>
  <header>
    <h1 v-if="$slots.title">
      <slot name="title"/>
    </h1>
  </header>
  <p class="description">
    <slot name="description"/>
  </p>
  <slot/>
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
header {
  color: white;
  background-color: black;
}

p.description {
  color:darkcyan;
  font-size: 24px;
}

</style>