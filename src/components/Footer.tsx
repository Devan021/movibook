'use client'

import React from 'react'
import Link from 'next/link'
import { Film, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Description */}
          <div className="flex items-center space-x-2">
            <Film className="h-6 w-6 text-[#EF4444]" />
            <span className="text-xl font-bold">MovieBook</span>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6">
            <Link 
              href="/about" 
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link 
              href="/privacy" 
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Privacy
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Link href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MovieBook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}