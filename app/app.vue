<script setup lang="ts">

const config = useAppConfig()
const runtime = useRuntimeConfig();
const hello = ref(runtime.public.apiurl)
</script>

<template>
  <div>
    {{ hello }}
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
