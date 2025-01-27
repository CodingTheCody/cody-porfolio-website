import 'dotenv/config';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import {NestFactory} from '@nestjs/core';
import type {NestExpressApplication} from '@nestjs/platform-express';
import {ServerAppModule} from './modules/ServerApp.module.js';
import {VITE_DEV_SERVER} from './vite-dev-server.js';

async function initialize() {
	const app = await NestFactory.create<NestExpressApplication>(ServerAppModule, {

	});

	app.use(compression());
	app.disable('x-powered-by');

	if (VITE_DEV_SERVER) {
		app.use((await VITE_DEV_SERVER).middlewares);
	} else {
		app.use(
			'/assets',
			express.static('build/client/assets', {immutable: true, maxAge: '1y'})
		);
	}

	app.use(express.static('build/client', {maxAge: '1h'}));
	app.use(morgan('tiny'));

	const port = process.env.PORT || 5173;
	app.listen(port, () =>
		console.log(`Express server listening at http://localhost:${port}`)
	).catch((err) => {
		console.error(err);
	});

}

initialize();
