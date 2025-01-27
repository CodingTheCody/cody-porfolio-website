import {Injectable, NestMiddleware} from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';
import {createRequestHandler} from '@react-router/express';
import {VITE_DEV_SERVER} from '../vite-dev-server.js';
import * as path from 'node:path';

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
	private reactRouterHandler: any;

	private async getReactRouterHandler() {
		if (!this.reactRouterHandler) {
			this.reactRouterHandler = createRequestHandler({
				build: VITE_DEV_SERVER
					? async () => (await VITE_DEV_SERVER).ssrLoadModule('virtual:react-router/server-build')
					// @ts-ignore
					: await import(path.resolve('build/server/index.js')),
			});
		}
		return this.reactRouterHandler;
	}

	public async use(req: Request, res: Response, next: NextFunction): Promise<any> {
		if (req.baseUrl.indexOf('/api') === 0) {
			next();
		} else {
			(await this.getReactRouterHandler())(req, res, next);
		}
	}
}
