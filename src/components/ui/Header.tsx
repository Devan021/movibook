'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Film, Search, ChevronDown, MapPin } from 'lucide-react'

const cities = ['Bangalore', 'Chennai', 'Trivandrum', 'Delhi', 'Hyderabad']

const Header = () => {
    const [currentCity, setCurrentCity] = useState('Bangalore')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
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
                            <Input type="search" placeholder="Search for movies" className="pl-10 bg-white text-black w-full" />
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

                    {/* Desktop Menu Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/auth/login">
                            <Button variant="ghost">Sign In</Button>
                        </Link>
                        <Link href="/auth/register">
                            <Button variant="default">Register</Button>
                        </Link>
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

                {/* Mobile Menu */}
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
                                <Input type="search" placeholder="Search for movies" className="bg-white text-black" />
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
                                <Link href="/auth/login" className="w-full">
                                    <Button variant="ghost" className="w-full">Sign In</Button>
                                </Link>
                                <Link href="/auth/register" className="w-full">
                                    <Button variant="default" className="w-full">Register</Button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}

export default Header