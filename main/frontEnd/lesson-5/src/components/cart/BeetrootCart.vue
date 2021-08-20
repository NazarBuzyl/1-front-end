<template>
    <div class="beetroot-cart container">
        <div class="row">
            <h2 class="col-12">Cart</h2>
            <beetroot-cart-product
                v-for="(product, index) in cartList"
                :key="product.id"
                :product="product"
                :currensySymbol="currensySymbol"
                @setQtyProduct="setQtyProduct"
                @removeProduct="$emit('removeProduct', index)"
            />
        </div>
        <div class="row">
            <beetroot-cart-total
                :cartTotal="cartTotal"
                :currensySymbol="currensySymbol"
            />
        </div>
    </div>
</template>

<script>
import BeetrootCartProduct from "./BeetrootCartProduct.vue";
import BeetrootCartTotal from "./beetrootCartTotal.vue";
export default {
    components: { BeetrootCartProduct, BeetrootCartTotal },
    name: "beetroot-cart",
    props: {
        cartList: {
            type: Array,
            default() {
                return [];
            },
        },
        currensySymbol: String,
    },
    computed: {
        cartTotal() {
            if (!this.cartList.length) return 0;

            return this.cartList
                .map((product) => product.specialPrice * product.qty)
                .reduce((acc, sum) => acc + sum);
        },
    },
    methods: {
        setQtyProduct(product, isIncrement) {
            this.$emit("setQtyProduct", product, isIncrement);
        },
    },
};
</script>

<style lang="scss">
.beetroot-cart {
}
</style>
