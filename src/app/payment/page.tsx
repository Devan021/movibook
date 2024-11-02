'use client'

import React from 'react'
import { PaymentForm } from '@/components/PaymentForm'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Clock, MapPin, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

// Mock data - replace with actual data from your application state or API
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

export default function PaymentPage() {
  const totalAmount = mockBookingData.selectedSeats.length * mockBookingData.pricing.ticketPrice + 
                     mockBookingData.pricing.convenience + 
                     mockBookingData.pricing.tax

  const handlePaymentComplete = () => {
    // Handle successful payment
    console.log('Payment completed')
    // Redirect to confirmation page or show success message
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/booking" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Booking
        </Link>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Column - Booking Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <img 
                    src={mockBookingData.movie.image} 
                    alt={mockBookingData.movie.title} 
                    className="w-24 h-36 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{mockBookingData.movie.title}</h3>
                    <div className="text-sm text-muted-foreground space-y-1 mt-2">
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

                <div>
                  <h4 className="font-semibold mb-2">Selected Seats</h4>
                  <p>{mockBookingData.selectedSeats.join(', ')}</p>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Price Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Tickets ({mockBookingData.selectedSeats.length} × ${mockBookingData.pricing.ticketPrice})</span>
                      <span>${(mockBookingData.selectedSeats.length * mockBookingData.pricing.ticketPrice).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Convenience Fee</span>
                      <span>${mockBookingData.pricing.convenience.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
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
          </div>

          {/* Right Column - Payment Form */}
          <div>
            <PaymentForm 
              amount={totalAmount} 
              onPaymentComplete={handlePaymentComplete} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}