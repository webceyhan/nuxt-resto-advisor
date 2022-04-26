<template>
  <Navbar />

  <main class="container text-center py-5">
    <h1 class="display-4 mb-4">Hello this is the restaurants</h1>

    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <RestaurantTable>
          <RestaurantRow :rank="1" :name="`hello`" />
        </RestaurantTable>
      </div>

      <div class="col">
        <RestaurantTable>
          <RestaurantRow :rank="1" :name="`hello`" />
        </RestaurantTable>
      </div>
    </div>
  </main>
</template>
