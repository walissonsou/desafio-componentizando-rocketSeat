import { useMovies } from "../MoviesuseContext"
import { MovieCard } from "./MovieCard";

export function Content() {
  // Complete aqui
  const { movies, selectedGenre} = useMovies();
  return (
    <div className="container">
      <header>
        {/* o span serve para as palavras ficarem lado a lado */}
        <span className="category">Categoria:
          <span> {/* vou colocar o genero de acordo com o id clicado na funcao */}
            {selectedGenre.title}
          </span>
        </span>
      </header>

      <main>
        {/* tenho que fazer um map para trocar as propriedades de acordo com o que for selecionado */}
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}