"use client";

import { useContext } from "react";
import { MovieContext } from "@/contexts/movie-context";

export default function useMovie() {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovie must be used within a MovieProvider");
  }

  const { state, dispatch } = context;

  const handleSearch = (query: string) => {
    context.dispatch({ type: "SET_SEARCH_QUERY", payload: query });
  };

  return {
    handleSearch,
    state,
    dispatch,
  };
}
