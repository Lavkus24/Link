import React, { useState } from "react";
import {
  Grid,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";

const Education = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [educationDetails, setEducationDetails] = useState({
    instituteName: "",
    specification: "",
    yoj: "",
    yoe: "",
    grade: "",
    activity: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEducationDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddEducation = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSaveEducation = () => {
    dispatch({ type: "ADD_EDUCATION", payload: educationDetails });
    setIsDialogOpen(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Paper
          style={{
            height: "100%",
            padding: "20px",
            textAlign: "left",
            position: "relative",
          }}
        >
          <Button
            variant="outlined"
            size="small"
            style={{ position: "absolute", top: "10px", right: "10px" }}
            onClick={handleAddEducation}
          >
            Add Education
          </Button>
          <h2>Education</h2>
          <p>{educationDetails.instituteName}</p>
          <p>
            Intergrated Dual Degree (B.Tech + M.Tech),{" "}
            {educationDetails.specification}
          </p>
          <h4>
            {educationDetails.yoj}-{educationDetails.yoe}
          </h4>
          <p> Grade: {educationDetails.grade} </p>
          <p>{educationDetails.activity}</p>
        </Paper>
      </Grid>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Add Education</DialogTitle>
        <DialogContent>
          <TextField
            label="Institute Name"
            name="instituteName"
            value={educationDetails.instituteName}
            onChange={handleInputChange}
            fullWidth
			sx={{ mb: 2 }} 
          />
          <TextField
            label="Specification"
            name="specification"
            value={educationDetails.specification}
            onChange={handleInputChange}
            fullWidth
			sx={{ mb: 2 }} 
          />
          <TextField
            label="Year of Joining"
            name="yoj"
            value={educationDetails.yoj}
            onChange={handleInputChange}
            fullWidth
			sx={{ mb: 2 }} 
          />
          <TextField
            label="Year of Ending"
            name="yoe"
            value={educationDetails.yoe}
            onChange={handleInputChange}
            fullWidth
			sx={{ mb: 2 }} 
          />
          <TextField
            label="Grade"
            name="grade"
            value={educationDetails.grade}
            onChange={handleInputChange}
            fullWidth
			sx={{ mb: 2 }} 
          />
          <TextField
            label="Activity"
            name="activity"
            value={educationDetails.activity}
            onChange={handleInputChange}
            fullWidth
			sx={{ mb: 2 }} 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveEducation}>Save</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Education;
