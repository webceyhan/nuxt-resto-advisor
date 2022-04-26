<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
            <NuxtLink class="navbar-brand" to="/">RestoAdvisor</NuxtLink>

            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/">Home </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/restaurants"
                            >Restaurants</NuxtLink
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
