import React, { useState } from "react";
import aboutData from '../../queryUtils/queryMutations'

import {
  Grid,
  Paper,
  Button,
  TextField,
} from "@mui/material";

const About = () => {
  const [editMode, setEditMode] = useState(false);
  const [aboutText, setAboutText] = useState(`I am a final-year student at the Indian Institute of Technology (BHU), Varanasi, India,
  with a proven track record of academic excellence (8.6/10 CGPA). My academic journey has instilled in me a
  passion for software development and problem-solving. Proficient in C++, Data Structures, Algorithms, OOPS, HTML,
  CSS, and JavaScript, I possess hands-on expertise in developing web-based applications using cutting-edge technologies
  such as Node.js, MongoDB, MySQL, SQL, and REST API. My practical experience includes spearheading
  successful MERN stack web application projects. I am eager to leverage my skills and knowledge to contribute effectively
  in the field of software development`);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    // Perform save action here, for example, send the updated text to the server
    aboutData(aboutText)
    setEditMode(false);
    // Perform save action here
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Paper style={{ height: "100%", padding: "20px", textAlign: "left", position: "relative" }}>
          {editMode ? (
            <>
              <TextField
                multiline
                fullWidth
                value={aboutText}
                onChange={(e) => setAboutText(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                style={{ marginTop: "10px" }}
              >
                Save
              </Button>
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
              <h2>About</h2>
              <p>{aboutText}</p>
            </>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default About;
