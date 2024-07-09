import axios from 'axios';

const API_URL = 'http://localhost:2000';



const getAllData = async () => {
  try {
    const response = await axios.get(`${API_URL}/get`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving all data:', error);
    throw error;
  }
};

export default {
  getAllData,
};
