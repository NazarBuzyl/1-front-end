<template>
    <div class="test">
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <p v-for="(bred, index) in dataList" :key="index">{{ bred }}</p>
    </div>
</template>

<script>
export default {
    name: "test",
    props: {
        title: String,
        dataList: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    data() {
        return {
            message: "FFFFFFFF",
        };
    },
};
</script>

<style lang="scss">
.test {
    padding: 15px;
    background-color: red;
}
</style>
