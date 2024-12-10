import Image from "next/image";
import NoImage from "@/assets/no-image.png";
import { Movie } from "@/types/movie";
import Button from "@/components/ui/button";
import Link from "next/link";
import useMovie from "@/hooks/use-movie";

export default function MovieCard({ movie }: { movie: Movie }) {
  const { state, dispatch } = useMovie();
  
  const isFavorite = state.favorites.some((fav) => fav.imdbID === movie.imdbID);
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isFavorite) {
      dispatch({ type: "REMOVE_FAVORITE", payload: movie });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: movie });
    }
  };

  return (
    <Link href={`/movie/${movie.imdbID}`}>
      <div className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            src={movie.Poster === "N/A" ? NoImage : movie.Poster}
            alt={`${movie.Title} poster`}
            fill
            sizes="(max-width: 400px) 100vw, 400px"
          />
        </div>
        <div className="p-4 flex flex-col gap-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 line-clamp-2">
            {movie.Title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{movie.Year}</p>
          <Button
            className={`w-full mt-auto ${
              isFavorite 
                ? 'bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800' 
                : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800'
            }`}
            onClick={handleFavoriteClick}
          >
            {isFavorite ? '즐겨찾기 해제' : '즐겨찾기 추가'}
          </Button>
        </div>
      </div>
    </Link>
  );
}
