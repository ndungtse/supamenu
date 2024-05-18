import axios from 'axios';

const isDev = process.env.NODE_ENV === 'development';
const baseURL = isDev ? process.env.EXPO_PUBLIC_API_URL : process.env.EXPO_PUBLIC_PROD_URL;
export const url =  `${baseURL}/api`
export const api = axios.create({
   baseURL: url,
});

export const getResError = (error?: any) => {
   if (!error) return 'Something Went Wrong';
   const isNetError = error?.message?.includes('Network Error');
   if (isNetError) return 'Network Error';
   return error?.response?.data?.message ?? error?.message ?? 'Something Went Wrong';
};

