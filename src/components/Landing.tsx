'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Film, Search, ChevronDown, ChevronLeft, ChevronRight, Star, Bell, Laugh, Heart, Zap, Skull, Ghost, Facebook, Twitter, Instagram, Youtube, MapPin, Calendar, Clock, Ticket, ThumbsUp, Award } from 'lucide-react'

const cities = ['Bangalore', 'Chennai', 'Trivandrum', 'Delhi', 'Hyderabad']

const featuredMovies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi, Action",
    rating: 4.8,
    image: "/assets/inception.jpeg?height=600&width=1200"
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    rating: 4.9,
    image: "/assets/dakrnight.jpg?height=600&width=1200"
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi, Adventure",
    rating: 4.7,
    image: "/assets/interstellar.jpg?height=600&width=1200"
  },
  {
    id: 4,
    title: "1000 babies",
    genre: "War, Action, Drama",
    rating: 4.6,
    image: "/assets/1000babies.jpg?height=600&width=1200"
  }
]

const movies = [
  { id: 1, title: "Inception", language: "English", format: "2D", rating: 4.8, image: "/assets/inception.jpeg?height=400&width=300", releaseDate: "2023-07-15" },
  { id: 2, title: "The Dark Knight", language: "English", format: "IMAX", rating: 4.9, image: "/assets/dakrnight.jpg?height=400&width=300", releaseDate: "2023-07-22" },
  { id: 3, title: "Interstellar", language: "English", format: "3D", rating: 4.7, image: "/assets/interstellar.jpg?height=400&width=300", releaseDate: "2023-07-29" },
  { id: 4, title: "Dunkirk", language: "English", format: "2D", rating: 4.6, image: "/assets/premalu.jpeg?height=400&width=300", releaseDate: "2023-08-05" },
  { id: 5, title: "Tenet", language: "English", format: "IMAX", rating: 4.5, image: "/assets/1000babies.jpg?height=400&width=300", releaseDate: "2023-08-12" },
  { id: 6, title: "Oppenheimer", language: "English", format: "IMAX", rating: 4.9, image: "/assets/inception.jpeg?height=400&width=300", releaseDate: "2023-08-19" },
]

const categories = [
  { name: "Action", icon: Zap, count: 42 },
  { name: "Comedy", icon: Laugh, count: 38 },
  { name: "Drama", icon: Heart, count: 56 },
  { name: "Sci-Fi", icon: Ghost, count: 27 },
  { name: "Horror", icon: Skull, count: 23 },
  { name: "Thriller", icon: Film, count: 31 },
]

const testimonials = [
  { id: 1, name: "Bharath", comment: "The best movie booking experience I've ever had!", rating: 5 },
  { id: 2, name: "Niranjan", comment: "Seamless booking process and great selection of movies!", rating: 4.5 },
  { id: 3, name: "Anjana", comment: "I love the user-friendly interface and quick ticket delivery.", rating: 5 },
]

