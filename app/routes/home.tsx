import {Typography} from '@mui/material';
import type {Route} from './+types/home';
import {Grid} from '@mui/system';
import React from 'react';
import './home.css';
import {StackList} from '~/stack-list/stack-list';
import {GridItem} from '~/grid-item/grid-item';

export function meta({}: Route.MetaArgs) {
	return [
		{title: 'Cody Brooks Portfolio Website'},
		{name: 'description', content: 'Cody Brooks Portfolio Website'},
	];
}

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
		imageUrl: 'angular-logo.png',
	},
	{
		description: 'ASP.NET',
		imageUrl: 'aspnet-logo.png',
	},
	{
		description: 'MongoDB',
		imageUrl: 'mongodb-logo.webp',
	},
];

export default function Home() {
	return <div>
		<Grid container spacing={2}>
			<Grid>
				<GridItem style={{height: '100%', textAlign: 'left'}} className="section-about-me">
					<Grid container>
						<Grid size={{md: 8}}>
							<Typography variant="h3">
								Cody Brooks
							</Typography>
							<Typography variant="h5">
								Senior Software Engineer
							</Typography>
							<p>
								Hi, I'm Cody Brooks, an experienced Full Stack Developer with over 12 years of
								professional
								experience in crafting scalable, high-performance applications. I created my first
								online
								application at the age of 11. For me, it's not just a job; it's a passion.
							</p>
							<p>
								Over the years, I've honed my skills working with leading frameworks like React,
								Angular,
								NodeJS, and ASP.NET. I specialize in designing responsive, modern applications that
								deliver
								seamless user experiences across platforms.
							</p>
							<p>
								Beyond coding, I enjoy staying on the cutting edge of technology, collaborating with
								teams,
								and mentoring the next generation of software engineers.
							</p>
							<p>
								Feel free to check out my work and get in touch—I’m always excited to connect!
							</p>
						</Grid>
						<Grid size={{md: 4}} alignContent="center">
							<img alt="Professional photo" src="professional_photo_me_cartoonified.png"/>
						</Grid>
					</Grid>
				</GridItem>
			</Grid>
			<Grid style={{marginTop: 15}}>
				<GridItem>
					<StackList title="Languages:" list={languageStack}/>
				</GridItem>
			</Grid>
			<Grid>
				<GridItem>
					<StackList title="Frameworks:" list={techStack}/>
				</GridItem>
			</Grid>
		</Grid>
	</div>;
}
