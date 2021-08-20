import Vue from 'vue/dist/vue.esm.browser';

const vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        number: 542,
        url: 'https://google.com',
        disabled: false,
        user: {
            name: 'Viktor',
            email: 'test@gmauil.com',
            tel: '0670000000',
        }
    },
    computed: {
        textBtn() {
            return this.disabled ? 'Disabled' : 'Enabled';
        },
        infoUser() {
            return `<b>User Name</b>: ${this.user.name}. User Email: ${this.user.email}. User Tel: ${this.user.tel}`;
        }
    },
    methods: {
        getInfoUser() {
            console.log('getInfoUser')
            return `<b>User Name</b>: ${this.user.name}. User Email: ${this.user.email}. User Tel: ${this.user.tel}`;
        },
        incNumber(newNum, e) {
            console.log('dsfsdfdfsdfsdfsdfsdf', e)
            this.number += newNum;
        },
        getElem() {
            this.$refs.title.style.color = 'red';
        }
    }
});

const sss = new Vue({
    el: '#sss',
    data: {
        prim: "sdfsdfsdfsdf"
    },
    methods: {
        changeNumber() {
            vm.number++;
        }
    }
})

//console.log(vm.$el);

// setTimeout(function () {
//     vm.message = 'dfdfdfdfdfdf';
// }, 2000)

