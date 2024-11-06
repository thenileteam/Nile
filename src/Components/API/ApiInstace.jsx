import axios from 'axios';
import Cookies from 'js-cookie';

// Create the Axios instance
const token = Cookies.get('accessToken'); // Retrieve the token from localStorage (or another secure storage location)



const ApiInstace = axios.create({
    baseURL: 'https://nile-microservices-auth.onrender.com', // Replace with your actual base URL
    withCredentials: true, // Enable cookies to be sent with requests
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Attach the token initially if available
    },
  });

  
  // Add an interceptor to update the token dynamically with each request
  ApiInstace.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accessToken'); // Ensure the latest token is always used
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  // Function to fetch data (GET request)
  export const fetchData = async () => {
    try {
      const response = await ApiInstace.get('/your-endpoint'); // Replace '/your-endpoint' with the specific API route
      console.log('Fetched Data:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  // Function to post data (POST request)
  export const postData = async (data) => {
    try {
      const response = await ApiInstace.post('/your-endpoint', data); // Replace '/your-endpoint' with the specific API route and pass data as payload
      console.log('Posted Data Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };

export default ApiInstace