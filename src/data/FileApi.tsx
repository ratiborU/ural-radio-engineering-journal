import axios from "axios";

export const getFileLink = async (id: string): Promise<string> => {
  const response = await axios.get(`https://journa-token.onrender.com/files/get/${id}?download=false`)
    .then(() => {
      return `https://journa-token.onrender.com/files/get/${id}?download=false`;
    }).catch((error: Error) => {
      throw new Error(error.message);
    }); 
  return response;
}

export const getFile = async (id: string) => {
  const response = await axios.get(`https://journa-token.onrender.com/files/get/${id}?download=false`)
    .then(() => {
      return `https://journa-token.onrender.com/files/get/${id}?download=true`;
    }).catch((error: Error) => {
      throw new Error(error.message);
    }); 
  return response;
}