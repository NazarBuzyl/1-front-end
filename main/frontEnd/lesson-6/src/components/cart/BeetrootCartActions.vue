<template>
    <div class="beetroot-cart-actons">
        <div class="beetroot-cart-actons__qty input-group mb-3">
            <button
                class="btn btn-outline-secondary"
                @click="setQtyProduct(false)"
            >
                -
            </button>
            <input
                class="form-control"
                type="text"
                :value="qty"
                @change="changeQtyProduct"
            />
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
import { mapActions } from "vuex";

export default {
    name: "beetroot-cart-actions",
    props: {
        qty: Number,
        index: Number,
    },
    methods: {
        ...mapActions(["changeQty", "removeProductCart"]),
        setQtyProduct(isIncrement) {
            if (this.qty < 2 && !isIncrement) {
                this.removeProduct();
                return;
            }

            const options = {
                productIndex: this.index,
                qty: isIncrement ? this.qty + 1 : this.qty - 1,
            };
            this.changeQty(options);
        },
        changeQtyProduct(e) {
            const newQty = +e.target.value;
            const oldQty = this.qty;
            if (newQty !== oldQty) {
                const options = {
                    productIndex: this.index,
                    qty: newQty,
                };
                this.changeQty(options);
            }
        },
        removeProduct() {
            this.removeProductCart(this.index);
        },
    },
};
</script>
