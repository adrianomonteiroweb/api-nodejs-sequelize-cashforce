import axios from 'axios';

async function axiosFunctions(url: string) {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export default axiosFunctions;
