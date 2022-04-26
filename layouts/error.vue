<template>
    <div class="text-center">
        <h1 class="display-1">
            <slot name="title">Page not found! </slot>
        </h1>

        <slot>
            <img
                class="img-fluid"
                style="max-width: 200px"
                src="https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png"
            />
            <br />
        </slot>

        <slot name="redirect">
            <NuxtLink to="/restaurants">Go to Restaurants</NuxtLink>
        </slot>
    </div>
</template>
