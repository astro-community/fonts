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

## Usage

Install **Astro Fonts** to your project.

```shell
npm install @astropub/fonts
```

Add **Astro Fonts** to your Astro configuration.

```js
import { myPlugin } from '@astropub/fonts'

/** @type {import('astro').AstroUserConfig} */
const config = {
  vite: {
    plugins: [
      myPlugin()
    ]
  }
}

export default config
```

Enjoy!
