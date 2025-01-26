export const VITE_DEV_SERVER =
	process.env.NODE_ENV === 'production'
		? undefined
		: await import('vite').then((vite) =>
			vite.createServer({
				server: {middlewareMode: true},
			})
		);
