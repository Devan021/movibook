'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Mail, Phone, MapPin, CreditCard, Ticket } from 'lucide-react'

// Mock data - replace with API call in production
const userProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 234 567 8900",
  address: "123 Movie St, Cinema City, 12345",
}

const bookingHistory = [
  { id: 1, movie: "Inception", date: "2023-07-10", time: "7:00 PM", seats: "A1, A2" },
  { id: 2, movie: "The Dark Knight", date: "2023-06-15", time: "8:30 PM", seats: "B3, B4" },
  { id: 3, movie: "Interstellar", date: "2023-05-20", time: "6:45 PM", seats: "C2, C3, C4" },
]

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState(userProfile)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send the updated profile to your backend here
    console.log('Updated profile:', profile)
    setIsEditing(false)
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
          User Profile
        </motion.h1>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="bookings">Booking History</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <User className="w-5 h-5" />
                      <div className="flex-1">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={profile.name}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="w-5 h-5" />
                      <div className="flex-1">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={profile.email}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="w-5 h-5" />
                      <div className="flex-1">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={profile.phone}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MapPin className="w-5 h-5" />
                      <div className="flex-1">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          name="address"
                          value={profile.address}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </div>
                  {isEditing ? (
                    <div className="mt-6 flex justify-end space-x-4">
                      <Button type="submit" className="bg-[#EF4444] hover:bg-[#DC2626]">Save Changes</Button>
                      <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                    </div>
                  ) : (
                    <Button type="button" className="mt-6" onClick={() => setIsEditing(true)}>Edit Profile</Button>
                  )}
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>Booking History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookingHistory.map((booking) => (
                    <Card key={booking.id}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-bold">{booking.movie}</h3>
                            <p className="text-sm text-gray-600">{booking.date} at {booking.time}</p>
                            <p className="text-sm text-gray-600">Seats: {booking.seats}</p>
                          </div>
                          <Button variant="outline" asChild>
                            <a href={`/tickets/${booking.id}`} target="_blank" rel="noopener noreferrer">
                              View Ticket
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}