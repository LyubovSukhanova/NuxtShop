<script setup lang="ts">
const { } = defineProps<{
    variant: "gray" | "black"
}>()
const data = defineModel<string>();
</script>

<template>
    <input :class="[$style[variant], $style.input]" v-model="data" />
</template>

<style module>
.input {
    width: 100%;
    padding: 12px 0;
    background: none;
    border: none;
    color: var(--color-black);
}

.input::placeholder {
    color: var(--color-dark-gray);
}

.gray {
    border-bottom: 1px solid var(--color-gray);
}

.black {
    border-bottom: 1px solid var(--color-black);
}
</style>
