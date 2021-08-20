<template>
    <div class="beetroot-cart container">
        <div class="row">
            <h2 class="col-12">Cart</h2>
            <beetroot-cart-product
                v-for="(product, index) in cart"
                :key="product.id"
                :product="product"
                :index="index"
            />
        </div>
        <div class="row">
            <beetroot-cart-total />
        </div>
    </div>
</template>

<script>
import BeetrootCartProduct from "./BeetrootCartProduct.vue";
import BeetrootCartTotal from "./beetrootCartTotal.vue";
import { mapGetters } from "vuex";

export default {
    components: { BeetrootCartProduct, BeetrootCartTotal },
    name: "beetroot-cart",
    computed: {
        ...mapGetters(["cart"]),
    },
};
</script>
