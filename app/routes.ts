import {type RouteConfig, index, layout, route} from '@react-router/dev/routes';

export default [
	layout("layouts/HeaderLayout.tsx", [
		index("routes/home.tsx"),
		route('resume', 'routes/resume.tsx'),
		route('contact', 'routes/contact.tsx'),
		route('projects', 'routes/projects.tsx'),
		route('consulting', 'routes/consulting.tsx'),
	]),
] satisfies RouteConfig;
