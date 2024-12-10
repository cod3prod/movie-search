import useMovie from "@/hooks/use-movie";
import MovieCard from "./movie-card";

export default function FavoritesSection() {
  const { state } = useMovie();

  if (state.favorites.length === 0) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          즐겨찾기 목록
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {state.favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
} 