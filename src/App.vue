<template>
  <div>
    <div class="card">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quam pariatur maiores natus ipsum dolorem suscipit ducimus accusantium aliquam impedit eum est iure, maxime atque inventore dignissimos enim. Magni, veritatis.</div>
    <BaseCard/>
  </div>
</template>

<script>
import BaseCard from './components/BaseCard.vue';

export default {
  name: 'App',
  components: {
    BaseCard
  },
  data() {
    return {
      name: 'Augusto',
      showHeader: true
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
