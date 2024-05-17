import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";
import { Star, StarHalf } from "@material-ui/icons";
import clsx from "clsx";

const useStyles = makeStyles({
	root: {
		justifyContent: "flex-end",
	},
});

const ProductRating = ({ rating, sold, alignRight }) => {
	const classes = useStyles();
	const starsComponent = [];

	const modulus = rating % 1; // 4.6 => 0.6
	const ratingCountFloored = Math.floor(rating); // 4.9 => 4

	for (let i = 0; i < ratingCountFloored; i++) {
		starsComponent.push(
			<Star
				key={i}
				style={{ fontSize: 12, color: yellow[800] }}
			/>
		);
	}

	if (modulus >= 0.5) {
		starsComponent.push(
			<StarHalf
				key={"half-star"}
				style={{ fontSize: 12, color: yellow[800] }}
			/>
		);
	}

	return (
		<Grid
			container
			alignItems="center"
			className={clsx({
				[classes.root]: alignRight,
			})}>
			{starsComponent}
			<Typography variant="caption">{`(${sold})`}</Typography>
		</Grid>
	);
};

ProductRating.propTypes = {
	rating: PropTypes.number.isRequired,
	sold: PropTypes.number.isRequired,
	alignRight: PropTypes.bool,
};

export default ProductRating;
