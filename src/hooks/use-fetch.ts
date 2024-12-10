"use client";

import { useState, useEffect } from "react";
import { Movie, MovieResponse } from "@/types/movie";
import { fetchData } from "@/lib/fetch";

export default function useFetch(url: string, shouldFetch: boolean = true) {
  const [data, setData] = useState<Movie[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (!shouldFetch) return;
    
    setLoading(true);
    const getData = async () => {
      try {
        const result = await fetchData<MovieResponse>(url);
        setData(result.Search || []);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url, shouldFetch]);

  return { data, isLoading, isError };
}
