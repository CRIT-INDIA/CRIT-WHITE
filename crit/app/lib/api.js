export async function getUserData() {
  const apiBase = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/endpoint`);
  return res.json();
}