export default function Landing() {
  const [currentCity, setCurrentCity] = useState('New York')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [language, setLanguage] = useState('All')
  const [format, setFormat] = useState('All')

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featuredMovies.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % featuredMovies.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + featuredMovies.length) % featuredMovies.length)
  }

  const filteredMovies = movies.filter(movie => 
    (language === 'All' || movie.language === language) &&
    (format === 'All' || movie.format === format)
  )

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <motion.header 
        className="bg-[#1F2937] text-white py-4 sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Film className="h-6 w-6 text-[#EF4444]" />
              <span className="text-xl font-bold">MovieBook</span>
            </Link>

            <div className="hidden md:flex items-center space-x-4 flex-1 max-w-xl mx-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search for movies"
                  className="pl-10 bg-white text-black w-full"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{currentCity}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {cities.map((city) => (
                    <DropdownMenuItem key={city} onSelect={() => setCurrentCity(city)}>
                      {city}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" href="#">Sign In</Button>
              <Button variant="default">Register</Button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="mt-4 md:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col space-y-4">
                  <Input
                    type="search"
                    placeholder="Search for movies"
                    className="bg-white text-black"
                  />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="flex items-center justify-between w-full">
                        <MapPin className="h-4 w-4" />
                        <span>{currentCity}</span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {cities.map((city) => (
                        <DropdownMenuItem key={city} onSelect={() => setCurrentCity(city)}>
                          {city}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button variant="ghost" className="w-full">Sign In</Button>
                  <Button variant="default" className="w-full">Register</Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
          {featuredMovies.map((movie, index) => (
            <motion.div
              key={movie.id}
              className={`absolute top-0 left-0 w-full h-full`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              style={{
                backgroundImage: `url(${movie.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
                <div className="container mx-auto px-4 py-8 md:py-16">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-2 text-white"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {movie.title}
                  </motion.h2>
                  <motion.p 
                    className="text-lg md:text-xl mb-4 text-white"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {movie.genre}
                  </motion.p>
                  <motion.div 
                    className="flex items-center mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Star className="text-yellow-400 mr-1" />
                    <span className="text-white">{movie.rating}/5</span>
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button size="lg" className="bg-[#EF4444] hover:bg-[#DC2626]">Book Now</Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </section>

        {/* Quick Booking Section */}
        <motion.section 
          className="py-12 bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Quick Booking</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-[#EF4444]" />
                  <select className="flex-1 p-2 border rounded">
                    <option>Select City</option>
                    {cities.map(city => <option key={city}>{city}</option>)}
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <Film className="text-[#EF4444]" />
                  <select className="flex-1 p-2 border rounded">
                    <option>Select Movie</option>
                    {movies.map(movie => <option key={movie.id}>{movie.title}</option>)}
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="text-[#EF4444]" />
                  <input type="date" className="flex-1 p-2 border rounded" />
                </div>
              </div>
              <Button className="w-full mt-4  bg-[#EF4444] hover:bg-[#DC2626]">Find Shows</Button>
            </div>
          </div>
        </motion.section>

        {/* Movies Section */}
        <motion.section 
          className="py-12 bg-gray-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="container mx-auto px-4">
            <Tabs defaultValue="now-showing" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="now-showing">Now Showing</TabsTrigger>
                <TabsTrigger value="coming-soon">Coming Soon</TabsTrigger>
              </TabsList>
              <TabsContent value="now-showing">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    <option value="All">All Languages</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                  </select>
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    <option value="All">All Formats</option>
                    <option value="2D">2D</option>
                    <option value="3D">3D</option>
                    <option value="IMAX">IMAX</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {filteredMovies.map((movie) => (
                    <motion.div
                      key={movie.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="flex flex-col h-full">
                        <CardHeader className="p-0">
                          <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover rounded-t-lg" />
                        </CardHeader>
                        <CardContent className="p-4 flex-grow">
                          <CardTitle className="text-lg mb-2">{movie.title}</CardTitle>
                          <p className="text-sm text-gray-600 mb-2">{movie.language} • {movie.format}</p>
                          {movie.rating && (
                            <div className="flex items-center mb-2">
                              <Star className="text-yellow-400 w-4 h-4 mr-1" />
                              <span className="text-sm">{movie.rating}/5</span>
                            </div>
                          )}
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button className="w-full bg-[#EF4444] hover:bg-[#DC2626]">Book</Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="coming-soon">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {filteredMovies.map((movie) => (
                    <motion.div
                      key={movie.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="flex flex-col h-full">
                        <CardHeader className="p-0">
                          <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover rounded-t-lg" />
                        </CardHeader>
                        <CardContent className="p-4 flex-grow">
                          <CardTitle className="text-lg mb-2">{movie.title}</CardTitle>
                          <p className="text-sm text-gray-600 mb-2">{movie.language} • {movie.format}</p>
                          <p className="text-sm text-gray-600">Release: {movie.releaseDate}</p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button className="w-full" variant="outline">
                            <Bell className="w-4 h-4 mr-2" />
                            Notify Me
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.section>

        {/* Movie Categories Section */}
        <motion.section 
          className="py-12 bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Movie Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-2">
                      <category.icon className="w-12 h-12 mx-auto text-[#EF4444]" />
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardTitle className="text-lg mb-1">{category.name}</CardTitle>
                      <p className="text-sm text-gray-600">{category.count} movies</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section 
          className="py-12 bg-gray-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Film, title: "Choose Movie", description: "Browse our vast selection of movies" },
                { icon: MapPin, title: "Select Theater", description: "Pick your preferred cinema location" },
                { icon: Clock, title: "Pick Showtime", description: "Choose a convenient time for you" },
                { icon: Ticket, title: "Book Tickets", description: "Secure your seats with easy booking" },
              ].map((step, index) => (
                <motion.div 
                  key={step.title} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="bg-[#EF4444] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          className="py-12 bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="flex flex-col h-full">
                    <CardHeader>
                      <CardTitle>{testimonial.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600">{testimonial.comment}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="py-16 bg-[#1F2937] text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Cinema Magic?</h2>
            <p className="text-xl mb-8">Book your tickets now and immerse yourself in the world of movies!</p>
            <Button size="lg" className="bg-[#EF4444] hover:bg-[#DC2626]">Explore All Movies</Button>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1F2937] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About MovieBook</h3>
              <p className="text-sm text-gray-400 mb-4">MovieBook is your one-stop destination for hassle-free movie ticket bookings. Enjoy the latest blockbusters with just a few clicks!</p>
              <div className="flex space-x-4">
                <Link href="#" aria-label="Facebook"><Facebook /></Link>
                <Link href="#" aria-label="Twitter"><Twitter /></Link>
                <Link href="#" aria-label="Instagram"><Instagram /></Link>
                <Link href="#" aria-label="Youtube"><Youtube /></Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/faq">FAQs</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Genres</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/genre/action">Action</Link></li>
                <li><Link href="/genre/comedy">Comedy</Link></li>
                <li><Link href="/genre/drama">Drama</Link></li>
                <li><Link href="/genre/horror">Horror</Link></li>
                <li><Link href="/genre/sci-fi">Sci-Fi</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-sm text-gray-400 mb-4">Stay updated with the latest movies and exclusive offers!</p>
              <form className="flex flex-col space-y-2">
                <Input type="email" placeholder="Your email" className="bg-white text-black" />
                <Button type="submit" className="bg-[#EF4444] hover:bg-[#DC2626]">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">&copy; 2023 MovieBook. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white">Terms</Link>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy</Link>
              <Link href="/cookies" className="text-sm text-gray-400 hover:text-white">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}