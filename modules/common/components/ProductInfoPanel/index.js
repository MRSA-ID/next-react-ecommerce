import React from "react";
import {
	makeStyles,
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails,
	Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: theme.spacing(2),
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
}));

const ProductInfoPanel = () => {
	const clasess = useStyles();

	return (
		<div className={clasess.container}>
			<ExpansionPanel>
				<ExpansionPanelSummary
					expandIcon={<ExpandMore />}
					aria-control="panel1a-content"
					id="panel1a-header">
					<Typography className={clasess.heading}>Product Info 1</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
						lorem ipsum dolor sit amet, consectetur adip. Cum societes natoque
						penatibus et justo
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>

			<ExpansionPanel>
				<ExpansionPanelSummary
					expandIcon={<ExpandMore />}
					aria-control="panel2a-content"
					id="panel2a-header">
					<Typography className={clasess.heading}>Product Info 2</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
						lorem ipsum dolor sit amet, consectetur adip. Cum societes natoque
						penatibus et justo
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>

			<ExpansionPanel>
				<ExpansionPanelSummary
					expandIcon={<ExpandMore />}
					aria-control="panel3a-content"
					id="panel3a-header">
					<Typography className={clasess.heading}>Product Info 3</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
						lorem ipsum dolor sit amet, consectetur adip. Cum societes natoque
						penatibus et justo
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
};

export default ProductInfoPanel;
