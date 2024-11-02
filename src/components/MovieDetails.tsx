import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, Star, Film } from 'lucide-react'

interface MovieDetailsProps {
  movie: {
    id: number
    title: string
    image: string
    rating: string
    duration: string
    releaseDate: string
    genre: string
    director: string
    cast: string
    synopsis: string
  }
}

export function MovieDetails({ movie }: MovieDetailsProps) {
  const showtimes = [
    { time: "10:00 AM", cinema: "Cineplex Downtown" },
    { time: "1:30 PM", cinema: "Cineplex Downtown" },
    { time: "4:45 PM", cinema: "Starlight Megaplex" },
    { time: "8:00 PM", cinema: "IMAX Theater" },
    { time: "11:15 PM", cinema: "Starlight Megaplex" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <Image
            src={movie.image}
            alt={movie.title}
            width={400}
            height={600}
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 mr-1" />
              <span className="font-semibold">{movie.rating}/10</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-1" />
              <span>{movie.duration}</span>
            </div>
            <div className="flex items-center">
              <CalendarDays className="h-5 w-5 mr-1" />
              <span>{movie.releaseDate}</span>
            </div>
          </div>
          <p className="text-lg mb-6">{movie.synopsis}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-semibold">Genre</h3>
              <p>{movie.genre}</p>
            </div>
            <div>
              <h3 className="font-semibold">Director</h3>
              <p>{movie.director}</p>
            </div>
            <div className="col-span-2">
              <h3 className="font-semibold">Cast</h3>
              <p>{movie.cast}</p>
            </div>
          </div>
          <Tabs defaultValue="showtimes">
            <TabsList>
              <TabsTrigger value="showtimes">Showtimes</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="showtimes">
              <Card>
                <CardContent className="p-4">
                  <ul className="space-y-4">
                    {showtimes.map((showtime, index) => (
                      <li key={index} className="flex items-center justify-between border-b last:border-b-0 pb-2">
                        <div>
                          <p className="font-semibold">{showtime.time}</p>
                          <p className="text-sm text-gray-500">{showtime.cinema}</p>
                        </div>
                        <Button>Book Now</Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews">
              <Card>
                <CardContent className="p-4">
                  <p>Reviews content goes here...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}