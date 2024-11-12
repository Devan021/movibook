'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { Eye, EyeOff, Facebook, Smartphone, X, LogIn } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoginButton() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt with:', { email, password })
  }

  return (
    <>
      <Button onClick={() => setIsLoginModalOpen(true)} className="bg-red-600 hover:bg-red-700 text-white">
        <LogIn className="mr-2 h-4 w-4" />
        Sign In
      </Button>

      <AnimatePresence>
        {isLoginModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsLoginModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 15 }}
              className="w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="bg-white shadow-xl">
                <CardHeader className="space-y-1 relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2"
                    onClick={() => setIsLoginModalOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <CardTitle className="text-2xl font-bold text-center text-red-600">MovieBook</CardTitle>
                  <CardDescription className="text-center">
                    Sign in to book your favorite movies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="transition-all duration-200 focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="pr-10 transition-all duration-200 focus:ring-2 focus:ring-red-500"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                      Sign In
                    </Button>
                  </form>
                  <div className="mt-4 flex items-center justify-between">
                    <hr className="w-full border-t border-gray-300" />
                    <span className="px-2 text-gray-500 text-sm">Or</span>
                    <hr className="w-full border-t border-gray-300" />
                  </div>
                  <div className="mt-4 space-y-2">
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                      <Facebook className="mr-2 h-4 w-4" />
                      Continue with Facebook
                    </Button>
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                      <Smartphone className="mr-2 h-4 w-4" />
                      Continue with Mobile Number
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2 text-center text-sm text-gray-600">
                  <Link href="/auth/forgot-password" className="hover:text-red-600 transition-colors duration-200">
                    Forgot password?
                  </Link>
                  <span>
                    New to Book My Show?{' '}
                    <Link href="/auth/register" className="font-semibold text-red-600 hover:underline">
                      Create an account
                    </Link>
                  </span>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}