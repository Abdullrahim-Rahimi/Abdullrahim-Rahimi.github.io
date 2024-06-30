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
// export const baseURLImage = 'http://localhost:1337';
export const baseURLImage = 'https://motivated-belief-b4a000ad6e.strapiapp.com';
