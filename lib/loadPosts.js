export async function loadPosts() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3000/api");
  const data = await res.json();

  return data;
}
