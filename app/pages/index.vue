<script setup lang="ts">
function openAbout() {
    navigateTo("/about")
}
</script>

<template>
    <div>
        Index
        <button @click="openAbout">Перейти</button>
        <InputField variant="black" placeholder="Введите ваш email для подписки" />
    </div>
</template>
