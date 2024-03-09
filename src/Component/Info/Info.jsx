import React from "react";
import {
	Grid,
	Paper,
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	TextField
} from "@mui/material";
import PropTypes from "prop-types";

const Address = ({
	educationDetails,
	handleInputChange,
	handleSave,
	isDialogOpen,
	handleAdd,
	handleCloseDialog
}) => {


	return (
		<Grid container spacing={2}>
			<Grid item xs={8}>
				<Paper
					style={{
						height: "100%",
						padding: "20px",
						textAlign: "left",
						position: "relative"
					}}
				>
					<Button
						variant="outlined"
						size="small"
						style={{ position: "absolute", top: "10px", right: "10px" }}
						onClick={handleAdd("Info")}
					>
            Add Address
					</Button>
					<h2>Address</h2>
					<p>{educationDetails.instituteName}</p>
					<p>
						{educationDetails.name}
					</p>
					<p> {educationDetails.state} </p>
					<p>{educationDetails.district}</p>
				</Paper>
			</Grid>
			<Dialog open={isDialogOpen} onClose={handleCloseDialog}>
				<DialogTitle>Add Education</DialogTitle>
				<DialogContent>
					<TextField
						label="Name"
						name="Name"
						value={educationDetails.Name}
						onChange={handleInputChange}
						fullWidth
						sx={{ mb: 2 }}
					/>
					<TextField
						label="Institute Name"
						name="instituteName"
						value={educationDetails.instituteName}
						onChange={handleInputChange}
						fullWidth
						sx={{ mb: 2 }}
					/>
					<TextField
						label="state"
						name="state"
						value={educationDetails.state}
						onChange={handleInputChange}
						fullWidth
						sx={{ mb: 2 }}
					/>
					<TextField
						label="district"
						name="district"
						value={educationDetails.district}
						onChange={handleInputChange}
						fullWidth
						sx={{ mb: 2 }}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog}>Cancel</Button>
					<Button onClick={handleSave("Info")}>Save</Button>
				</DialogActions>
			</Dialog>
		</Grid>
	);
};

Address.propTypes = {
	educationDetails: PropTypes.object.isRequired, // Corrected PropTypes
	handleInputChange: PropTypes.func.isRequired ,// Corrected PropTypes
	handleSave : PropTypes.func,
	isDialogOpen : PropTypes.bool,
	handleAdd: PropTypes.func,
	handleCloseDialog : PropTypes.func
};
export default Address;
