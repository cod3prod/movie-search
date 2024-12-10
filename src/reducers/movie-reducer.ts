import { MovieState, Action } from "@/types/movie-reducer";

export const initialState: MovieState = {
    movies: [],
    favorites: [],
    searchQuery: "",
}

export const movieReducer = (state: MovieState, action: Action) => {
    switch (action.type) {
        case "SET_MOVIES":
            return { ...state, movies: action.payload };
        case "SET_FAVORITES":
            return { ...state, favorites: action.payload };
        case "ADD_FAVORITE":
            return { ...state, favorites: [...state.favorites, action.payload] };
        case "REMOVE_FAVORITE":
            return { ...state, favorites: state.favorites.filter(movie => movie.imdbID !== action.payload.imdbID) };
        case "SET_SEARCH_QUERY":
            return { ...state, searchQuery: action.payload };
        default:
            return state;
    }
}