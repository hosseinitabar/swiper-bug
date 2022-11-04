module.exports = {
	output: 'standalone',
	images: {
	    remotePatterns: [
	        {
	            hostname: 'picsum.photo'
	        }
	    ],
	},
	experimental: {
	    appDir: true,
	},
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config) => {
	    config.resolve.fallback = { fs: false }
	    config.module.rules.push({
	        test: /\.svg$/i,
	        issuer: /\.[jt]sx?$/,
	        use: ['@svgr/webpack'],
	    })
	    return config;
	},
}
