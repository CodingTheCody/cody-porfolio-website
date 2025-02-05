import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'react-router';

import type {Route} from './+types/root';
import stylesheet from './app.css?url';

export const links: Route.LinksFunction = () => [
	{rel: 'preconnect', href: 'https://fonts.googleapis.com'},
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
	},
	{rel: 'stylesheet', href: stylesheet},
];

export function Layout({children}: { children: React.ReactNode }) {
	const googleScript = `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-D3RW9KMVLM"></script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-D3RW9KMVLM');
</script>
	`;
	return (
		<html lang="en">
		<head>
			<meta charSet="utf-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<Meta/>
			<Links/>
		</head>
		<body>
		{process.env.NODE_ENV === 'production' || true ?
			<div dangerouslySetInnerHTML={{__html: googleScript}}></div> : undefined}
		{children}
		<ScrollRestoration/>
		<Scripts/>
		</body>
		</html>
	);
}

export default function App() {
	return <Outlet/>;
}

export function ErrorBoundary({error}: Route.ErrorBoundaryProps) {
	let message = 'Oops!';
	let details = 'An unexpected error occurred.';
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error';
		details =
			error.status === 404
				? 'The requested page could not be found.'
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
			)}
		</main>
	);
}
