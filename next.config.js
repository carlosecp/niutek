module.exports = {
	env: {
		BACKEND_URL: 'https://backend-dot-nicascriptproject.uc.r.appspot.com',
		AUTH0_SECRET: 'PjV3JNRY32ZIUZdBOYylPIFJS6ekd4n6',
		AUTH0_BASE_URL: 'http://localhost:3000',
		AUTH0_ISSUER_BASE_URL: 'dev-94njc4qr.us.auth0.com',
		AUTH0_CLIENT_ID: 'PAuRnVYVxBpzcI4MfnPUUwSVHOEel7F1',
		AUTH0_CLIENT_SECRET:
			'fng10OAYhggj1yrUjy0y9-yV53KctdjdDMqLxvOriEHo3zEXOji6WTKwSwZ7uVbA'
	},
	webpack: (config, { dev, isServer }) => {
		if (isServer) {
			require('./scripts/generate-sitemap')
		}

		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				react: 'preact/compat',
				'react-dom/test-utils': 'preact/test-utils',
				'react-dom': 'preact/compat'
			})
		}

		return config
	}
}
