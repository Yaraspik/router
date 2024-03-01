import { getPost, deletePost } from "../../fetchApi";
import { redirect } from "react-router-dom";

export const loader = async ({ params: { id } }) => {
  const post = await getPost(id);
  return post;
};

export const action = async ({ params: { id } }) => {
  await deletePost(id);
  return redirect(`/`);
};
