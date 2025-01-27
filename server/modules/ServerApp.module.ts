import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {FrontendMiddleware} from '../middleware/Frontend.middleware.js';
import {ContactController} from '../controllers/Contact.controller.js';
import {EmailService} from '../services/Email.service.js';

@Module({
	controllers: [
		ContactController,
	],
	providers: [
		EmailService,
	],
})
export class ServerAppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(FrontendMiddleware)
			.forRoutes('*');
	}
}

