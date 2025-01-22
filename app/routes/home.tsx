import {styled, Paper, Typography, ImageList, ImageListItem, Tooltip} from '@mui/material';
import type {Route} from './+types/home';
import {Grid} from '@mui/system';
import React from 'react';

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
					<p>Here are some of the tech stack I am an expert in:</p>
					<ImageList rowHeight={320} title='test' variant='quilted' cols={2}>
						{techStack.map((item, key) => (
							<Tooltip title={item.description} key={key}>
								<ImageListItem key={item.imageUrl}>
									<img src={item.imageUrl}/>
								</ImageListItem>
							</Tooltip>
						))}
					</ImageList>
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
