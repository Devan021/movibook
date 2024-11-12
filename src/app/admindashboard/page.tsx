'use client'

import { useState } from 'react'
import { BarChart3, CalendarDays, Film, LayoutDashboard, Settings, Ticket, Users, Star, TrendingUp, DollarSign } from 'lucide-react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const topShows = [
  { name: 'Avengers: Endgame', bookings: 1500, revenue: 15000 },
  { name: 'Inception', bookings: 1200, revenue: 12000 },
  { name: 'The Lion King', bookings: 1000, revenue: 10000 },
  { name: 'Joker', bookings: 800, revenue: 8000 },
  { name: 'Parasite', bookings: 600, revenue: 6000 },
]

const recentBookings = [
  { id: '1', user: 'John Doe', show: 'Avengers: Endgame', date: '2023-06-15', amount: '$50', status: 'Confirmed' },
  { id: '2', user: 'Jane Smith', show: 'Inception', date: '2023-06-14', amount: '$45', status: 'Pending' },
  { id: '3', user: 'Bob Johnson', show: 'The Lion King', date: '2023-06-13', amount: '$55', status: 'Confirmed' },
  { id: '4', user: 'Alice Brown', show: 'Joker', date: '2023-06-12', amount: '$50', status: 'Cancelled' },
  { id: '5', user: 'Charlie Wilson', show: 'Parasite', date: '2023-06-11', amount: '$40', status: 'Confirmed' },
]

const upcomingShows = [
  { id: '1', name: 'Dune: Part Two', date: '2023-07-01', venue: 'IMAX Theater', tickets: 500 },
  { id: '2', name: 'Black Widow', date: '2023-07-05', venue: 'Cineplex', tickets: 400 },
  { id: '3', name: 'No Time to Die', date: '2023-07-10', venue: 'AMC', tickets: 450 },
  { id: '4', name: 'Top Gun: Maverick', date: '2023-07-15', venue: 'Regal Cinema', tickets: 350 },
]

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'w-64' : 'w-16'
        } transition-all duration-300 ease-in-out bg-gray-800 p-4 border-r border-gray-700`}
      >
        <div className="flex items-center justify-between mb-8">
          <h1 className={`text-xl font-bold text-red-500 ${isSidebarOpen ? 'block' : 'hidden'}`}>Book My Show</h1>
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <LayoutDashboard className="h-6 w-6 text-red-500" />
          </Button>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <Button variant="ghost" className="w-full justify-start text-white hover:text-red-500 hover:bg-gray-700">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                {isSidebarOpen && 'Dashboard'}
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start text-white hover:text-red-500 hover:bg-gray-700">
                <Film className="mr-2 h-4 w-4" />
                {isSidebarOpen && 'Shows'}
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start text-white hover:text-red-500 hover:bg-gray-700">
                <Ticket className="mr-2 h-4 w-4" />
                {isSidebarOpen && 'Bookings'}
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start text-white hover:text-red-500 hover:bg-gray-700">
                <Users className="mr-2 h-4 w-4" />
                {isSidebarOpen && 'Users'}
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start text-white hover:text-red-500 hover:bg-gray-700">
                <Settings className="mr-2 h-4 w-4" />
                {isSidebarOpen && 'Settings'}
              </Button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-red-500">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <Input type="search" placeholder="Search..." className="w-64 bg-gray-800 text-white border-gray-700" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="Admin" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-gray-800 text-white border-gray-700" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Admin User</p>
                    <p className="text-xs leading-none text-gray-400">admin@bookmyshow.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-700" />
                <DropdownMenuItem className="text-red-500 focus:text-red-500 focus:bg-gray-700">Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Bookings</CardTitle>
              <Ticket className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5,234</div>
              <p className="text-xs text-gray-400">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$52,345</div>
              <p className="text-xs text-gray-400">+15% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Active Shows</CardTitle>
              <Film className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">25</div>
              <p className="text-xs text-gray-400">+2 new shows this week</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">User Ratings</CardTitle>
              <Star className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <p className="text-xs text-gray-400">Average across all shows</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for different sections */}
        <Tabs defaultValue="bookings" className="space-y-4">
          <TabsList className="bg-gray-800 text-gray-400">
            <TabsTrigger value="bookings" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">Recent Bookings</TabsTrigger>
            <TabsTrigger value="topShows" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">Top Shows</TabsTrigger>
            <TabsTrigger value="upcomingShows" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">Upcoming Shows</TabsTrigger>
          </TabsList>
          <TabsContent value="bookings">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-red-500">Recent Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700">
                      <TableHead className="text-gray-400">User</TableHead>
                      <TableHead className="text-gray-400">Show</TableHead>
                      <TableHead className="text-gray-400">Date</TableHead>
                      <TableHead className="text-gray-400">Amount</TableHead>
                      <TableHead className="text-gray-400">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentBookings.map((booking) => (
                      <TableRow key={booking.id} className="border-gray-700">
                        <TableCell className="font-medium">{booking.user}</TableCell>
                        <TableCell>{booking.show}</TableCell>
                        <TableCell>{booking.date}</TableCell>
                        <TableCell>{booking.amount}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            booking.status === 'Confirmed' ? 'bg-green-500 text-white' :
                            booking.status === 'Pending' ? 'bg-yellow-500 text-black' :
                            'bg-red-500 text-white'
                          }`}>
                            {booking.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="topShows">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-red-500">Top Shows</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={topShows}>
                    <XAxis dataKey="name" stroke="#888888" />
                    <YAxis stroke="#888888" />
                    <Bar dataKey="bookings" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="upcomingShows">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-red-500">Upcoming Shows</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700">
                      <TableHead className="text-gray-400">Show Name</TableHead>
                      <TableHead className="text-gray-400">Date</TableHead>
                      <TableHead className="text-gray-400">Venue</TableHead>
                      <TableHead className="text-gray-400">Available Tickets</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingShows.map((show) => (
                      <TableRow key={show.id} className="border-gray-700">
                        <TableCell className="font-medium">{show.name}</TableCell>
                        <TableCell>{show.date}</TableCell>
                        <TableCell>{show.venue}</TableCell>
                        <TableCell>{show.tickets}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}