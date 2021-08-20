import Vue from "vue";
import Vuex from "vuex";
import requvest from "./requvest";

const host = "http://localhost:3000/";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        cart: [],
        currensySymbol: "грн.",
        outOfStockMessage: "Нет в наличии",
    },
    getters: {
        outOfStockMessage(state) {
            return state.outOfStockMessage;
        },
        products(state) {
            return state.products;
        },
        currensySymbol(state) {
            return state.currensySymbol;
        },
        cart(state) {
            return state.cart;
        },
        cartTotal(state) {
            if (!state.cart.length) return `0 ${state.currensySymbol}`;

            const total = state.cart
                .map((product) => {
                    return +product.price * +product.qty;
                })
                .reduce((sum, acc) => sum + acc);
            return `${total} ${state.currensySymbol}`;
        },
        getCartCount(state) {
            return state.cart.reduce((acc, sum) => {
                return acc + sum.qty;
            }, 0);
        },
    },
    mutations: {
        setProduct(state, products) {
            state.products = products;
        },
        addToCart(state, product) {
            state.cart.push(product);
        },
        changeQty(state, options) {
            const { productIndex, qty } = options;

            state.cart[productIndex].qty = qty;
        },
        setCart(state, products) {
            state.cart = products;
        },
        removeProductCart(state, productIndex) {
            state.cart.splice(productIndex, 1);
        },
    },
    actions: {
        async getProduct({ commit }) {
            const url = host + "api/products";
            const products = await requvest(url);
            commit("setProduct", products);
        },
        async addToCart({ commit, dispatch, state }, data) {
            let oldQty = null;
            const productIndex = state.cart.findIndex((product) => {
                if (product.id === data.id) {
                    oldQty = product.qty;
                    return true;
                }
            });

            if (productIndex === -1) {
                const url = host + "api/cart";
                const product = await requvest(url, "POST", data);
                commit("addToCart", product);
            } else {
                dispatch("changeQty", { productIndex, qty: oldQty + 1 });
            }
        },
        async changeQty({ commit, state }, options) {
            commit("changeQty", options);

            const product = state.cart[options.productIndex];
            const url = host + "api/cart/" + product.id;
            await requvest(url, "PUT", product);
        },
        async getCart({ commit }) {
            const url = host + "api/cart";
            const products = await requvest(url);
            commit("setCart", products);
        },
        async removeProductCart({ commit, state }, productIndex) {
            const product = state.cart[productIndex];
            const url = host + "api/cart/" + product.id;
            await requvest(url, "DELETE", product);
            commit("removeProductCart", productIndex);
        },
    },
    modules: {},
    strict: process.env.NODE_ENV !== "production",
});
