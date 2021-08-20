<template>
    <div id="app">
        <beetroot-cart
            :cartList="cart"
            @setQtyProduct="setQtyProduct"
            @removeProduct="removeProduct"
            :currensySymbol="currensySymbol"
        />
        <beeroot-catalog
            :productList="products"
            :currensySymbol="currensySymbol"
            @addToCart="addToCart"
        />
    </div>
</template>

<script>
import BeerootCatalog from "./components/catalog/BeerootCatalog.vue";
import BeetrootCart from "./components/cart/BeetrootCart.vue";
import products from "./assets/products";
import "bootstrap/scss/bootstrap.scss";

const localStorageKey = "cart";

export default {
    name: "App",
    components: { BeerootCatalog, BeetrootCart },
    data() {
        return {
            products,
            cart: [],
            currensySymbol: "грн.",
        };
    },
    methods: {
        addToCart(product) {
            const productInCart = this.isCartProduct(product.id);

            if (productInCart) {
                productInCart.qty++;
            } else {
                this.cart.push({
                    id: product.id,
                    sku: product.sku,
                    name: product.name,
                    img: product.img,
                    price: product.price,
                    specialPrice: product.specialPrice,
                    qty: 1,
                });
            }
        },
        isCartProduct(productId) {
            return this.cart.find((product) => product.id === productId);
        },
        setQtyProduct(product, isIncrement) {
            if (isIncrement) {
                product.qty++;
            } else {
                if (product.qty < 2) {
                    this.removeProduct(this.findProductIndex(product.id));
                    return;
                }
                product.qty--;
            }
            this.saveToLocalStorage();
        },
        removeProduct(productIndex) {
            if (productIndex === -1) return;

            this.cart.splice(productIndex, 1);
        },
        findProductIndex(productId) {
            return this.cart.map((product) => product.id).indexOf(productId);
        },
        saveToLocalStorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cart));
        },
    },
    watch: {
        cart() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cart));
        },
    },
    mounted() {
        this.cart = JSON.parse(localStorage.getItem(localStorageKey));
    },
};
</script>

<style lang="scss">
#app {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
