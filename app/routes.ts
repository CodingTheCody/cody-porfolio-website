import {type RouteConfig, index, layout, route} from '@react-router/dev/routes';

export default [
	layout("layouts/HeaderLayout.tsx", [
		index("routes/home.tsx"),
		route('resume', 'routes/resume.tsx'),
	]),
] satisfies RouteConfig;
