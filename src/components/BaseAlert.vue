<template>
    <div :class="baseClass">
        {{ this.test }} {{ this.text }}
        <slot name="content"/>
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
            text: {
                type: String,
                default: '',
            },
            test: {
                type: String,
                default: 'test',
            }
        },
        computed: {
            baseClass() {
                return [
                    'alert',
                    this.variant ? `${this.variant}` : ''
                ];
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
    .alert {
        padding: 5px;
        border-radius: 6px;
        color: gray;
        background-color: #ddd;
    }
    .success {
        background-color: #42b983;
        color: white;
    }
</style>