import axios from 'axios';

const baseURL = 'http://localhost:3000';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getData = async (id?: string) => {
  try {
    const url = id ? `/tasks/${id}` : '/tasks';
    const response = await api.get(url);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (data: any, id?: string) => {
  try {
    const url = id ? `/tasks/${id}` : '/tasks';
    const response = await api.post(url, data);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

export const deleteData = async (id?: string) => {
  try {
    const url = `/tasks/${id}`;
    const response = await api.delete(url);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const updateData = async (data: any, id?: string) => {
  try {
    const url = id ? `/tasks/${id}` : '/tasks';
    const response = await api.put(url, data);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
