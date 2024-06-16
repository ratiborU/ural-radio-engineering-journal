import axios from "axios";
import { IComment } from "@/lib/typesNew";
import { serverUrl } from "@/lib/utils";


export const getComments = async (id: number, isApproved: boolean): Promise<IComment[]> => {
  const response = await axios.get(`${serverUrl}/api/v1/comments/get/all?onlyApproved=${isApproved}&articleId=${id}`)
    .then((response) => {
      return response.data.data;
    }).catch((error: Error) => {
      console.log(error);
      throw new Error(error.message);
    }); 
  return response;
}


export const createComment = async (
  articleId: number, 
  content: string, 
  author: string, 
  date: string, 
): Promise<IComment> => {
  const response = await axios.post(`${serverUrl}/api/v1/comments/create`, {
    "articleId": articleId,
    "content": content,
    "author": author,
    "date": date,
  }).then((response) => {
      return response["data"];
    }).catch((error) => {
      console.log(error);
      throw new Error(error.message);
    }); 
  return response;
}