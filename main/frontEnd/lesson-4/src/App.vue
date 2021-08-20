<template>
    <div id="app">
        <test title="My title" :dataList="list" />
    </div>
</template>

<script>
import Test from "./components/Test";

export default {
    name: "App",
    components: { Test },
    data() {
        return {
            list: ["dfsgdsf", "sdfggf", "sdfdsf"],
        };
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
