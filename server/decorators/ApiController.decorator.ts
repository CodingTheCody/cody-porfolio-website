import {applyDecorators, Controller} from '@nestjs/common';

/**
 * Automatically applies the `Controller` decorator to the class and prefixes the path with `api/`.
 * @param prefix
 * @constructor
 */
export function ApiController(prefix: string | string[]) {
	if (Array.isArray(prefix)) prefix = prefix.map(p => `api/${p}`);
	else prefix = `api/${prefix}`;
	console.log('prefix', prefix);
	return applyDecorators(Controller(prefix));
}
