import useMovie from "@/hooks/use-movie";
import MovieCard from "./movie-card";
import useFetch from "@/hooks/use-fetch";
import { Movie, MovieResponse } from "@/types/movie";
import { useEffect } from "react";

export default function ResultsSection() {
  const { state } = useMovie();

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const URL = `${baseUrl}/?apikey=${apiKey}&s=${state.searchQuery}`;

  const { getData, data, isLoading, isError } = useFetch<MovieResponse>(!!state.searchQuery);

  useEffect(() => {
    getData(URL, { next: { revalidate: 0 } });
  }, [state.searchQuery]);
  
  if (!state.searchQuery) {
    return (
      <div className="max-w-7xl mx-auto p-6 text-center text-gray-600 dark:text-gray-400">
        영화를 검색해보세요
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto p-6 text-center text-gray-600 dark:text-gray-400">
        검색 중...
      </div>
    );
  }

  if (isError || !data?.Search) {
    return (
      <div className="max-w-7xl mx-auto p-6 text-center text-red-600 dark:text-red-400">
        검색 결과를 찾을 수 없습니다
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-xs rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          검색 결과
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.Search.map((movie: Movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
