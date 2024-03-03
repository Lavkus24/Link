import React, { useState } from "react";
import {
  Grid,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";

const Info = () => {
  const {
    name,
    instituteName,
    state,
    district,
  } = useSelector((state) => state.user);

  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    // Perform save action here, for example, send the updated data to the server
    setEditMode(false);
    // Perform save action here
  };

  return (
    <Grid container spacing={2} alignItems="flex-start">
      {/* First Grid */}
      <Grid item xs={8}>
        <Paper
          style={{
            height: "100%",
            padding: "20px",
            textAlign: "left",
            position: "relative",
          }}
        >
          {editMode ? (
            <>
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  zIndex: 1,
                }}
                onClick={handleSave}
              >
                Save
              </Button>
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => console.log(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
              <TextField
                fullWidth
                label="Institute Name"
                value={instituteName}
                onChange={(e) => console.log(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
              <TextField
                fullWidth
                label="State"
                value={state}
                onChange={(e) => console.log(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
              <TextField
                fullWidth
                label="District"
                value={district}
                onChange={(e) => console.log(e.target.value)}
              />
            </>
          ) : (
            <>
              <Button
                variant="outlined"
                size="small"
                style={{ position: "absolute", top: "10px", right: "10px" }}
                onClick={handleEdit}
              >
                Edit
              </Button>
              <h3>{name}</h3>
              <h3>{instituteName}</h3>
              <p>
                {state} {district}
              </p>
    
            </>
          )}
        </Paper>
      </Grid>
     
    </Grid>
  );
};

export default Info;
