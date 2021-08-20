import Vue from "vue";
import VueRouter from "vue-router";
import BeetrootCatalog from "../components/catalog/BeetrootCatalog.vue";
import BeetrootCart from "../components/cart/BeetrootCart.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Catalog",
        component: BeetrootCatalog,
    },
    {
        path: "/cart",
        name: "Cart",
        component: BeetrootCart,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
