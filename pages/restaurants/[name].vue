<script setup lang="ts">
const { selected } = useRestaurants();
</script>

<template>
  <Navbar />

  <main class="container py-5">
    <div class="row">
      <!-- image -->
      <section class="col">
        <img class="img-fluid" :src="selected.imageUrl" alt="restaurant image" />
      </section>

      <!-- info -->
      <section class="col-5">
        <h1 class="display-5">{{ selected.name }}</h1>

        <hr class="mb-4" />

        <h5 class="d-flex justify-content-between mb-4">
          Revenue (in billions)
          <span class="badge bg-dark"> {{ selected.revenue }} </span>
        </h5>

        <h5 class="d-flex justify-content-between mb-4">
          Number of Stores
          <span class="badge bg-dark">
            {{ selected.numberOfStores }}
          </span>
        </h5>

        <p class="lead">{{ selected.content }}</p>
      </section>
    </div>
  </main>
</template>
