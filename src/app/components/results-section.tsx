import useMovie from "@/hooks/use-movie";
import MovieCard from "./movie-card";
import useFetch from "@/hooks/use-fetch";
import { Movie } from "@/types/movie";

export default function ResultsSection() {
  const { state } = useMovie();
  const URL = `https://www.omdbapi.com/?apikey=22ea6d6d&s=${state.searchQuery}`;
  const { data, isLoading, isError } = useFetch(URL, !!state.searchQuery);

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
  
  if (isError) {
    return (
      <div className="max-w-7xl mx-auto p-6 text-center text-red-600 dark:text-red-400">
        검색 중 오류가 발생했습니다
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          검색 결과
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((movie: Movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
} 