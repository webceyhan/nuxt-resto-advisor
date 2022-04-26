<script setup lang="ts">
const { selected } = useRestaurants();
</script>

<template>
  <Navbar />

  <main class="container py-5">
    <h1 class="display-5 mb-4">{{ selected.name }}</h1>
  </main>
</template>
