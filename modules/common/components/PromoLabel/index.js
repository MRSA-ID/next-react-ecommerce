import React from "react";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { Grid, Chip } from "@material-ui/core";

const useStyles = makeStyles({
	label: {
		fontSize: "10px",
		fontWeight: "bold",
		paddingLeft: "0 !important",
	},
});

const PromoLabel = ({ promoLabel }) => {
	const classes = useStyles();

	return (
		<Grid
			container
			spacing={1}>
			{promoLabel.length > 0 &&
				promoLabel.map((label, index) => {
					return (
						<Grid
							item
							key={label + index}>
							<Chip
								color="secondary"
								size="small"
								label={label.toLowerCase()}
								className={classes.label}
							/>
						</Grid>
					);
				})}
		</Grid>
	);
};

PromoLabel.propTypes = {
	promoLabel: PropTypes.array.isRequired,
};

export default PromoLabel;
