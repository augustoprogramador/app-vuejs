<template>
    <div>
        Hook
    </div>
</template>
<script>
    import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';
    export default {
        // OPTIONS API
        /**
         * beforeMount(), mounted(), beforeUnmount(), unmounted()
         * o beforeCreate() e o created() já são o próprio setup()
         */
        setup() {
            onBeforeMount(() => {
                console.log('onBeforeMount')
            });
            onMounted(() => {
                console.log('onMounted')
            });
            onBeforeUnmount(() => {
                console.log('onBeforeUnmount')
            });
            onUnmounted(() => {
                console.log('onUnmounted')
            })
        },
    }
</script>