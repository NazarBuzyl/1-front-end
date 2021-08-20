<template>
    <div class="beetroot-product col-4">
        <div class="card p-3 h-100 beetroot-product__card position-relative">
            <beetroot-image
                class="product__image mb-4"
                :src="product.img"
                :alt="product.name"
                :title="product.name"
            />
            <h2 class="beetroot-product__title">
                {{ product.name }}
                <span class="product__sku">{{ product.sku }}</span>
            </h2>
            <beetroot-price
                :currensySymbol="currensySymbol"
                :price="product.price"
                :specialPrice="product.specialPrice"
            />
            <beetroot-product-characteristics
                :characteristics="product.characteristics"
            />
            <beetroot-labels
                :labels="product.labels"
                :price="product.price"
                :specialPrice="product.specialPrice"
            />
            <div class="text-center" v-if="product.instock">
                <button @click="addToCart" class="product__btn btn btn-primary">
                    Добавить в корзину
                </button>
            </div>
            <div class="text-center product__out-of-stock" v-else>
                {{ outOfStockMessage }}
            </div>
        </div>
    </div>
</template>

<script>
import BeetrootLabels from "../BeetrootLabels.vue";
import BeetrootPrice from "../BeetrootPrice.vue";
import BeetrootProductCharacteristics from "./BeetrootProductCharacteristics.vue";
import BeetrootImage from "../ui/beetrootImage.vue";
export default {
    components: {
        BeetrootPrice,
        BeetrootProductCharacteristics,
        BeetrootImage,
        BeetrootLabels,
    },
    name: "beetroot-product",
    props: {
        product: {
            type: Object,
            default() {
                return {};
            },
        },
        currensySymbol: String,
    },
    data() {
        return {
            outOfStockMessage: "Нет в наличии",
        };
    },
    methods: {
        addToCart() {
            this.$emit("addToCart", this.product);
        },
    },
};
</script>

<style lang="scss">
.beetroot-product {
    &__card {
        display: flex;
        flex-direction: column;
    }

    &__title {
        font-size: 20px;
        font-weight: 700;
    }
}

.product__image {
    max-width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
}
</style>
