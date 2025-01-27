import {Body, Post, Controller, Logger} from '@nestjs/common';
import {ICreateContactMessage} from '../interfaces/ICreateContactMessage.interface.js';
import {EmailService} from '../services/Email.service.js';

@Controller('api/contact')
export class ContactController {
	constructor(
		private readonly emailService: EmailService,
		private readonly logger: Logger,
	) {
	}

	@Post()
	async createContactMessage(@Body() body: ICreateContactMessage) {
		try {
			let html = `
${body.name}

${body.message}

Phone number?: ${body.phoneNumber}

Email: ${body.email}
`;
			const email = {
				to: 'codyallenbrooks12@yahoo.com',
				subject: 'New Contact Message',
				html: html,
				text: html
			};
			this.logger.log('Sending contact email', email);
			await this.emailService.sendEmail(email);
			return {sent: true};
		} catch (err) {
			this.logger.error('Failed to send email', err);
			return false;
		}
	}
}
