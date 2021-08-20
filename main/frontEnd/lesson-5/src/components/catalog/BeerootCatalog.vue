<template>
    <div class="beetroot-catalog container">
        <h2>Catalog</h2>
        <div class="catalog-list">
            <div class="row">
                <beetroot-product
                    v-for="product in productList"
                    :key="product.id"
                    :product="product"
                    :currensySymbol="currensySymbol"
                    @addToCart="$emit('addToCart', product)"
                    class="p-3"
                />
            </div>
        </div>
    </div>
</template>

<script>
import BeetrootProduct from "../catalog/BeetrootProduct.vue";
export default {
    components: { BeetrootProduct },
    name: "beetroot-catalog",
    props: {
        productList: {
            type: Array,
            default() {
                return [];
            },
        },
        currensySymbol: String,
    },
};
</script>
