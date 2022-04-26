<!-- AUTOMATION BADGES -->

[![CodeQL](https://github.com/webceyhan/nuxt-resto-advisor/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/webceyhan/nuxt-resto-advisor/actions/workflows/codeql-analysis.yml)
[![Deploy to Heroku](https://github.com/webceyhan/nuxt-resto-advisor/actions/workflows/heroku.yml/badge.svg)](https://github.com/webceyhan/nuxt-resto-advisor/actions/workflows/heroku.yml)

 <!-- HEADER ///////////////////////////////////////////////////////////// -->

# Nuxt RestoAdvisor Application

This is a demo project built on Nuxt 3 framework with Vue and Typescript inspired by a Nuxt3-Crash-Course video tutorial.

The purpose of this project is, to demonstrate how to build a server-side-rendered application which utilizes features such as components, composables, routing, layouts, meta tags, and more.

[View Demo](https://webceyhan-nuxt-resto-advisor.herokuapp.com/) |
[Report Issue](https://github.com/webceyhan/nuxt-resto-advisor/issues) |
[Request Feature](https://github.com/webceyhan/nuxt-resto-advisor/pulls) |
[@webceyhan](https://twitter.com/webceyhan)

<br>
<!-- REQUIREMENTS /////////////////////////////////////////////////////// -->

## Requirements

You need to install the [Node.js](https://nodejs.dev/)
and `npm` package manager first.

> Recommended IDE:
> [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

<br>
<!-- INSTALLATION //////////////////////////////////////////////////////// -->

## Installation

1. Clone the repository.
    ```sh
    git clone https://github.com/webceyhan/nuxt-resto-advisor.git
    ```
2. Get inside the cloned project folder.
    ```sh
    cd nuxt-resto-advisor
    ```
3. Install NPM packages.
    ```sh
    npm install
    ```

<br>
<!-- USAGE /////////////////////////////////////////////////////////////// -->

## Usage

You can use following commands to do various task with the project.

```sh
npm start               # run compiled application
npm run dev             # start development server
npm run build           # build for production
npm run preview         # preview built app
```

> Take a look at the other scripts in [`package.json`](./package.json)

<br>
<!-- DEVELOPMENT ///////////////////////////////////////////////////////// -->

## Development

Execute below command to watch file changes during the development.

```sh
npm run dev
```

<br>
<!-- BUILDING //////////////////////////////////////////////////////////// -->

## Building

Build the application for production.

```sh
npm run build
```

To preview the application which is built for production run below command.

```sh
npm run preview
```

<br>
<!-- DEPLOYMENT ////////////////////////////////////////////////////////// -->

## Deployment (Heroku)

A GitHub Action will automatically deploy the project to Heroku on every push.

> See the details in [.github/workflows/heroku.yml](./.github/workflows/heroku.yml)

1. Create an [Heroku](https://www.heroku.com/home) account.

2. Install the `heroku-cli` as shown in the [guide](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli).

3. Create a new Heroku app inside the project folder to bind it.

    ```sh
    heroku create
    ```

    > This will create a new application on Heroku server and bind it to your project by adding a remote `heroku` upstream to your git repository.

4. Set the following secrets on your Github repository:
    ```sh
    HEROKU_API_KEY
    HEROKU_APP_NAME
    HEROKU_EMAIL
    ```

<br>
<!-- REFERENCES ////////////////////////////////////////////////////////// -->

## References

-   [Node.js](https://nodejs.dev/)
-   [Nuxt](https://nuxtjs.org/)
-   [Vite](https://vitejs.dev/)
-   [Vue.js](https://vuejs.org/)
-   [Bootstrap](https://getbootstrap.com)
-   [GitHub Actions](https://docs.github.com/en/actions)
    -   [Heroku](https://www.heroku.com)
    -   [heroku-deploy](https://github.com/akhileshns/heroku-deploy@)
-   [Nuxt 3 Crash Course Video](https://www.youtube.com/watch?v=dZC4T4UiU1c&t=4332s)
