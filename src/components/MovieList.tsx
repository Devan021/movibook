// MovieList.tsx
import React from 'react'
import { MovieCard } from './MovieCard'

interface Movie {
  id: number
  title: string
  image: string
  rating: string
  genre: string
}

interface MovieListProps {
  movies: Movie[]
}

// Default movies array
const defaultMovies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    image: "/assets/inception.jpeg",
    rating: "8.8",
    genre: "Sci-Fi"
  },
  {
    id: 2,
    title: "The Dark Knight",
    image: "/assets/inception.jpeg",
    rating: "9.0",
    genre: "Action"
  },
  // Add more movies as needed
]

export function MovieList({ movies = defaultMovies }: MovieListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          image={movie.image}
          rating={movie.rating}
          genre={movie.genre}
        />
      ))}
    </div>
  )
}
