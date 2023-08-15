import axios from 'axios';
import { WP_REST_API_Posts } from 'wp-types';

const AxiosInstance = axios.create({
  baseURL: 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2',
});

export const fetchBlogPosts = async (): Promise<WP_REST_API_Posts> => {
  const data = await AxiosInstance.get('/posts?_embed').then((res) => res.data);

  return data;
};
