'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, MapPin, Ticket } from 'lucide-react'

export default function UserProfilePage() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/images/avatars/john-doe.jpg",
  })

  const bookingHistory = [
    { id: 1, movie: "Inception", date: "2023-05-15", cinema: "Cineplex Downtown" },
    { id: 2, movie: "The Dark Knight", date: "2023-06-20", cinema: "Starlight Megaplex" },
    { id: 3, movie: "Interstellar", date: "2023-07-10", cinema: "IMAX Theater" },
  ]

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle profile update logic here
    console.log('Profile update:', user)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/3">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{user.name}</CardTitle>
                  <CardDescription>{user.email}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Edit Profile</Button>
            </CardContent>
          </Card>
        </aside>
        <main className="w-full md:w-2/3">
          <Tabs defaultValue="profile">
            <TabsList className="w-full">
              <TabsTrigger value="profile" className="w-full">Profile</TabsTrigger>
              <TabsTrigger value="bookings" className="w-full">Booking History</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your profile details here</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProfileUpdate} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={user.name}
                        onChange={(e) => setUser({...user, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">New Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter new password"
                      />
                    </div>
                    <Button type="submit">Save Changes</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <CardTitle>Booking History</CardTitle>
                  <CardDescription>Your recent movie bookings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {bookingHistory.map((booking) => (
                      <li key={booking.id} className="border-b pb-4 last:border-b-0">
                        <h3 className="font-semibold">{booking.movie}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                          <span className="flex items-center">
                            <CalendarDays className="mr-1 h-4 w-4" />
                            {booking.date}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="mr-1 h-4 w-4" />
                            {booking.cinema}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Ticket className="mr-2 h-4 w-4" />
                    View All Bookings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}