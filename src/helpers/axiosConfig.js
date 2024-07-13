import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL;
const axiosInstance = axios.create({
  baseURL,
  //   transformResponse: [
  //     function (data) {
  //       return data;
  //     },
  //   ],
});

export default axiosInstance;

export const baseURLImage = process.env.NEXT_PUBLIC_STRAPI_URL_IMAGE;
