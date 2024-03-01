import { redirect } from "react-router-dom";
import { createPost } from "../../fetchApi";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = {
    title: formData.get("title"),
    id: formData.get("id"),
  };

  await createPost(data);
  return redirect(`/`);
};
