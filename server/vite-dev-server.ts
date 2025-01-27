export let VITE_DEV_SERVER =
	process.env.NODE_ENV === 'production'
		? undefined
		: import('vite').then((vite) =>
			vite.createServer({
				server: {middlewareMode: true},
			})
		);

