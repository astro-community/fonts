import { polyfill } from '@astropub/webapi'
import { promises as fs, createWriteStream } from 'node:fs'

polyfill(globalThis)

const API = 'http://google-webfonts-helper.herokuapp.com/api/fonts'

const fonts = await fetch(API).then(response => response.json())

const json = {}

const requests = []

for (const font of fonts) {
	console.log('fetching', font.family)

	requests.push(
		fetch(API + '/' + font.id).then(response => response.json()).then(
			json => [font, json]
		)
	)

	if (requests.length > 3) {
		await Promise.all(requests).then(
			(resolved) => {
				for (const [font, data] of resolved) {
					json[font.family] = Object.assign(font, data)
				}
			}
		)

		requests.splice(0)
	}
}

await fs.writeFile('packages/my-plugin/fonts.json', JSON.stringify(json, null, '  '))
