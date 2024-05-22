// useCategoryData.js
import { useQuery, UseQueryResult } from "react-query";
import axios, { AxiosResponse, AxiosError } from "axios";
import { NewsData } from '../../types';

const fetchCategory = async (category: string, country: string): Promise<AxiosResponse<NewsData>> => {
  const url = import.meta.env.VITE_NEWS_URL;
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  if (!url || !apiKey) {
    throw new Error("API URL or Key is missing in environment variables");
  }

  const response = await axios.get(`${url}/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`);
  console.log('category results', response);
  return response;
};

type OnSuccess = (data: AxiosResponse<NewsData>) => void;
type OnError = (error: AxiosError) => void;

export const useCategoryData = (country: string, category: string, onSuccess: OnSuccess, onError: OnError): UseQueryResult<AxiosResponse<NewsData>, AxiosError> => {
  return useQuery<AxiosResponse<NewsData>, AxiosError>(
    ['category', category, country],
    () => fetchCategory(category, country),
    { onSuccess, onError }
  );
};
