import React from "react";
import PropTypes from "prop-types";
import {
	makeStyles,
	Grid,
	Typography,
	Grid,
	Paper,
	Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FFBE53 90%)",
		borderRadius: 3,
		border: 0,
		color: "white",
		height: 48,
		padding: "0 30px",
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)",
		marginTop: theme.spacing(2),
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
}));

const PromoCard = ({ promo }) => {
	const clasess = useStyles();

	if (promo.length > 0) {
		return (
			<Grid
				container
				spacing={1}>
				{promo.map((prm) => {
					return (
						<Grid item>
							<Paper
								variant="outlined"
								classes={{ root: clasess.root }}>
								<Typography>{prm}</Typography>
							</Paper>
						</Grid>
					);
				})}
			</Grid>
		);
	} else {
		return null;
	}
};

promoCard.PropTypes = {
	promo: PropTypes.array.isRequired,
};

export default PromoCard;
