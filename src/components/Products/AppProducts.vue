<template>
    <div>
        Produtos
        <AppProduct 
            v-for="product in $store.state.products" 
            :key="product.id"
            :product="product"
        />
    </div>
</template>

<script>
import AppProduct from '@/components/Products/AppProduct.vue';

export default {
    components: {
        AppProduct
    },
}
</script>