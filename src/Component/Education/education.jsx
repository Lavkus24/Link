import React from "react";
import {
	Grid,
	Paper,
	Button
} from "@mui/material";
import { useSelector } from "react-redux";

const Education = () => {
	const {
		instituteName,
		yoj,
		yoe,
		grade,
		activity,
		specification
	} = useSelector(state => state.user);

	return (
		<Grid container spacing={2}>
			<Grid item xs={8}>
				<Paper style={{ height: "100%", padding: "20px", textAlign: "left", position: "relative" }}>
					<Button
						variant="outlined"
						size="small"
						style={{ position: "absolute", top: "10px", right: "10px" }}
					>
            Edit
					</Button>
					<h2>Education</h2>
					<p>{instituteName}</p>
					<p>Intergrated Dual Degree (B.Tech + M.Tech), {specification}</p>
					<h4>{yoj}-{yoe}</h4>
					<p> Grade: {grade} </p>
					<p>{activity}</p>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default Education;
