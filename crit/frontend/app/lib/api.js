// frontend/app/utils/api.js
export async function fetchData(endpoint) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}${endpoint}`);
  return res.json();
}
