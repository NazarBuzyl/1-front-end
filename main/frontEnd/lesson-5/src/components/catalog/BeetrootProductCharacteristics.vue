<template>
    <div class="beetroot-product-characteristics">
        <p><strong>Характеристики:</strong></p>
        <ul class="characteristics">
            <li
                class="characteristics__item"
                v-for="(value, key) in characteristics"
                :key="key"
            >
                <strong>{{ key }}</strong
                >: {{ value }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "beetroot-product-characteristics",
    props: {
        characteristics: {
            type: Object,
            default() {
                return {};
            },
        },
    },
};
</script>

<style lang="scss">
.beetroot-product-characteristics {
    flex-grow: 1;
}
</style>
