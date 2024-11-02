import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from 'lucide-react'

interface MovieCardProps {
  id: number
  title: string
  image: string
  rating: string
  genre: string
}

export function MovieCard({ id, title, image, rating, genre }: MovieCardProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={300}
          height={400}
          className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-0 p-4 w-full">
            <Button asChild className="w-full">
              <Link href={`/movies/${id}`}>Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-1 truncate">{title}</h3>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">{genre}</span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}