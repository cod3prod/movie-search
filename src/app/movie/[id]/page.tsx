"use client";

import { MovieDetail } from "@/types/movie";
import MovieDetailClient from "./movie-detail-client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import useFetch from "@/hooks/use-fetch";

export default function Page() {
  const { id }: { id: string } = useParams();

  const { getData, data, isLoading, isError } = useFetch<MovieDetail>(true);
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const URL = `${baseUrl}/?apikey=${apiKey}&i=${id}`;

  useEffect(() => {
    getData(URL, { next: { revalidate: 0 } });
  }, [id]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (isError || !data) {
    return <div>영화 정보를 찾을 수 없습니다.</div>;
  }

  return <MovieDetailClient movie={data} />;
}
