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
