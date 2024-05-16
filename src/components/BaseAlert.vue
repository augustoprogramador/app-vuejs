<template>
    <div class="container">
        <div :class="baseClass">
            <slot />
            <button @click="close">X</button>
        </div>
    </div>
</template>

<script>
    export default {
        // props: ['variant', 'text'],
        props: {
            variant: {
                type: String,
                default: '',
            },
        },
        computed: {
            baseClass() {
                return [
                    'alert',
                    this.variant ? `${this.variant}` : ''
                ];
            }
        },
        methods: {
            close() {
                this.$emit('close');
            }
        },
        beforeCreate() {console.log(this.variant)},
        created() {console.log(this.variant)},
        beforeMount() {console.log(this.variant)},
        mounted() {console.log(this.variant)},
        beforeUpdate() {console.log(this.variant)},
        updated() {console.log(this.variant)},
    }
</script>

<style scoped>
    .container {
        display: flex;
        justify-items: center;
    }
    .alert {
        padding: 5px;
        border-radius: 6px;
        color: gray;
        background-color: #ddd;
        max-width: 500px;
    }
    .success {
        background-color: #42b983;
        color: white;
    }
</style>