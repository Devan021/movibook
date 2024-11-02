import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, User } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MovieMaster
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/movies" className="text-gray-600 hover:text-blue-600 transition-colors">
            Movies
          </Link>
          <Link href="/cinemas" className="text-gray-600 hover:text-blue-600 transition-colors">
            Cinemas
          </Link>
          <Link href="/offers" className="text-gray-600 hover:text-blue-600 transition-colors">
            Offers
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <form className="relative hidden md:block">
            <Input
              type="search"
              placeholder="Search movies..."
              className="w-[200px] pl-8"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          </form>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">User account</span>
          </Button>
        </div>
      </div>
    </header>
  )
}