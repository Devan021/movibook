'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Clock, Calendar, Film, ThumbsUp } from 'lucide-react'

// Mock data - replace with API call in production
const movieDetails = {
  id: 1,
  title: "Inception",
  genre: "Sci-Fi, Action",
  duration: "2h 28min",
  releaseDate: "2023-07-16",
  rating: 4.8,
  votes: 1500000,
  director: "Christopher Nolan",
  cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
  synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  poster: "/assets/inception.jpeg?height=600&width=400",
  backdrop: "/assets/inception.jpeg?height=400&width=1000",
  trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
}

const showtimes = [
  { id: 1, time: "10:00 AM", theater: "Cinema 1", seatsAvailable: 50 },
  { id: 2, time: "1:00 PM", theater: "Cinema 2", seatsAvailable: 30 },
  { id: 3, time: "4:00 PM", theater: "Cinema 1", seatsAvailable: 40 },
  { id: 4, time: "7:00 PM", theater: "Cinema 3", seatsAvailable: 20 },
  { id: 5, time: "10:00 PM", theater: "Cinema 2", seatsAvailable: 45 },
]

export default function MovieDetails() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleDateChange = (date: Date) => {
    setSelectedDate(date)
    // In a real app, you would fetch showtimes for the selected date here
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <motion.div 
        className="relative h-[400px] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ backgroundImage: `url(${movieDetails.backdrop})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6">
              <img 
                src={movieDetails.poster} 
                alt={movieDetails.title} 
                className="w-48 h-72 object-cover rounded-lg shadow-lg"
              />
              <div className="text-white">
                <h1 className="text-4xl font-bold mb-2">{movieDetails.title}</h1>
                <p className="text-lg mb-2">{movieDetails.genre}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="text-yellow-400 w-5 h-5 mr-1" />
                    <span>{movieDetails.rating}/5</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-1" />
                    <span>{movieDetails.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-1" />
                    <span>{movieDetails.releaseDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="showtimes">Showtimes</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Synopsis</h2>
                <p className="mb-6">{movieDetails.synopsis}</p>
                <h3 className="text-xl font-bold mb-2">Cast & Crew</h3>
                <p className="mb-2"><strong>Director:</strong> {movieDetails.director}</p>
                <p className="mb-4"><strong>Cast:</strong> {movieDetails.cast.join(', ')}</p>
                <Button className="bg-[#EF4444] hover:bg-[#DC2626]" asChild>
                  <a href={movieDetails.trailer} target="_blank" rel="noopener noreferrer">
                    Watch Trailer
                  </a>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="showtimes">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Select Date</h2>
                <div className="flex space-x-2 mb-6 overflow-x-auto">
                  {[...Array(7)].map((_, index) => {
                    const date = new Date()
                    date.setDate(date.getDate() + index)
                    return (
                      <Button
                        key={index}
                        variant={date.toDateString() === selectedDate.toDateString() ? "default" : "outline"}
                        onClick={() => handleDateChange(date)}
                        className="flex-shrink-0"
                      >
                        {date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                      </Button>
                    )
                  })}
                </div>
                <h2 className="text-2xl font-bold mb-4">Showtimes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {showtimes.map((showtime) => (
                    <Card key={showtime.id}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-bold">{showtime.time}</span>
                          <span className="text-sm text-gray-600">{showtime.theater}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">{showtime.seatsAvailable} seats available</span>
                          <Button asChild>
                            <Link href={`/booking/${movieDetails.id}/${showtime.id}`}>
                              Book
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reviews">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
                <div className="space-y-4">
                  {[...Array(3)].map((_, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-bold">User {index + 1}</span>
                          <div className="flex items-center">
                            <Star className="text-yellow-400 w-4 h-4 mr-1" />
                            <span>{(Math.random() * 2 + 3).toFixed(1)}/5</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Button className="mt-4" variant="outline">Load More Reviews</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}