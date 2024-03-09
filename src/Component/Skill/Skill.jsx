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
const Skill = ({
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
						onClick={handleAdd("Skill")}
					>
           Skill
					</Button>
					<h2>Skill</h2>
					<p>{educationDetails.skill}</p>
				</Paper>
			</Grid>
			<Dialog open={isDialogOpen} onClose={handleCloseDialog("Skill")}>
				<DialogTitle>Skill</DialogTitle>
				<DialogContent>
					<div style={{ width: "400px", overflowX: "auto" }}> {/* Adjust width as needed */}
						<TextField
							label="skill"
							name="skill"
							value={educationDetails.skill}
							onChange={handleInputChange}
							fullWidth
							sx={{ mb: 2 }}
							InputProps={{
								style: { minWidth: "200px" }  // Set minimum width for input
							}}
						/>
					</div>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog("Skill")}>Cancel</Button>
					<Button onClick={handleSave("Skill")}>Save</Button>
				</DialogActions>
			</Dialog>

		</Grid>
	);
};

Skill.propTypes = {
	educationDetails: PropTypes.object.isRequired, // Corrected PropTypes
	handleInputChange: PropTypes.func.isRequired ,// Corrected PropTypes
	handleSave : PropTypes.func,
	isDialogOpen : PropTypes.bool,
	handleAdd: PropTypes.func,
	handleCloseDialog : PropTypes.func
};

export default Skill;
