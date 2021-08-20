import products from "./products";
import Vue from "vue/dist/vue.esm.browser";

const pathImageFolder = './image/';
const currensySymbol = 'грн.';

const catalogVm = new Vue({
    el: '#catalog',
    data: {
        products: products,
        pathImageFolder: pathImageFolder,
        currensySymbol: currensySymbol,
        outOfStockMessage: 'Нет в наличии'
    },
    methods: {
        // getImage(imageName) {
        //     return this.pathImageFolder + imageName;
        // }
        addToCart(product) {
            const productInCart = this.isCartProduct(product.id);

            if (productInCart) {
                productInCart.qty++;
            } else {
                cart.cartList.push({
                    id: product.id,
                    sku: product.sku,
                    name: product.name,
                    img: product.img,
                    price: product.price,
                    specialPrice: product.specialPrice,
                    qty: 1
                });
            }
        },
        isCartProduct(productId) {
            return cart.cartList.find(product => product.id === productId);
        },
    },
    computed: {
        getInStocProducts() {
            return this.products.filter(product => product.instock)
        }
    },
    watch: {},
});

const cart = new Vue({
    el: '#cart',
    data: {
        cartList: [],
        pathImageFolder: pathImageFolder,
        currensySymbol: currensySymbol,
    },
    computed: {
        getCountProduct() {
            if (!this.cartList.length) return 0;

            return this.cartList.map(product => product.qty).reduce((sum, qty) => sum + qty);
        },
        getTotalPrice() {
            if (!this.cartList.length) return 0;

            return this.cartList.map(product => product.specialPrice * product.qty).reduce((sum, qty) => sum + qty).toLocaleString();
        }
    },
    methods: {
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
        findProductIndex(productId) {
            return this.cartList.map(product => product.id).indexOf(productId);
        },
        removeProduct(productIndex) {
            if (productIndex === -1) return;

            this.cartList.splice(productIndex, 1);
        },
        // saveToLocalStorage() {
        //     localStorage.setItem('cartList', JSON.stringify(this.cartList));
        // }
    },
    // watch: {
    //     cartList() {
    //         localStorage.setItem('cartList', JSON.stringify(this.cartList));
    //     }
    // },
    mounted() {
        this.cartList = JSON.parse(localStorage.getItem('cartList'));

    },
    updated() {
        localStorage.setItem('cartList', JSON.stringify(this.cartList));
    },
});
