import {styled, Paper} from '@mui/material';

export const GridItem = styled(Paper)(({theme}) => ({
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));
