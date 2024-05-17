<template>
  <AppButton
    data-vue="teste"
    @update="getUpdate"
  >
    Save
  </AppButton>
  Hello Vue
</template>

<script>
import AppButton from '@/components/AppButton.vue';

export default {
  name: 'App',
  components: {
    AppButton,
  },
  setup() {
    const getUpdate = (data) => {console.log('updated', data)};

    return {
      getUpdate,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
