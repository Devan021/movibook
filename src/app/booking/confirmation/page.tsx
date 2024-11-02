import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Clock, MapPin, Ticket, Download, Share2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function BookingConfirmationPage() {
  // This would typically come from a database or API based on the booking ID
  const booking = {
    id: "BKG12345",
    movie: {
      title: "Inception",
      image: "/images/movie-posters/inception.jpg",
    },
    date: "July 15, 2024",
    time: "8:00 PM",
    cinema: "IMAX Theater",
    seats: ["F5", "F6"],
    totalAmount: "$24.00",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
          <CardDescription>Your tickets have been booked successfully</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <Ticket className="h-16 w-16 text-blue-600" />
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">{booking.movie.title}</h2>
            <Image
              src={booking.movie.image}
              alt={booking.movie.title}
              width={200}
              height={300}
              className="mx-auto rounded-lg  shadow-md"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center">
              <CalendarDays className="mr-2 h-4 w-4 text-gray-500" />
              <span>{booking.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4 text-gray-500" />
              <span>{booking.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-gray-500" />
              <span>{booking.cinema}</span>
            </div>
            <div className="flex items-center">
              <Ticket className="mr-2 h-4 w-4 text-gray-500" />
              <span>Seats: {booking.seats.join(', ')}</span>
            </div>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total Amount:</span>
              <span className="font-semibold">{booking.totalAmount}</span>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm font-medium mb-2">Booking ID: {booking.id}</p>
            <p className="text-xs text-gray-600">Please show this confirmation or provide the booking ID at the cinema counter to collect your tickets.</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download E-ticket
          </Button>
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </CardFooter>
      </Card>
      <div className="text-center mt-8">
        <Link href="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  )
}