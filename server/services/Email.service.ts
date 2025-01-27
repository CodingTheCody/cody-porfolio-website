import {Injectable} from '@nestjs/common';
import {MailtrapClient} from 'mailtrap';

@Injectable()
export class EmailService {
	private client: MailtrapClient;
	constructor() {
		this.client = new MailtrapClient({
			token: process.env.MAILTRAP_API_KEY,
		});
	}

	async sendEmail(email: { to: string, subject: string, text: string, html?: string }): Promise<void> {
		const recipients = [
			{
				email: 'codyallenbrooks12@yahoo.com',
			}
		];
		const sender = {
			email: 'hello@codethecody.com',
			name: 'Cody Portfolio Website',
		};
		await this.client.send({
			from: sender,
			to: recipients,
			subject: email.subject,
			text: email.text,
			html: email.html,
			category: 'Custom Message',
		});
	}
}
