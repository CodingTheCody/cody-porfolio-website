import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {FrontendMiddleware} from '../middleware/Frontend.middleware';

@Module({
	imports: [],
	controllers: [
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
