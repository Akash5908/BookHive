/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			ms: '360px',
			xs: '480px',
			...defaultTheme.screens,
		},
		fontFamily: {
			merriweather: ['Merriweather', 'sans-serif'],
			poppins: ['Poppins', 'sans-serif'],
			roboto: ['Roboto', 'sans-serif'],
			sans: defaultTheme.fontFamily.sans,
			serif: defaultTheme.fontFamily.serif,
		},
	},
	plugins: [],
	safelist: [
		'from-red-600',
		'from-orange-600',
		'from-amber-600',
		'from-yellow-600',
		'from-lime-600',
		'from-green-600',
		'from-emerald-600',
		'from-teal-600',
		'from-cyan-600',
		'from-sky-600',
		'from-blue-600',
		'from-indigo-600',
		'from-violet-600',
		'from-purple-600',
		'from-fuchsia-600',
		'from-pink-600',
		'from-rose-600',
		'from-stone-600',
		'from-zinc-600',
		'from-slate-600',
		'bg-red-600',
		'bg-orange-600',
		'bg-amber-600',
		'bg-yellow-600',
		'bg-lime-600',
		'bg-green-600',
		'bg-emerald-600',
		'bg-teal-600',
		'bg-cyan-600',
		'bg-sky-600',
		'bg-blue-600',
		'bg-indigo-600',
		'bg-violet-600',
		'bg-purple-600',
		'bg-fuchsia-600',
		'bg-pink-600',
		'bg-rose-600',
		'bg-stone-600',
		'bg-zinc-600',
		'bg-slate-600',
		'bg-gradient-to-br from-red-800 to bg-red-400',
		'bg-gradient-to-br from-orange-800 to bg-orange-400',
		'bg-gradient-to-br from-amber-800 to bg-amber-400',
		'bg-gradient-to-br from-yellow-800 to bg-yellow-400',
		'bg-gradient-to-br from-lime-800 to bg-lime-400',
		'bg-gradient-to-br from-green-800 to bg-green-400',
		'bg-gradient-to-br from-emerald-800 to bg-emerald-400',
		'bg-gradient-to-br from-teal-800 to bg-teal-400',
		'bg-gradient-to-br from-cyan-800 to bg-cyan-400',
		'bg-gradient-to-br from-sky-800 to bg-sky-400',
		'bg-gradient-to-br from-blue-800 to bg-blue-400',
		'bg-gradient-to-br from-indigo-800 to bg-indigo-400',
		'bg-gradient-to-br from-violet-800 to bg-violet-400',
		'bg-gradient-to-br from-purple-800 to bg-purple-400',
		'bg-gradient-to-br from-fuchsia-800 to bg-fuchsia-400',
		'bg-gradient-to-br from-pink-800 to bg-pink-400',
		'bg-gradient-to-br from-rose-800 to bg-rose-400',
		'bg-gradient-to-br from-stone-800 to bg-stone-400',
		'bg-gradient-to-br from-zinc-800 to bg-zinc-400',
		'bg-gradient-to-br from-slate-800 to bg-slate-400',
	],
}
