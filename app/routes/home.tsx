import {styled, Paper, Typography} from '@mui/material';
import type {Route} from './+types/home';
import {Grid} from '@mui/system';
import React from 'react';
import './home.css';
import {StackList} from '~/stack-list/stack-list';

export function meta({}: Route.MetaArgs) {
	return [
		{title: 'Cody Brooks Portfolio Website'},
		{name: 'description', content: 'Cody Brooks Portfolio Website'},
	];
}

const Item = styled(Paper)(({theme}) => ({
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
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
					<StackList title="Languages:" list={languageStack}/>
				</Item>
			</Grid>
			<Grid size={{xs: 12, md: 4}}>
				<Item>
					<img alt='Professional photo' src="professional_photo_me_cartoonified.png"/>
				</Item>
			</Grid>
		</Grid>
	</div>;
}

console.log('cody test', import.meta.env.VITE_FRONT_END_BASE_URI);
