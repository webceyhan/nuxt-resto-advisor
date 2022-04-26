<script setup lang="ts">
    const route = useRoute();
    const { name } = route.params;
</script>

<template>
    <Navbar />

    <main class="container py-5">
        <h1 class="display-5 mb-4">{{ name }}</h1>
    </main>
</template>
