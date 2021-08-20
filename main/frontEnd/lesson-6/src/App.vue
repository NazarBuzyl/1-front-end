<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Catalog</router-link> |
            <router-link to="/cart">Cart ({{ getCartCount }}) </router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "app",
    computed: {
        ...mapGetters(["getCartCount"]),
    },
    methods: {
        ...mapActions(["getCart", "getProduct"]),
    },
    created() {
        this.getProduct();
        this.getCart();
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
