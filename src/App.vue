<template>
  <div>
    <BaseAlert 
      :variant="changeVariant"
      @close="closeAlert"
      v-if="showAlert"
    >
      {{ text }}
    </BaseAlert>
  </div>
  
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
      changeVariant: 'success',
      text: 'Seu formulário foi enviado!',
      showAlert: true,
    }
  },
  methods: {
    closeAlert() {this.showAlert = false;}
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
}
</script>

<style></style>
