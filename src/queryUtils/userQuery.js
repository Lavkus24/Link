import axios from 'axios';

const signUptData = async (formData) => {

  console.log('formData : ' , formData);
  try {
    const response = await axios.post('http://localhost:3001/signup', formData);
    console.log('response : ' , response.data)
    return response.data; // Assuming your API returns data upon successful POST
  } catch (error) {
    throw new Error('Error posting data:', error);
  }
};

export default {
   
    signUptData
}

