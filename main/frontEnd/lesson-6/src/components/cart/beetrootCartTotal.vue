<template>
    <div class="beerroot-cart-total card bg-light text-end">
        Всего: {{ cartTotal }}
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "beerroot-cart-total",
    computed: {
        ...mapGetters(["cartTotal"]),
    },
};
</script>

<style>
.beerroot-cart-total {
    font-size: 20px;
    padding: 20px;
}
</style>
