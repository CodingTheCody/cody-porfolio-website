import {Injectable, NestMiddleware} from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';
import {createRequestHandler} from '@react-router/express';
import {VITE_DEV_SERVER} from '../vite-dev-server';

const reactRouterHandler = createRequestHandler({
	build: VITE_DEV_SERVER
		? () => VITE_DEV_SERVER.ssrLoadModule('virtual:react-router/server-build')
		// @ts-ignore
		: await import('../../../build/server/index.js'),
});

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
	public use(req: Request, res: Response, next: NextFunction): any {
		if (req.url.indexOf('/api') === 1) {
			next();
		} else {
			reactRouterHandler(req, res, next);
		}
	}
}
