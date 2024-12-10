"use client";

import { MovieDetail } from "@/types/movie";
import MovieDetailClient from "./movie-detail-client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { id }: { id: string } = useParams();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function getMovie() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_API_KEY}&i=${id}`,
        { next: { revalidate: 3600 } }
      );
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error("영화 정보를 가져오는데 실패했습니다:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getMovie();
  }, [id]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (isError || !movie) {
    return <div>영화 정보를 찾을 수 없습니다.</div>;
  }

  return <MovieDetailClient movie={movie} />;
}
