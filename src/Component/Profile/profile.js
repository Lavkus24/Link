import React , {useState} from 'react';
import { Grid, Paper, Avatar , Button , TextField  } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import {useSelector } from 'react-redux';
const Profiles = () => {

  const [editMode, setEditMode] = useState(false);
  const [language, setLanguage] = useState('English');
  const [profileUrl, setProfileUrl] = useState('www.linkedin.com/in/lavkus-yadav-00aa8421a');
  const [editedLanguage, setEditedLanguage] = useState('');
  const [editedProfileUrl, setEditedProfileUrl] = useState('');

  const handleEditClick = () => {
    setEditMode(true);
    setEditedLanguage(language);
    setEditedProfileUrl(profileUrl);
  };
  
  const handleSaveChanges = () => {
  
    console.log('Language:', editedLanguage);
    console.log('Profile URL:', editedProfileUrl);
    setLanguage(editedLanguage); // Update state with edited values
    setProfileUrl(editedProfileUrl);
    setEditMode(false); // Exit edit mode after saving changes
  };

  const {language1 , profileUrl1} = useSelector(state => state.user)

  console.log('language1 : ' , language1)
   
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Paper style={{ height: '80%', padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt="Lavkus"
              src="/path/to/your/image.jpg"
              style={{ width: '100px', height: '100px', marginRight: '20px', borderRadius: '50%' }}
            />
            <div>
            </div>
          </div>
        </Paper>
      </Grid>

<Grid item xs={4}>
        <Paper style={{ height: '100%', padding: '20px', textAlign: 'left', position: 'relative' }}>
          {editMode ? (
            <>
              <TextField
                label="Language"
                value={editedLanguage}
                onChange={(e) => setEditedLanguage(e.target.value)}
                style={{ marginBottom: '10px', width: '100%' }}
              />
              <TextField
                label="Profile URL"
                value={editedProfileUrl}
                onChange={(e) => setEditedProfileUrl(e.target.value)}
                style={{ marginBottom: '10px', width: '100%' }}
              />
              <Button onClick={handleSaveChanges}>Save</Button>
            </>
          ) : (
            <>
              <h2>Language</h2>
              <p>{language1}</p>
              <h2>Profile URL</h2>
              <p>{profileUrl1}</p>
              <Button
                variant="outlined"
                size="small"
                style={{ position: 'absolute', top: '10px', right: '10px' }}
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

export default Profiles;
