import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	alias: {
		'element-plus/dist/index.css':resolve(__dirname,'./node_modules/element-plus/dist/index.css'),
		'element-plus':resolve(__dirname,'./node_modules/element-plus/dist/index.full.js'),
	},
	plugins:['~/plugins/element'],
	vite: {
		optimizeDeps: {
			include: ['element-plus']
		}
	}
})
