'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Clock, MapPin, Ticket, CreditCard } from 'lucide-react'
import Link from 'next/link'

const mockBookingData = {
  movie: {
    title: "Inception",
    image: "/assets/inception.jpeg",
  },
  showtime: {
    date: "November 3, 2024",
    time: "7:30 PM",
    cinema: "PVR Cinemas - Phoenix Mall",
  },
  selectedSeats: ["F12", "F13", "F14"],
  pricing: {
    ticketPrice: 12.99,
    convenience: 1.99,
    tax: 2.50
  }
}

export default function BookingSummaryPage() {
  const totalAmount = mockBookingData.selectedSeats.length * mockBookingData.pricing.ticketPrice + 
                     mockBookingData.pricing.convenience + 
                     mockBookingData.pricing.tax

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-2xl font-bold mb-6">Booking Summary</h1>
        
        <div className="grid gap-6">
          {/* Movie and Showtime Details */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <img 
                  src={mockBookingData.movie.image} 
                  alt={mockBookingData.movie.title} 
                  className="w-24 h-36 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold text-xl">{mockBookingData.movie.title}</h3>
                  <div className="text-sm text-muted-foreground space-y-2 mt-2">
                    <div className="flex items-center">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      {mockBookingData.showtime.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {mockBookingData.showtime.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      {mockBookingData.showtime.cinema}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seats and Pricing Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Booking Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center mb-2">
                  <Ticket className="mr-2 h-4 w-4" />
                  <h4 className="font-semibold">Selected Seats</h4>
                </div>
                <p className="text-sm ml-6">{mockBookingData.selectedSeats.join(', ')}</p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <CreditCard className="mr-2 h-4 w-4" />
                  <h4 className="font-semibold">Price Details</h4>
                </div>
                <div className="ml-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Tickets ({mockBookingData.selectedSeats.length} × ${mockBookingData.pricing.ticketPrice})</span>
                    <span>${(mockBookingData.selectedSeats.length * mockBookingData.pricing.ticketPrice).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Convenience Fee</span>
                    <span>${mockBookingData.pricing.convenience.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>${mockBookingData.pricing.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2 border-t">
                    <span>Total Amount</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => window.history.back()}
            >
              Back
            </Button>
            <Button 
              className="flex-1 bg-[#EF4444] hover:bg-[#DC2626]"
              onClick={() => {
                // Handle payment logic here
                console.log('Processing payment...')
              }}
            >
              Proceed to Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}