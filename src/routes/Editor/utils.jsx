import { redirect } from "react-router-dom";
import { updatePost, getPost } from "../../fetchApi";

export const loader = async ({ params: { id } }) => {
  const post = await getPost(id);
  return post;
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = {
    title: formData.get("title"),
    id: formData.get("id"),
  };
  await updatePost(data);
  return redirect(`/posts/${data.id}`);
};
