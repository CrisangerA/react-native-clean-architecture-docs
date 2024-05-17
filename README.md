# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
USE_SSH=true && CURRENT_BRANCH=gh-pages && GIT_USER=crisangera bun run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Config for deploy
rm -rf build
bun run build
rm -rf .docusaurus .vscode blog docs node_modules src static .gitignore babel.config.js docusaurus.config.ts package-lock.json package.json README.md sidebars.ts tsconfig.json
mv build/* .
rm -rf build