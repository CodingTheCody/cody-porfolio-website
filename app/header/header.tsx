import {
	AppBar,
	Toolbar,
	Container,
	Typography,
	Box,
	IconButton,
	Menu,
	MenuItem,
	Button,
} from '@mui/material';
import React, {useCallback} from 'react';
import {Link} from 'react-router';

const pages = [
	{label: 'Resume', link: '/resume'},
	{label: 'Contact', link: '/contact'},
];

export function Header() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	}, []);

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Link to="/">

						<Typography
							variant="h6"
							noWrap
							sx={{
								mr: 2,
								display: {xs: 'none', md: 'flex'},
								fontWeight: 700,
								letterSpacing: '.1rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							Cody Brooks
						</Typography>
					</Link>
					<Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<span className="material-icons">menu</span>
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{display: {xs: 'block', md: 'none'}}}
						>
							{pages.map((page, index) => (
								<Link to={page.link} key={index}>
									<MenuItem key={page.label} onClick={handleCloseNavMenu}>
										<Typography sx={{textAlign: 'center'}}>{page.label}</Typography>
									</MenuItem>
								</Link>
							))}
						</Menu>
					</Box>
					<Link to="/">
						<Typography
							variant="h5"
							noWrap
							sx={{
								mr: 2,
								display: {xs: 'flex', md: 'none'},
								flexGrow: 1,
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							Cody Brooks
						</Typography>
					</Link>
					<Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
						{pages.map((page, index) => (
							<Link to={page.link} key={index}>
								<Button
									key={page.label}
									onClick={handleCloseNavMenu}
									sx={{my: 2, color: 'white', display: 'block'}}
								>
									{page.label}
								</Button>
							</Link>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
