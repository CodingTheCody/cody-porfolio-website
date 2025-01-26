import {Controller, Get} from '@nestjs/common';
import {VITE_DEV_SERVER} from '../vite-dev-server';
import {createRequestHandler} from '@react-router/express';

const reactRouterHandler = createRequestHandler({
	build: VITE_DEV_SERVER
		? () => VITE_DEV_SERVER?.ssrLoadModule('virtual:react-router/server-build')
		// @ts-ignore
		: await import('../../build/server/index.js'),
});

@Controller()
export class FrontendController {
	@Get()
	getIndex(req, res, next) {
		reactRouterHandler(req as any, res as any, undefined as any);
	}
}
