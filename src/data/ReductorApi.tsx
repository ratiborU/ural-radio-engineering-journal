import axios from "axios"
import { IEditor } from "@/lib/types";


export const getEditors = async (): Promise<IEditor[]> => {
  const response = await axios.get('https://journa-token.onrender.com/council/members/get/all')
    .then((response) => {
      console.log(response);
      return response["data"]["data"];
    }).catch((error: Error) => {
      console.log(error.message);
      throw new Error(error.message);
    }); 
  return response;
}

export const getEditorById = async (id: string): Promise<IEditor> => {
  const response = await axios.get(`https://journa-token.onrender.com/council/members/get/${id}`)
    .then((response) => {
      return response["data"]["member"];
    }).catch((error: Error) => {
      throw new Error(error.message);
    }); 
  return response;
}