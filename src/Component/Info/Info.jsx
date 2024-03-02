import React from "react";
import {
	Grid,
	Paper,
	Button
} from "@mui/material";
import { useSelector } from "react-redux";

const Info = () => {
	const {
		name,
		instituteName,
		state,
		district
	} = useSelector(state => state.user);

	return (
		<Grid container spacing={2} alignItems="flex-start">
			{/* First Grid */}
			<Grid item xs={6}>
				<Paper style={{ height: "100%", padding: "20px" , textAlign:"left" ,position: "relative" }}>
					<Button
						variant="outlined"
						size="small"
						style={{ position: "absolute", top: "10px", right: "10px" }}
					>
						Edit
					</Button>
					<h3>{name}</h3>
					<h3>{instituteName}</h3>
					<p>{state}  {district}</p>
					<p>Yislskl slknglkjs sfkgn</p>
				</Paper>
			</Grid>
			{/* Second Grid */}
			<Grid item xs={2}>
				<Paper style={{ height: "227px", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
					<p>{instituteName}</p>

				</Paper>
			</Grid>
		</Grid>
	);
};

export default Info;
