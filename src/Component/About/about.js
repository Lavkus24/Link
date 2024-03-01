import React from 'react';
import { Grid, Paper , Button } from '@mui/material';

const TwoToOneComponent = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Paper style={{ height: '100%', padding: '20px' , textAlign:'left' ,position: 'relative'}}>
        <Button
            variant="outlined"
            size="small"
            style={{ position: 'absolute', top: '10px', right: '10px' }}
            onClick={() => console.log('Edit clicked')} // Add your edit functionality here
          >
            Edit
          </Button>
         <h2>About</h2>
        <p>
        I am a final-year student at the Indian Institute of Technology (BHU), Varanasi, India,
        with a proven track record of academic excellence (8.6/10 CGPA). My academic journey has instilled in me a
        passion for software development and problem-solving. Proficient in C++, Data Structures, Algorithms, OOPS, HTML, 
        CSS, and JavaScript, I possess hands-on expertise in developing web-based applications using cutting-edge technologies
        such as Node.js, MongoDB, MySQL, SQL, and REST API. My practical experience includes spearheading 
        successful MERN stack web application projects. I am eager to leverage my skills and knowledge to contribute effectively 
        in the field of software development
        </p>
        </Paper>
      </Grid>
    
    </Grid>
  );
};

export default TwoToOneComponent;
