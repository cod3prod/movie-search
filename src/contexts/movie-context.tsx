import { createContext, useReducer, useEffect } from "react";
import { initialState, movieReducer } from "@/reducers/movie-reducer";
import { MovieState, Action } from "@/types/movie-reducer";

type MovieContextType = {
  state: MovieState;
  dispatch: React.Dispatch<Action>;
};

export const MovieContext = createContext<MovieContextType>({
  state: initialState,
  dispatch: () => {},
});

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('movieFavorites');
    if (savedFavorites) {
      dispatch({ 
        type: "SET_FAVORITES", 
        payload: JSON.parse(savedFavorites) 
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('movieFavorites', JSON.stringify(state.favorites));
  }, [state.favorites]);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
