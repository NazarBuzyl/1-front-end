<template>
    <div class="beetroot-catalog container">
        <h2>Catalog</h2>
        <div class="catalog-list">
            <div class="row">
                <beetroot-product
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                    class="p-3"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import BeetrootProduct from "./BeetrootProduct.vue";

export default {
    components: { BeetrootProduct },
    name: "beetroot-catalog",
    computed: {
        ...mapGetters(["products"]),
    },
};
</script>
