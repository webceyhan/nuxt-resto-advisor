<script setup lang="ts">
    const { cols } = useRestaurants();
</script>

<template>
    <!-- bugfix: only single root component is allowed in nuxt3 at this moment -->
    <div>
        <h1 class="display-5 mb-4">TOP 50 Restaurants</h1>

        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <RestaurantTable>
                    <RestaurantRow
                        v-for="resto in cols.first"
                        :key="resto.id"
                        v-bind="resto"
                    />
                </RestaurantTable>
            </div>

            <div class="col">
                <RestaurantTable>
                    <RestaurantRow
                        v-for="resto in cols.second"
                        :key="resto.id"
                        v-bind="resto"
                    />
                </RestaurantTable>
            </div>
        </div>
    </div>
</template>
