<template>
    <div class="beetroot-cart-actons">
        <div class="beetroot-cart-actons__qty input-group mb-3">
            <button
                class="btn btn-outline-secondary"
                @click="setQtyProduct(false)"
            >
                -
            </button>
            <input class="form-control" type="text" v-model="qty" />
            <button
                class="btn btn-outline-secondary"
                @click="setQtyProduct(true)"
            >
                +
            </button>
        </div>
        <div class="beetroot-cart-actons__remove text-center">
            <button class="btn btn-danger" @click="removeProduct">
                Удалить
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "beetroot-cart-actions",
    props: {
        qty: Number,
    },
    methods: {
        setQtyProduct(isIncrement) {
            this.$emit("setQtyProduct", isIncrement);
        },
        removeProduct() {
            this.$emit("removeProduct");
        },
    },
};
</script>
