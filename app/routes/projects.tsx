import type {Route} from '../../.react-router/types/app/routes/+types/home';
import {Grid} from '@mui/system';
import {GridItem} from '~/grid-item/grid-item';
import {Accordion, AccordionSummary, Typography, AccordionDetails} from '@mui/material';
import React from 'react';

export function meta({}: Route.MetaArgs) {
	return [
		{title: 'Cody Brooks Portfolio Website - Projects'},
		{name: 'description', content: 'Cody Brooks Portfolio Projects Page'},
	];
}

const projects: {
	title: string,
	details: string | any
}[] = [
	{
		title: 'Cody\'s Portfolio Website',
		details: <div>
			This portfolio showcases my work as a software engineer, built with modern technologies like React, Vite,
			NestJS, and Material UI. It’s a server-side rendered (SSR) application that emphasizes performance,
			scalability, and a seamless user experience. The site is designed to highlight my projects, skills, and
			technical expertise, with each section optimized for fast load times and dynamic content. Explore the
			projects I've worked on, dive into the technical details, and get a feel for my approach to building
			cutting-edge web applications.
		</div>
	},
	{
		title: 'Browser Services (Seismic)',
		details: <div>
			Browser Services is a lightweight and efficient dependency injection library developed for Seismic Software,
			Inc. It provides a structured and type-safe way to manage dependencies in browser-based applications, making
			it easier to develop, test, and scale complex systems. With automatic resolution, lifecycle management, and
			modular configuration support, Browser Services simplifies dependency management while maintaining minimal
			overhead. Designed to integrate seamlessly with any modern frontend frameworks, it enhances code
			maintainability and promotes a cleaner architecture.
		</div>
	},
	{
		title: 'Microsoft Wopi Integration (Seismic)',
		details: <div>
			As part of Seismic Software's collaboration and content-sharing platform, I developed the integration for
			Microsoft WOPI (Web Application Open Platform Interface). This integration allows seamless interaction
			between Seismic's content management system and Microsoft Office applications, enabling users to view, edit,
			and collaborate on documents directly within Seismic. By leveraging WOPI, I was able to enhance the user
			experience, providing real-time collaboration features while maintaining security and data integrity. This
			project gave me the opportunity to work across the full tech stack, honing my skills in both backend and
			frontend development to ensure smooth functionality and scalability.
		</div>
	},
	{
		title: 'LivePlayer (Seismic)',
		details: <div>

			LivePlayer is a versatile content rendering tool that supports PDFs, images, videos, and text. It not only
			displays content seamlessly but also allows users to annotate and comment in real time, enhancing
			collaboration and interactivity.
		</div>
	}
];

export default function Projects() {
	return (
		<Grid container>
			<GridItem style={{width: '100%', textAlign: 'left'}}>
				Here are list of some of the projects I've developed throughout the years
				{
					projects.map((project, index) =>
						<Accordion elevation={2} key={index}>
							<AccordionSummary
								expandIcon={<span className="material-icons">keyboard_double_arrow_down</span>}
								aria-controls="panel1-content"
								id="panel1-header"
							>
								<Typography component="span" variant="h6">{project.title}</Typography>
							</AccordionSummary>
							<AccordionDetails>
								{project.details}
							</AccordionDetails>
						</Accordion>
					)
				}
			</GridItem>
		</Grid>
	);
}
