export async function fetchData() {
  const response = await fetch(`/api/currencies`)
  const data = await response.json()
  return data;
}
