'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Film, Clock, Calendar, CreditCard } from 'lucide-react'

// Mock data - replace with API call in production
const movieDetails = {
  id: 1,
  title: "Inception",
  poster: "/placeholder.svg?height=300&width=200",
  showtime: "7:00 PM",
  theater: "Cinema 3",
  date: "2023-07-16",
}

const seatMap = [
  ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'],
  ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8'],
  ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8'],
  ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8'],
  ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8'],
  ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8'],
]

export default function Booking() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])
  const [paymentMethod, setPaymentMethod] = useState('credit-card')

  const handleSeatSelection = (seat: string) => {
    setSelectedSeats(prev => 
      prev.includes(seat) 
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    )
  }

  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value)
  }

  const handleBooking = () => {
    // In a real app, you would send the booking details to your backend here
    console.log('Booking:', { movieDetails, selectedSeats, paymentMethod })
    // Then redirect to a confirmation page
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Book Your Tickets
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-2">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Select Your Seats</h2>
              <div className="mb-6 flex justify-center">
                <div className="bg-gray-300 w-3/4 h-8 rounded-t-lg flex items-center justify-center text-sm text-gray-700">
                  Screen
                </div>
              </div>
              <div className="grid grid-cols-8 gap-2 mb-6">
                {seatMap.flat().map((seat) => (
                  <Button
                    key={seat}
                    variant={selectedSeats.includes(seat) ? "default" : "outline"}
                    className="w-10 h-10 p-0"
                    onClick={() => handleSeatSelection(seat)}
                  >
                    {seat}
                  </Button>
                ))}
              </div>
              <div className="flex justify-center space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
                  Available
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded mr-2"></div>
                  Selected
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-500 rounded mr-2"></div>
                  Occupied
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Booking Summary</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Film className="w-5 h-5 mr-2" />
                  <span>{movieDetails.title}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{movieDetails.showtime}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{movieDetails.date}</span>
                </div>
                <div>
                  <strong>Selected Seats:</strong> {selectedSeats.join(', ')}
                </div>
                <div>
                  <strong>Total:</strong> ${selectedSeats.length * 

 10}
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <div className="w-full">
                <h3 className="text-lg font-bold mb-2">Payment Method</h3>
                <RadioGroup value={paymentMethod} onValueChange={handlePaymentMethodChange}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card">Credit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                </RadioGroup>
                <Button 
                  className="w-full mt-4 bg-[#EF4444] hover:bg-[#DC2626]"
                  onClick={handleBooking}
                  disabled={selectedSeats.length === 0}
                >
                  Book Now
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}