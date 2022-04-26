<script setup lang="ts">
import data from "../data.json";

const cols = computed(() => {
  return {
    first: data.slice(0, 25),
    second: data.slice(25, 50),
  };
});
</script>

<template>
  <Navbar />

  <main class="container py-5">
    <h1 class="display-5 text-center mb-4">TOP 50 Restaurants</h1>

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
