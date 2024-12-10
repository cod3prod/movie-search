export async function fetchData<T>(url: string, options?: RequestInit) {
  const res = await fetch(url, options);
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data as T;
} 