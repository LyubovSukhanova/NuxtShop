<script setup lang="ts">
const { color = 'primary' } = defineProps<{
    color?: 'primary' | 'ghost'
}>()
</script>

<template>
    <button class="button" :class="color">
        <slot />
    </button>
</template>

<style scoped>
.button {
    border-radius: 4px;
    border: 1px solid var(--color-black);
    cursor: pointer;
    padding: 16px;
    font-size: 16px;
    font-weight: 700;
    font-family: var(--font);
}

.primary {
    background: var(--color-black);
    color: var(--color-white-light);

}

.primary:hover {
    background: var(--color-black-hover);
    color: var(-color-white);
}

.ghost {
    background: var(--color-white-light);
    color: var(--color-black);
}

.ghost:hover {
    background-color: var(--color-black-hover);
    color: var(--color-white-light);
}
</style>
