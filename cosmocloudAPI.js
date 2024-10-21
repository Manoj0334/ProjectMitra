import axios from 'axios';

const API_BASE_URL = "https://api.cosmocloud.com/v1"; // Your Cosmocloud API URL

export const submitProject = async (project) => {
  const formData = new FormData();
  formData.append('title', project.title);
  formData.append('description', project.description);
  formData.append('category', project.category);
  formData.append('files', project.files);

  try {
    const response = await axios.post(`${API_BASE_URL}/projects`, formData, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Set the JWT token for auth
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error submitting project:", error);
  }
};

export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};
