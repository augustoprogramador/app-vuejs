<template>
  <div>
    <BaseAlert :variant="changeVariant" :text="text"/>
  </div>
  <button @click="changeVariant = 'success'">Success</button>
  <button @click="changeVariant = ''">Reset</button>
  
</template>

<script>
import BaseAlert from '@/components/BaseAlert.vue';

export default {
  name: 'App',
  components: {
    BaseAlert
  },
  data() {
    return {
      name: 'Augusto',
      showHeader: true,
      changeVariant: '',
      text: 'Seu formulário foi enviado!',
    }
  },

  // HOOKS
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},


  watch: {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style></style>
