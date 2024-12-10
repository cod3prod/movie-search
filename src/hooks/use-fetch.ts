"use client";

import { useState } from "react";

export default function useFetch<T>(
  shouldFetch: boolean = true,
) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  async function getData(url: string, options: RequestInit = {}) {
    if (!shouldFetch) return;

    try {
      setLoading(true);
      const result = await fetch(url, options);
      const data = await result.json();
      setData(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return { data, isLoading, isError, getData };
}
