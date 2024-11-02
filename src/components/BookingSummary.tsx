import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Clock, MapPin } from 'lucide-react'

interface BookingSummaryProps {
  movie: {
    title: string
    image: string
  }
  showtime: {
    date: string
    time: string
    cinema: string
  }
  selectedSeats: string[]
  totalAmount: number
  onConfirm: () => void
}

export function BookingSummary({ movie, showtime, selectedSeats, totalAmount, onConfirm }: BookingSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start space-x-4">
          <img src={movie.image} alt={movie.title} className="w-24 h-36 object-cover rounded" />
          <div>
            <h3 className="font-semibold">{movie.title}</h3>
            <div className="text-sm  text-muted-foreground space-y-1 mt-2">
              <div className="flex items-center">
                <CalendarDays className="mr-2 h-4 w-4" />
                {showtime.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                {showtime.time}
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                {showtime.cinema}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Selected Seats</h4>
          <p>{selectedSeats.join(', ')}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Total Amount</h4>
          <p>${totalAmount.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onConfirm}>Confirm Booking</Button>
      </CardFooter>
    </Card>
  )
}