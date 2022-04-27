<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
            <NavLink class="navbar-brand" to="/">RestoAdvisor</NavLink>

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
                        <NavLink class="nav-link" to="/">Home </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink class="nav-link" to="/restaurants"
                            >Restaurants</NavLink
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
