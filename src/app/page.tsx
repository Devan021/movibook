// Home.tsx
import { MovieList } from '@/components/MovieList'
import { FeaturedMovies } from '@/components/FeaturedMovies'
import { SearchForm } from '@/components/SearchForm'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { PaymentForm } from '@/components/PaymentForm'

// Sample movies array
const movies = [
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
    image: "/assets/dark-knight.jpeg",
    rating: "9.0",
    genre: "Action"
  },
  // Add more movies as needed
];

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to MovieMaster</h1>
          <p className="text-xl mb-8">Book your cinema experience today</p>
          <SearchForm />
        </div>
      </section>

      <FeaturedMovies />

  

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Now Showing</h2>
          {/* Pass movies to MovieList */}
          <MovieList movies={movies} />
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/movies">View All Movies</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
