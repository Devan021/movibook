import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Clock, MapPin, Ticket, Download, Share2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface BookingConfirmationProps {
  booking: {
    id: string
    movie: {
      title: string
      image: string
    }
    date: string
    time: string
    cinema: string
    seats: string[]
    totalAmount: number
  }
}

export function BookingConfirmation({ booking }: BookingConfirmationProps) {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
        <CardDescription>Your tickets have been booked successfully</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-center">
          <Ticket className="h-16 w-16 text-primary" />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">{booking.movie.title}</h2>
          <Image
            src={booking.movie.image}
            alt={booking.movie.title}
            width={200}
            height={300}
            className="mx-auto rounded-lg shadow-md"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center">
            <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{booking.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{booking.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{booking.cinema}</span>
          </div>
          <div className="flex items-center">
            <Ticket className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>Seats: {booking.seats.join(', ')}</span>
          </div>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Total Amount:</span>
            <span className="font-semibold">${booking.totalAmount.toFixed(2)}</span>
          </div>
        </div>
        <div className="bg-muted p-4 rounded-lg">
          <p className="text-sm font-medium mb-2">Booking ID: {booking.id}</p>
          <p className="text-xs text-muted-foreground">Please show this confirmation or provide the booking ID at the cinema counter to collect your tickets.</p>
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
  )
}