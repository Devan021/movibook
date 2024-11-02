"use client";

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SearchForm() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Search query:', searchQuery)
    console.log('Selected genre:', selectedGenre)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
      <Input
        type="text"
        placeholder="Search for movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="md:flex-grow"
      />
      <Select value={selectedGenre} onValueChange={setSelectedGenre}>
        <SelectTrigger className="w-full md:w-[200px]">
          <SelectValue placeholder="Select genre" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="action">Action</SelectItem>
          <SelectItem value="comedy">Comedy</SelectItem>
          <SelectItem value="drama">Drama</SelectItem>
          <SelectItem  value="sci-fi">Sci-Fi</SelectItem>
          <SelectItem value="horror">Horror</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" className="md:w-[120px]">Search</Button>
    </form>
  )
}