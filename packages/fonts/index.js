import { fetch } from '@astropub/webapi'
import { assets } from './assets.js'
import { fonts } from './fonts.js'

const prefix = 'https://fonts.gstatic.com/s/'

/** @type {import('vite').Plugin} */
export const fontsPlugin = () => {
	return {
		name: '@astropub/fonts',
		async generateBundle(_options, bundle) {
			const bundleEntries = Object.entries(bundle)

			for (const asset of assets) {
				const arrayBuffer = await fetch(asset).then(response => response.arrayBuffer())

				const emittedFileName = '/' + this.getFileName(this.emitFile({
					type: 'asset',
					name: asset.split('/').at(-1),
					fileName: asset.split('/').at(-1),
					source: new Uint8Array(arrayBuffer),
				}))

				for (const [_file, info] of bundleEntries) {
					if ('source' in info && typeof info.source === 'string') {
						info.source = info.source.replaceAll(asset, emittedFileName)
					}
				}
			}
		}
	}
}

const defaultFontComponent = async (result, props, slots) => {
	return ``
}

defaultFontComponent.isAstroComponentFactory = true

const createFontComponent = (name) => {
	const component = async (result, props, slots) => {
		if (name in fonts) {
			const font = fonts[name]

			const cssText = []

			for (const variant of font.variants) {
				cssText.push(
					`@font-face{`,
					`font-family:${name.replace(/_/g, ' ')};`,
					variant.style ? `font-style:${variant.style};` : ``,
					variant.weight ? `font-weight: ${variant.weight};` : ``,
					`src:url("${prefix}${variant.src}")}`
				)

				assets.add(prefix + variant.src)
			}

			result.styles.add({
				children: cssText.join('')
			})
		}

		if (props.for) {
			result.styles.add({
				children: `:where(${props.for}){font-family:${name.replace(/_/g, ' ')}}`
			})
		}

		return ``
	}

	component.isAstroComponentFactory = true

	return component
}

const Font = new Proxy(defaultFontComponent, {
	get(_target, name) {
		return createFontComponent(name)
	}
})

export default Font
