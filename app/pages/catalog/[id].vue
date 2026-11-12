<script setup lang="ts">
const route = useRoute()
const id = computed(() => route.params.id)
</script>

<template>
    <div>{{ id }}</div>
</template>
