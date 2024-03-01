import { getPosts } from "../../fetchApi";

export const loader = async () => {
  const res = await getPosts();
  return res;
};
