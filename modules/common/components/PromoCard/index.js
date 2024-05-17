import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Grid, Typography, Paper } from "@material-ui/core";

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

	const prettyPromoLabel = (prm) => {
		let res;
		switch (prm) {
			case "CASHBACK":
				res = "Cashback";
				break;
			case "FREESHIPPING":
				res = "Free Shipping";
				break;
			default:
				res = "Invalid Label";
		}

		return res;
	};

	const breakpoints = promo.length > 1 ? 6 : 12;

	if (promo.length > 0) {
		return (
			<Grid
				container
				spacing={1}>
				{promo.map((prm) => {
					return (
						<Grid
							item
							xs={breakpoints}
							sm={breakpoints}>
							<Paper
								variant="outlined"
								classes={{ root: clasess.root }}>
								<Typography>{prettyPromoLabel(prm)}</Typography>
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

PromoCard.PropTypes = {
	promo: PropTypes.array.isRequired,
};

export default PromoCard;
