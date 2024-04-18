import axios from "axios";
import { IComment } from "@/lib/types";


export const getComments = async (): Promise<IComment[]> => {
  const response = await axios.get(`https://journa-token.onrender.com/comments/get/all?onlyApproved=false`)
    .then((response) => {
      return response["data"]["data"];
    }).catch((error: Error) => {
      throw new Error(error.message);
    }); 
  return response;
}

export const getCommentsByArticleId = async (id: string): Promise<IComment[]> => {
  const response = await axios.get(`https://journa-token.onrender.com/comments/get/all?onlyApproved=false`)
    .then((response) => {
      return response["data"]["data"].filter((item: IComment) => item["articleId"] == id);
    }).catch((error: Error) => {
      throw new Error(error.message);
    }); 
  return response;
}

export const createComment = async (id: string, content: string): Promise<IComment> => {
  console.log(id, content);
  const response = axios.post('https://journa-token.onrender.com/comments/create', {
      "articleId": id,
      "content": content,
      "date": "2003-11-01T12:00:00Z"
    }).then((response) => {
      return response["data"]["data"];
    }).catch((error: Error) => {
      throw new Error(error.message);
    }); 
  return response;
}