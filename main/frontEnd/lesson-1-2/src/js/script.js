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
        },
        firstName: '',
        lastName: '',
        email: '',
        isShow: true,
        type: 'A',
        addUser: {
            name: '',
            tel: '',
            email: ''
        },
        list: ['sdf', 'sdf', 'dsfddgfsdf', 'erwerewr', 'sdf', 'sdf', 'dsfddgfsdf', 'erwerewr', 'sdf', 'sdf', 'dsfddgfsdf', 'erwerewr'],
        userList: [
            {
                name: 'Viktor',
                tel: '0670000000',
                email: 'test@email.com'
            },
            {
                name: 'Petya',
                tel: '0670005005',
                email: 'test1@email.com'
            },
            {
                name: 'Vanya',
                tel: '0670008008',
                email: 'test33@email.com'
            }
        ],
        isValidate: false

    },
    watch: {
        userList() {
            console.log('watch')
        }
    },
    computed: {
        textBtn() {
            return this.disabled ? 'Disabled' : 'Enabled';
        },
        infoUser() {
            return `<b>User Name</b>: ${this.user.name}. User Email: ${this.user.email}. User Tel: ${this.user.tel}`;
        },
        isShowPreView() {
            return this.firstName || this.lastName || this.email;
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
            console.log(this.$refs)
            this.$refs.title1.style.color = 'gray';
            this.$refs.title.style.color = 'red';
        },
        submit() {
            console.log('submit');
        },
        setMessage(e) {
            console.log(e.target.value);
            this.message = e.target.value;
        },
        validateUser() {
            this.isValidate = true;
            return this.addUser.name && this.addUser.tel && this.addUser.email;
        },
        addNewUser() {
            console.log(this.addUser.name, this.addUser.tel, this.addUser.email);

            if (!this.validateUser()) return;

            this.userList.push({
                name: this.addUser.name,
                tel: this.addUser.tel,
                email: this.addUser.email
            });
            this.clearAddUser();
        },
        clearAddUser() {
            this.addUser.name = '';
            this.addUser.tel = '';
            this.addUser.email = '';
            this.isValidate = false;
        },
        removeUser(indexUser) {
            this.userList.splice(indexUser, 1);
        }
    },
    beforeCreate() {
        console.log(this.message);
    },
    created() {
        console.log(this.message);
    },
    beforeMount() {
        //alert();
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

