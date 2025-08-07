export async function getUserData() {
  const apiBase = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiBase}/user`);
  return res.json();
}
