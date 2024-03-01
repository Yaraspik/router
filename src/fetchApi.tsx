const serverUrl = "https://router-server.onrender.com";

export async function getPost(id: number) {
  const res = await fetch(`${serverUrl}/posts/${id}`);
  const post = res.json();
  return post;
}

export async function getPosts() {
  const res = await fetch(`${serverUrl}/posts`);
  const posts = await res.json();
  return posts;
}

export async function createPost(data: { id: number; title: string }) {
  await fetch(`${serverUrl}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function updatePost(data: { id: number; title: string }) {
  await fetch(`${serverUrl}/posts/${data.id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deletePost(id: number) {
  await fetch(`${serverUrl}/posts/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
}
