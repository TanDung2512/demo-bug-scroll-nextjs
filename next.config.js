/** @type {import('next').NextConfig} */
module.exports = {
	async rewrites() {
		return [
			{
				source: "/",
				destination: "/home",
			},
			{
				source: "/detail/:id",
				destination: "/detail/:id",
			},
		]
	},
}
