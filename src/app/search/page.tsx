'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star } from 'lucide-react'

// Mock data - replace with API call in production
const allMovies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 4.8, image: "/assets/inception.jpeg" },
  { id: 2, title: "The Dark Knight", genre: "Action", rating: 4.9, image: "/assets/darknight.jpg" },
  { id: 3, title: "Interstellar", genre: "Sci-Fi", rating: 4.7, image: "/assets/interstellar.jpg" },
  { id: 4, title: "Pulp Fiction", genre: "Crime", rating: 4.8, image: "/assets/pulpfiction.jpg" },
  { id: 5, title: "The Shawshank Redemption", genre: "Drama", rating: 4.9, image: "/assets/shawshank.jpg" },
  { id: 6, title: "The Godfather", genre: "Crime", rating: 4.9, image: "/assets/godfather.jpg" },
]

function SearchResultsContent() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''

  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [genre, setGenre] = useState('All')
  const [sortBy, setSortBy] = useState('relevance')
  const [results, setResults] = useState(allMovies)

  useEffect(() => {
    // Filter movies based on search query and genre
    const filteredResults = allMovies.filter(movie => 
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (genre === 'All' || movie.genre === genre)
    )

    // Sort results based on selected criteria
    const sortedResults = [...filteredResults].sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

    setResults(sortedResults)
  }, [searchQuery, genre, sortBy])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search is handled by useEffect
  }

  return (
    <div className="container mx-auto px-4">
      <motion.h1 
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Search Results
      </motion.h1>

      <Card className="mb-8">
        <CardContent className="p-6">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="search">Search Movies</Label>
                <Input
                  id="search"
                  type="search"
                  placeholder="Search for movies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="w-full md:w-48">
                <Label htmlFor="genre">Genre</Label>
                <Select value={genre} onValueChange={setGenre}>
                  <SelectTrigger id="genre">
                    <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Genres</SelectItem>
                    <SelectItem value="Action">Action</SelectItem>
                    <SelectItem value="Comedy">Comedy</SelectItem>
                    <SelectItem value="Drama">Drama</SelectItem>
                    <SelectItem value="Sci-Fi">Sci-Fi</SelectItem>
                    <SelectItem value="Crime">Crime</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-48">
                <Label htmlFor="sort">Sort By</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger id="sort">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit" className="w-full bg-[#EF4444] hover:bg-[#DC2626]">
              Search
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {results.map((movie) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full flex flex-col">
              <img 
                src={movie.image} 
                alt={movie.title} 
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-4 flex-grow">
                <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{movie.genre}</p>
                <div className="flex items-center">
                  <Star className="text-yellow-400 w-4 h-4 mr-1" />
                  <span>{movie.rating}/5</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button 
                  className="w-full bg-[#EF4444] hover:bg-[#DC2626]" 
                  asChild
                >
                  <Link href={`/movies/${movie.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {results.length === 0 && (
        <p className="text-center text-gray-600 mt-8">
          No results found. Try adjusting your search criteria.
        </p>
      )}
    </div>
  )
}

// Main component with Suspense boundary
export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <Suspense fallback={
        <div className="flex justify-center items-center min-h-screen">
          <p>Loading...</p>
        </div>
      }>
        <SearchResultsContent />
      </Suspense>
    </div>
  )
}