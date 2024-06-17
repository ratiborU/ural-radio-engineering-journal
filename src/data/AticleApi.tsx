import axios from "axios";
import { IArticle } from "@/lib/typesNew";
import { serverUrl } from "@/lib/utils";


export const getArticles = async (editionId: string): Promise<IArticle[]> => {
  const response = await axios.get(`${serverUrl}/api/v1/article/get/all?editionId=${editionId}`)
    .then((response) => {
      return response.data.data;
    }).catch((error: Error) => {
      throw new Error(error.message);
    }); 
  return response;
}

export const getArticlesSearch = async (search: string, title: boolean, keywords: boolean, authors: boolean, annotation: boolean): Promise<IArticle[]> => {
  const response = await axios.get(`${serverUrl}/api/v1/article/get/all?search=${search}&title=${title}&keywords=${keywords}&authors=${authors}&affilation=${annotation}`)
    .then((response) => {
      return response.data.data;
    }).catch((error: Error) => {
      throw new Error(error.message);
    }); 
  return response;
}


export const getArticleById = async (id: string): Promise<IArticle> => {
  const response = await axios.get(`${serverUrl}/api/v1/article/get/${id}`)
    .then((response) => {
      return response.data.article;
    }).catch((error: Error) => {
      console.log(error.message);
      throw new Error(error.message);
    }); 
  return response;
}