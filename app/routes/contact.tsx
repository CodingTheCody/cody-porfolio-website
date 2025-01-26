import type {Route} from '../../.react-router/types/app/routes/+types/home';
import {TextField, Button, Container, Typography, Box} from '@mui/material';
import {Grid} from '@mui/system';
import {useState} from 'react';
import {GridItem} from '~/grid-item/grid-item';

export function meta({}: Route.MetaArgs) {
	return [
		{title: 'Cody Brooks Portfolio Website - Contact'},
		{name: 'description', content: 'Cody Brooks Portfolio Contact Page'},
	];
}

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const {name, value} = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle form submission (e.g., send data to a server or display a success message)
		console.log('Form submitted:', formData);
	};

	return (
		<Grid container>
			<GridItem>
				<Typography variant="h4" component="h1" gutterBottom>
					Contact Me
				</Typography>
				<Typography variant="body1" color="textSecondary" paragraph>
					I’d love to hear from you! Please fill out the form below and I’ll get back to you as soon as
					possible.
				</Typography>
				<form onSubmit={handleSubmit}>
					<Grid container spacing={3}>
						<Grid>
							<TextField
								fullWidth
								label="Name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								variant="outlined"
								required
							/>
						</Grid>
						<Grid>
							<TextField
								fullWidth
								label="Email"
								name="email"
								type="email"
								value={formData.email}
								onChange={handleChange}
								variant="outlined"
								required
							/>
						</Grid>
						<Grid>
							<TextField
								fullWidth
								label="Message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								variant="outlined"
								multiline
								rows={4}
								required
							/>
						</Grid>
						<Grid>
							<Button type="submit" variant="contained" color="primary" fullWidth>
								Send Message
							</Button>
						</Grid>
					</Grid>
				</form>
			</GridItem>
		</Grid>
	);
}
