import React, { useState } from "react";
import { Grid, Paper, Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";

const Skill = () => {
	const [showMore, setShowMore] = useState(false);
	const [addingSkill, setAddingSkill] = useState(false);
	const [newSkill, setNewSkill] = useState("");

	const { currSkill } = useSelector(state => state.user);

	const handleShowMore = () => {
		setShowMore(!showMore);
	};

	const handleAddSkill = () => {
		setAddingSkill(true);
	};

	const handleSaveSkill = () => {
		setAddingSkill(false);
		setNewSkill(""); // Clear the text field after saving
	};

	return (
		<Grid container spacing={2}>
			<Grid item xs={8}>
				<Paper style={{ height: "100%", padding: "20px", textAlign: "left", position: "relative" }}>
					<h2>Skills</h2>
					{currSkill?.slice(0, showMore ? currSkill?.length : 2).map((s, index) => (
						<h3 key={index}>{s}</h3>
					))}
					{currSkill?.length > 2 && (
						<Button variant="text" onClick={handleShowMore} style={{ marginTop: "10px" }}>
							{showMore ? "Show Less" : "Show More"}
						</Button>
					)}
					{!showMore && (
						<>
							<Button
								variant="outlined"
								size="small"
								style={{ position: "absolute", top: "10px", right: "10px" }}
								onClick={handleAddSkill}
							>
                Add More Skills
							</Button>
							{addingSkill && (
								<div style={{ marginTop: "40px" }}>
									<TextField
										label="New Skill"
										value={newSkill}
										onChange={(e) => setNewSkill(e.target.value)}
										fullWidth
										style={{ marginBottom: "10px" }}
									/>
									<Button variant="contained" onClick={handleSaveSkill}>
                    Save Skill
									</Button>
								</div>
							)}
						</>
					)}
				</Paper>
			</Grid>
		</Grid>
	);
};

export default Skill;
