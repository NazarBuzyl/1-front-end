<template>
    <img :src="require('@/assets/' + src)" :alt="alt" :title="title" />
</template>

<script>
export default {
    name: "beetroot-image",
    props: {
        src: String,
        pathImageFolder: String,
        alt: String,
        title: String,
    },
    computed: {},
};
</script>

<style lang="scss" scoped>
img {
    max-width: 100%;
}
</style>
