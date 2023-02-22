import { fetchJson } from '../../utils/fetch-json';
import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';

export const getAllPosts = async (): Promise<PostData[]> => {
  const posts = await fetchJson<PostData[]>(POSTS_URL);

  return posts;
};
