import { createContext, useState, useEffect, ReactNode, useContext } from "react";

import { api } from "./services/api";


interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: string;
    }>;
    Runtime: string;
}

interface MoviesUSeContextProps {
    children: ReactNode
}

interface MoviesUseContextData {
    genres: GenreResponseProps[];
    selectedGenreId: number ;
    selectedGenre:GenreResponseProps ;
    handleClickButton:(id: number) => void;
    movies:MovieProps[]; 

}
const MoviesSuseContext = createContext<MoviesUseContextData>({} as MoviesUseContextData)

export function MoviesUseContext({children}:MoviesUSeContextProps) {

    const [selectedGenreId, setSelectedGenreId] = useState(6);

    const [genres, setGenres] = useState <GenreResponseProps[]> ([]);

    const [movies, setMovies] = useState <MovieProps[] > ([]);

    const [selectedGenre, setSelectedGenre] = useState <GenreResponseProps> ({} as GenreResponseProps);

    useEffect(() => {

        api.get < GenreResponseProps[]> ('genres').then(response => {
            setGenres(response.data);
        });
    }, []);

    useEffect(() => {

        api.get < MovieProps[] > (`movies/?Genre_id=${selectedGenreId}`).then(response => {
            setMovies(response.data);
        });

        api.get < GenreResponseProps > (`genres/${selectedGenreId}`).then(response => {

            setSelectedGenre(response.data);
        })
    }, [selectedGenreId]);

    function handleClickButton(id: number) {

        setSelectedGenreId(id);
    }
    return (
        <MoviesSuseContext.Provider value={{genres, handleClickButton, selectedGenreId, selectedGenre, movies}}>
            {children}
        </MoviesSuseContext.Provider>
    )
   
}
export function useMovies() {
    const context = useContext(MoviesSuseContext);

    return context 
}