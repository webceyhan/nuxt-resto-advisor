<script setup lang="ts">
import data from "../data.json";

const cols = computed(() => {
  const count = data.length;
  const half = Math.floor(count / 2);

  return {
    first: data.slice(0, half),
    second: data.slice(half, count),
  };
});
</script>

<template>
  <Navbar />

  <main class="container py-5">
    <h1 class="display-4 text-center mb-4">Hello this is the restaurants</h1>

    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <RestaurantTable>
          <RestaurantRow v-for="resto in cols.first" :key="resto.id" v-bind="resto" />
        </RestaurantTable>
      </div>

      <div class="col">
        <RestaurantTable>
          <RestaurantRow v-for="resto in cols.second" :key="resto.id" v-bind="resto" />
        </RestaurantTable>
      </div>
    </div>
  </main>
</template>
