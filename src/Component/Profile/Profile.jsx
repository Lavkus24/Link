import React , { useState } from "react";
import {
	Grid,
	Paper,
	Avatar,
	Button,
	TextField
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PropTypes from "prop-types";
const Profile = (
	educationDetails,
	handleInputChange
) => {
	const [editMode, setEditMode] = useState(false);
	const [profileUrl, setProfileUrl] = useState("www.linkedin.com/in/lavkus-yadav-00aa8421a");
	const [editedLanguage, setEditedLanguage] = useState("");
	const [editedProfileUrl, setEditedProfileUrl] = useState("");



	const handleEditClick = () => {
		setEditMode(true);
		setEditedLanguage(educationDetails.language);
		setEditedProfileUrl(profileUrl);
	};

	const handleSaveChanges = () => {
		setProfileUrl(editedProfileUrl);
		setEditMode(false); // Exit edit mode after saving changes
	};

	return (
		<Grid container spacing={2}>
			<Grid item xs={8}>
				<Paper style={{ height: "80%", padding: "20px" }}>
					<div style={{ display: "flex", alignItems: "center" }}>
						<Avatar
							alt="Lavkus"
							src="/path/to/your/image.jpg"
							style={{ width: "100px", height: "100px", marginRight: "20px", borderRadius: "50%" }}
						/>
						<div>
						</div>
					</div>
				</Paper>
			</Grid>
			<Grid item xs={4}>
				<Paper style={{ height: "100%", padding: "20px", textAlign: "left", position: "relative" }}>
					{editMode ? (
						<>
							<TextField
								label="Language"
								value={editedLanguage}
								onChange={(handleInputChange)}
								style={{ marginBottom: "10px", width: "100%" }}
							/>
							<TextField
								label="Profile URL"
								value={editedProfileUrl}
								onChange={(e) => setEditedProfileUrl(e.target.value)}
								style={{ marginBottom: "10px", width: "100%" }}
							/>
							<Button onClick={handleSaveChanges}>Save</Button>
						</>
					) : (
						<>
							<h2>Language</h2>
							<p>{educationDetails.language}</p>
							<h2>Profile URL</h2>
							<p></p>
							<Button
								variant="outlined"
								size="small"
								style={{ position: "absolute", top: "10px", right: "10px" }}
								onClick={handleEditClick}
							>
								<EditIcon />
							</Button>
						</>
					)}
				</Paper>
			</Grid>
		</Grid>
	);
};

Profile.propTypes = {
	educationDetails: PropTypes.object,
	handleInputChange: PropTypes.func
};
export default Profile;
