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
            <a :href="`/restaurants/${name}`">
                {{ name }}
            </a>
        </td>
    </tr>
</template>
