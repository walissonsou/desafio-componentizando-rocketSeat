import { useMovies } from "../MoviesuseContext"
import { Button } from "./Button"

export function SideBar() {
  const {genres, handleClickButton, selectedGenreId } = useMovies
  return (
    <nav className="sidebar">
      <span>Cine<p>flix</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}