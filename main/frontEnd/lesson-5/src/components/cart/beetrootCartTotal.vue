<template>
    <div class="beerroot-cart-total card bg-light text-end">
        Всего: {{ getCartTotal }}
    </div>
</template>

<script>
export default {
    name: "beerroot-cart-total",
    props: {
        cartTotal: Number,
        currensySymbol: String,
    },
    computed: {
        getCartTotal() {
            return `${this.cartTotal.toLocaleString()} ${this.currensySymbol}`;
        },
    },
};
</script>

<style>
.beerroot-cart-total {
    font-size: 20px;
    padding: 20px;
}
</style>
