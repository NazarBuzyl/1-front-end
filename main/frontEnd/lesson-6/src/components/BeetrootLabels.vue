<template>
    <div class="beetroot-labels">
        <span v-for="(label, key) in labels" :class="key" :key="key">
            {{ label }}
        </span>
        <span v-if="price !== specialPrice">Sale</span>
    </div>
</template>

<script>
export default {
    name: "beetroot-labels",
    props: {
        labels: {
            type: Object,
            default() {
                return {};
            },
        },
        price: Number,
        specialPrice: Number,
    },
};
</script>

<style lang="scss">
.beetroot-labels {
    position: absolute;
    right: 15px;
    top: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    span {
        display: inline-block;
        margin-bottom: 10px;
        background-color: red;
        color: white;
        text-align: center;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 12px;
    }
}
</style>
