<template>
    <div class="beetroot-price mb-2">
        <span class="product__price" v-if="price === specialPrice">
            Цена: {{ getPrice }}
        </span>
        <span v-else class="product__price product__price_special">
            Старая цена:
            <span>{{ getPrice }}</span>
            <br />Новая цена: {{ getSpecialPrice }}
        </span>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "beetroot-price",
    props: {
        price: Number,
        specialPrice: Number,
    },
    computed: {
        getPrice() {
            return `${this.price.toLocaleString()} ${this.currensySymbol}`;
        },
        getSpecialPrice() {
            return `${this.specialPrice.toLocaleString()} ${
                this.currensySymbol
            }`;
        },
        ...mapGetters(["currensySymbol"]),
    },
};
</script>

<style lang="scss">
.product__price_special {
    span {
        text-decoration: line-through;
    }
}
</style>
