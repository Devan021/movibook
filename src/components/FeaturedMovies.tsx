import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const featuredMovies = [
  { id: 1, title: "Inception", image: "/assets/inception.jpeg", rating: "8.8", genre: "Sci-Fi" },
  { id: 2, title: "The Dark Knight", image: "/assets/inception.jpeg", rating: "9.0", genre: "Action" },
  { id: 3, title: "Interstellar", image: "/assets/inception.jpeg", rating: "8.6", genre: "Sci-Fi" },
]

export function FeaturedMovies() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Movies</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {featuredMovies.map((movie) => (
              <CarouselItem key={movie.id}>
                <Card className="overflow-hidden">
                  <div className="relative h-[400px] w-full">
                    <Image
                      src={movie.image}
                      alt={movie.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                      <div className="text-white space-y-4">
                        <div className="space-y-1">
                          <h3 className="text-2xl font-bold">{movie.title}</h3>
                          <p className="text-sm text-gray-300">{movie.genre}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-5 w-5 fill-yellow-400 stroke-yellow-400" />
                          <span className="font-semibold">{movie.rating}/10</span>
                        </div>
                        <Button asChild size="lg" className="w-full sm:w-auto">
                          <Link href={`/movies/${movie.id}`}>Book Now</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}