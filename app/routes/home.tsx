import {styled, Paper, Typography, Tooltip} from '@mui/material';
import type {Route} from './+types/home';
import {Grid} from '@mui/system';
import React from 'react';
import './home.css';

export function meta({}: Route.MetaArgs) {
	return [
		{title: 'Cody Brooks Portfolio Website'},
		{name: 'description', content: 'Cody Brooks Portfolio Website'},
	];
}

const Item = styled(Paper)(({theme}) => ({
	backgroundColor: '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	...theme.applyStyles('dark', {
		backgroundColor: '#1A2027',
	}),
}));

const languageStack = [
	{
		description: 'TypeScript',
		imageUrl: 'typescript-logo.png',
	},
	{
		description: 'JavaScript',
		imageUrl: 'js-logo.png',
	},
	{
		description: 'C#',
		imageUrl: 'csharp-logo.png',
	},
	{
		description: 'HTML',
		imageUrl: 'html-logo.png',
	},
	{
		description: 'CSS',
		imageUrl: 'css-logo.png',
	},
	{
		description: 'SQL',
		imageUrl: 'sql-logo.png',
	}
];

const techStack = [
	{
		description: 'React',
		imageUrl: 'react-logo.png',
	},
	{
		description: 'Node',
		imageUrl: 'node-logo.png',
	},
	{
		description: 'Angular',
		imageUrl: 'angular-logo.jpg',
	},
	{
		description: 'ASP.NET',
		imageUrl: 'aspnet-logo.png',
	},
];

export default function Home() {
	return <div>
		<Grid container spacing={2}>
			<Grid size={{xs: 12, md: 8}}>
				<Item style={{height: '100%'}}>
					<Typography variant="h3">
						Cody Brooks
					</Typography>
					<Typography variant="h5">
						Senior Software Engineer
					</Typography>
					<p>
						I started programming when I was 11 years old. To me, software development isn't just a job;
						It's a passion.
					</p>
					<Grid container spacing={{xs: 2, sm: 5}} margin={{xs: 2, sm: 5}} padding={{xs: 2, sm: 5}}>
						<Grid size={12}>
							<p>Languages: </p>
						</Grid>
						{
							languageStack.map((item, key) => (
								<Grid size={{md: 4, xs: 6}}>
									<Tooltip title={item.description} key={key}>
										<Paper>
											<img alt={item.description} src={item.imageUrl}
												 className="language-stack-image"/>
										</Paper>
									</Tooltip>
								</Grid>
							))
						}
					</Grid>
				</Item>
			</Grid>
			<Grid size={{xs: 12, md: 4}}>
				<Item>
					<img src="professional_photo_me_cartoonified.png"/>
				</Item>
			</Grid>
		</Grid>
	</div>;
}

console.log('cody test', import.meta.env.VITE_FRONT_END_BASE_URI);
