<template>
    <img :src="require('@/assets/' + src)" :alt="alt" :title="title" />
</template>

<script>
export default {
    name: "beetroot-image",
    props: {
        src: String,
        alt: String,
        title: String,
    },
};
</script>

<style lang="scss" scoped>
img {
    max-width: 100%;
}
</style>
