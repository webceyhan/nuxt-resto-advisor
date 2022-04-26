<script setup>
    useHead({
        titleTemplate: '%s - Restaurants',
    });
</script>

<template>
    <div>
        <slot></slot>
        <RestaurantAd />
    </div>
</template>
