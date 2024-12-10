"use client";

import SearchSection from "@/app/components/search-section";
import FavoritesSection from "@/app/components/favorites-section";
import ResultsSection from "@/app/components/results-section";
import { MovieProvider } from "@/contexts/movie-context";


export default function Page() {
  return (
    <MovieProvider>
      <SearchSection />
      <ResultsSection />
      <FavoritesSection />
    </MovieProvider>
  );
}
