<script setup lang="ts">
    defineProps<{
        rank: number;
        name: string;
    }>();
</script>

<template>
    <tr>
        <th scope="row">{{ rank }}</th>
        <td>{{ name }}</td>
    </tr>
</template>
