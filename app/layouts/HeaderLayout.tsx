import {Container} from '@mui/material';
import {Header} from '~/header/header';
import {Outlet} from 'react-router';

export default function HeaderLayout() {
	return (
		<>
			<Header/>
			<Container>
				<Outlet/>
			</Container>
		</>
	);
}
