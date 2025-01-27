import {Body, Post, Controller} from '@nestjs/common';
import {ICreateContactMessage} from '../interfaces/ICreateContactMessage.interface.js';
import {EmailService} from '../services/Email.service.js';

@Controller('api/contact')
export class ContactController {
	constructor(private readonly emailService: EmailService) {
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
