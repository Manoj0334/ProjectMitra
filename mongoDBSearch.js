import axios from 'axios';

export const searchProjects = async (query) => {
  try {
    const response = await axios.get(`https://data.mongodb-api.com/search`, {
      params: { q: query },
      headers: {
        'api-key': 'YOUR_MONGODB_ATLAS_API_KEY',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching projects:', error);
  }
};
