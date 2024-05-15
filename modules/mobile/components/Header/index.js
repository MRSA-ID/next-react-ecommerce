import React from "react";
import Link from "next/link";
import {
	Typography,
	makeStyles,
	IconButton,
	Toolbar,
	AppBar,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	root: {
		flex: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton
						className={classes.menuButton}
						color="inherit"
						aria-label="menu">
						<Menu />
					</IconButton>
					<Link href="/">
						<Typography variant="h4">Ecommerce Frontend</Typography>
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
