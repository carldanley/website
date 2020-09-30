# website - By carldanley

## Prerequisites

In order to build locally, you'll need the following installed:

* node
* npm

Then, you'll need to perform the following steps:

* `git clone git@github.com:carldanley/website.git`
* `yarn` (this means you need to have node/npm installed)

## Run Commands

Here is a list of helpful commands you can perform from the root directory:

* `yarn run dev` - Starts up webpack-dev-server and allows you to develop with [hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/)
* `yarn run prod` - Builds a `/dist` directory full of the compiled assets; ready for production
* `yarn run lint` - Lints the codebase with eslint
* `yarn run lint:fix` - Attempts to automatically fix linting issues eslint has detected
