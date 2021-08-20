<template>
    <div class="beetroot-cart-product p-3 col-4 mb-1">
        <div class="bg-light border p-3 h-100">
            <beetroot-image
                :src="product.img"
                :alt="product.name"
                :title="product.name"
                class="
                    rounded
                    img-thumbnail
                    float-start
                    me-4
                    beetroot-cart-product__img
                    mb-3
                "
            />
            <strong>{{ product.name }}</strong>
            <beetroot-price
                :price="product.price"
                :specialPrice="product.specialPrice"
            />
            <beetroot-cart-actions
                :qty="product.qty"
                :index="index"
                class="mb-3"
            />
            <p class="text-center">Всего: {{ this.getTotalPrice }}</p>
        </div>
    </div>
</template>

<script>
import BeetrootCartActions from "./BeetrootCartActions.vue";
import BeetrootPrice from "../BeetrootPrice.vue";
import beetrootImage from "../ui/beetrootImage.vue";

export default {
    components: { beetrootImage, BeetrootPrice, BeetrootCartActions },
    name: "beetroot-cart-product",
    props: {
        product: {
            type: Object,
            default() {
                return {};
            },
        },
        index: Number,
    },
    computed: {
        getTotalPrice() {
            const finalTotalPrice = (
                this.product.specialPrice * this.product.qty
            ).toLocaleString();
            return `${finalTotalPrice} ${this.currensySymbol}`;
        },
    },
};
</script>

<style lang="scss">
.beetroot-cart-product {
    &__img {
        width: 150px;
    }
}
</style>
