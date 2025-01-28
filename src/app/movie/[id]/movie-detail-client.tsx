"use client";

import { Suspense } from "react";
import Image from "next/image";
import NoImage from "@/assets/no-image.png";
import { MovieDetail } from "@/types/movie";

export default function MovieDetailClient({ movie }: { movie: MovieDetail }) {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <section className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="w-full md:w-1/3 relative aspect-2/3">
            <Image
              className="object-contain"
              src={movie.Poster === "N/A" ? NoImage : movie.Poster}
              alt={`${movie.Title} poster`}
              fill
              sizes="(max-width: 400px) 100vw, 400px"
              priority
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {movie.Title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{movie.Plot}</p>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-200">
                <span className="font-semibold">평점:</span> {movie.imdbRating}/10
              </p>
              <p className="text-gray-700 dark:text-gray-200">
                <span className="font-semibold">출연:</span> {movie.Actors}
              </p>
              <p className="text-gray-700 dark:text-gray-200">
                <span className="font-semibold">개봉년도:</span> {movie.Year}
              </p>
              <p className="text-gray-700 dark:text-gray-200">
                <span className="font-semibold">장르:</span> {movie.Genre}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
} 