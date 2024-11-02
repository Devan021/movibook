import { MovieDetails } from '@/components/MovieDetails'
import { notFound } from 'next/navigation'

// This would typically come from an API or database
const movies = [
  {
    id: 1,
    title: "Inception",
    image: "/images/movie-posters/inception.jpg",
    rating: "8.8",
    duration: "2h 28min",
    releaseDate: "July 16, 2010",
    genre: "Sci-Fi, Action, Adventure",
    director: "Christopher Nolan",
    cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
    synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
  // ... other movies
]

export default function MoviePage({ params }: { params: { id: string } }) {
  const movie = movies.find(m => m.id === parseInt(params.id))

  if (!movie) {
    notFound()
  }

  return <MovieDetails movie={movie} />
}