import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {FrontendController} from '../controllers/Frontend.controller';
import {FrontendMiddleware} from '../middleware/Frontend.middleware';

@Module({
	imports: [],
	controllers: [
		FrontendController,
	],
	providers: [

	],
})
export class ServerAppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(FrontendMiddleware)
			.forRoutes('*');
	}
}
