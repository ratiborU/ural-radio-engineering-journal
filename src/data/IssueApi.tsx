import axios from "axios"
import { IIssue } from "@/lib/types";


export const getIssues = async (): Promise<IIssue[]> => {
  const response = await axios.get('https://journa-token.onrender.com/editions/get/all')
    .then((response) => {
      console.log(response);
      return response["data"]["data"];
    }).catch((error: Error) => {
      console.log(error.message);
      throw new Error(error.message);
    }); 
  return response;
}

export const getIssueById = async (id: string): Promise<IIssue> => {
  const response = await axios.get(`https://journa-token.onrender.com/editions/get/${id}`)
    .then((response) => {
      return response["data"]["edition"];
    }).catch((error: Error) => {
      throw new Error(error.message);
    }); 
  return response;
}