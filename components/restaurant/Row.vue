<script setup lang="ts">
    defineProps<{
        rank: number;
        name: string;
    }>();
</script>

<template>
    <tr>
        <th scope="row">{{ rank }}</th>
        <td>
        <!-- bugfix: https://github.com/nuxt/framework/issues/4624 -->
        <a :href="`/restaurants/${name}`">{{ name }}</a>
            <!-- <NuxtLink :to="`/restaurants/${name}`">
                {{ name }}
            </NuxtLink> -->
        </td>
    </tr>
</template>
