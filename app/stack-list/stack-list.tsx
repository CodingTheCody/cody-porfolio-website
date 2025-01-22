import {Grid} from '@mui/system';
import {Typography, Paper} from '@mui/material';
import React from 'react';

export function StackList(props: { title: string, list: { imageUrl: string, description: string }[] }) {
	return (
		<Grid container spacing={{xs: 2, sm: 5}} padding={{xs: 2, sm: 5}}>
			<Grid size={12}>
				<Typography variant="h6">
					{props.title}
				</Typography>
			</Grid>
			{
				props.list.map((item, key) => (
					<Grid size={{md: 4, xs: 6}} key={key}>
						<Paper style={{paddingTop: '10px'}} variant="elevation" elevation={4}>
							<Typography variant="h6">
								{item.description}
							</Typography>
							<img alt={item.description} src={item.imageUrl}
								 className="language-stack-image"/>
						</Paper>
					</Grid>
				))
			}
		</Grid>
	);
}
