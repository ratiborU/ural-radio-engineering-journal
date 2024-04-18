import axios from "axios";
import { IArticle } from "@/lib/types";


export const getArticles = async (): Promise<IArticle[]> => {
  const response = await axios.get('https://journa-token.onrender.com/articles/get/all')
    .then((response) => {
      return response["data"]["data"];
    }).catch((error: Error) => {
      throw new Error(error.message);
    }); 
  return response;
}

export const getArticlesByIssueId = async (id: string): Promise<IArticle[]> => {
  const response = await axios.get('https://journa-token.onrender.com/articles/get/all')
    .then((response) => {
      return response["data"]["data"];
    }).catch((error: Error) => {
      console.log(error.message);
      throw new Error(error.message);
    }); 
  return response.filter((item: IArticle) => item["editionId"] == id);
}

export const getArticleById = async (id: string): Promise<IArticle> => {
  const response = await axios.get(`https://journa-token.onrender.com/articles/get/${id}`)
    .then((response) => {
      return response["data"]["article"];
    }).catch((error: Error) => {
      console.log(error.message);
      throw new Error(error.message);
    }); 
  return response;
}