export type MovieState = {
  movies: Movie[];
  favorites: Movie[];
  searchQuery: string;
};

export type Action =
  | {
      type: "SET_SEARCH_QUERY";
      payload: string;
    }
  | {
      type: "SET_MOVIES";
      payload: Movie[];
    }
  | {
      type: "SET_FAVORITES";
      payload: Movie[];
    }
  | {
      type: "ADD_FAVORITE";
      payload: Movie;
    }
  | {
      type: "REMOVE_FAVORITE";
      payload: Movie;
    };
