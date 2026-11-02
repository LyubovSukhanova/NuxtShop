<script setup lang="ts">
function openAbout() {
    navigateTo("/about")
}
</script>

<template>
    <div>
        Index
        <button @click="openAbout">Перейти</button>
    </div>
</template>
