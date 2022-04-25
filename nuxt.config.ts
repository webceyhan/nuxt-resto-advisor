import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: '/bootstrap.min.css',
                    // href: '/node_modules/bootstrap/dist/css/bootstrap.min.css',
                },
            ],
            script: [
                {
                    src: '/bootstrap.bundle.min.js',
                    // src: '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
                },
            ],
        },
    },
});
