import {Body, Post, Controller} from '@nestjs/common';
import {ICreateContactMessage} from '../interfaces/ICreateContactMessage.interface.js';
import {EmailService} from '../services/Email.service.js';

@Controller('api/contact')
export class ContactController {
	constructor(private readonly emailService: EmailService) {
		console.log('emailService', emailService);
	}

	@Post()
	async createContactMessage(@Body() body: ICreateContactMessage) {
		console.log('body', body);
		try {
			let html = `
${body.name}

${body.message}

Phone number?: ${body.phoneNumber}
`;
			const email = {
				to: 'codyallenbrooks12@yahoo.com',
				subject: 'New Contact Message',
				html: html,
				text: html
			};
			console.log('sending email', email);
			await this.emailService.sendEmail(email);
			console.log('email sent');
			return {sent: true};
		} catch (err) {
			console.error(err);
			return false;
		}
	}
}
