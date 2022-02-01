# Astro Fonts

**Astro Fonts** lets you embed fonts in Astro.

```astro
---
import Font from '@astropub/fonts'
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Astro Fonts Example</title>
    <Font.Comforter for="body" />
  </head>
  <body>
    <h1>Astro Fonts Example</h1>
  </body>
</html>
```

```shell
npm init astro -- --template astro-community/plugin-template
```

```js
// astro.config.js
import { fontsPlugin } from '@astropub/fonts'

/** @type {import('astro').AstroUserConfig} */
const config = {
  renderers: [],
  vite: {
    plugins: [
      fontsPlugin()
    ]
  }
}

export default config
```

[![Open in StackBlitz][open-img]][open-url]

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── demo/
│   ├── public/
│   └── src/
│       └── pages/
│           └── index.astro
└── packages/
    └── my-plugin/
        ├── index.js
        └── package.json
```

This project uses **workspaces** to develop a single package, `@astropub/fonts`.

It also includes a minimal Astro project, `demo`, for developing and demonstrating the plugin.

## Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                       |
|:----------------|:---------------------------------------------|
| `npm install`   | Installs dependencies                        |
| `npm run start` | Starts local dev server at `localhost:3000`  |
| `npm run build` | Build your production site to `./dist/`      |
| `npm run serve` | Preview your build locally, before deploying |

Want to learn more?
Read [our documentation][docs-url] or jump into our [Discord server][chat-url].

[chat-url]: https://astro.build/chat
[docs-url]: https://github.com/withastro/astro
[open-img]: https://developer.stackblitz.com/img/open_in_stackblitz.svg
[open-url]: https://stackblitz.com/github/astro-community/fonts?file=demo/src/pages/index.astro
