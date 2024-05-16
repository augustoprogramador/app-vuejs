<template>
    <div class="card">
        {{ product.name }} - {{ product.price }}
        <button @click="addProduct">Adicionar</button>
        <button @click="removeProduct">Remover</button>
    </div>
</template>

<script>
    export default {
        props: {
            product: {}
        },
        methods: {
            addProduct() {
                this.$store.commit('addProduct', this.product);
            },
            removeProduct() {
                this.$store.commit('removeProduct', this.product.id);
            }
        }
    }
</script>

<style>
.card {
    margin: 5px;
    padding: 6px;
    background-color: bisque;
}
</style>