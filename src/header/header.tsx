import { useState, useRef, useEffect } from 'react'
import { sbooks } from '../books/sbooksData'
import type { Sbook } from '../books/sbooksData'

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchResults, setSearchResults] = useState<Sbook[]>([])
  const [searchMessage, setSearchMessage] = useState('')
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        if (searchTerm.trim() === '') {
          setSearchOpen(false)
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [searchTerm])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSearch = () => {
    const trimmed = searchTerm.trim()
    if (!trimmed) {
      setSearchResults([])
      setSearchMessage('Please enter a book name to search.')
      return
    }

    const getInitials = (text: string) =>
      text
        .split(/\s+/)
        .filter(Boolean)
        .map((word) => word[0])
        .join('')
        .toLowerCase()

    const normalizedQuery = trimmed.toLowerCase()

    const matches = sbooks.filter((book) => {
      const normalizedSearchName = book.searchName.toLowerCase()
      const normalizedTitle = book.title.toLowerCase()
      const searchNameInitials = getInitials(book.searchName)
      const titleInitials = getInitials(book.title)

      return (
        normalizedSearchName === normalizedQuery ||
        normalizedSearchName.includes(normalizedQuery) ||
        normalizedTitle.includes(normalizedQuery) ||
        searchNameInitials.startsWith(normalizedQuery) ||
        titleInitials.startsWith(normalizedQuery)
      )
    })

    if (matches.length > 0) {
      setSearchResults(matches)
      setSearchMessage(`${matches.length} book(s) found.`)
    } else {
      setSearchResults([])
      setSearchMessage('No result found.')
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950 text-slate-100 shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-3xl font-extrabold text-white">Legacy</h1>
        <div className="flex items-center gap-4">
          <nav className="flex gap-6">
            <button
              onClick={() => scrollToSection('books')}
              className="text-lg font-semibold text-slate-300 transition hover:text-white"
            >
              Books
            </button>
            <button
              onClick={() => scrollToSection('authors')}
              className="text-lg font-semibold text-slate-300 transition hover:text-white"
            >
              Authors
            </button>
          </nav>

          <div className="relative">
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setSearchOpen((open) => !open)}
              className="rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-700"
            >
              Search
            </button>

            {searchOpen && (
              <div ref={dropdownRef} className="absolute right-0 z-50 mt-2 w-72 rounded-3xl border border-slate-700 bg-slate-950 p-4 shadow-2xl shadow-black/50">
                <div className="space-y-3">
                  <label className="block text-xs uppercase tracking-[0.35em] text-slate-400">Search Books</label>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    onKeyDown={(event) => event.key === 'Enter' && handleSearch()}
                    placeholder="Type book name"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-slate-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleSearch}
                    className="w-full rounded-2xl bg-slate-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-600"
                  >
                    Search
                  </button>
                  <div className="rounded-2xl bg-slate-900 p-3 text-sm text-slate-300">
                    {searchMessage || 'Search by book title from Suranjan Panda.'}
                  </div>
                  {searchResults.length > 0 && (
                    <div className="space-y-3">
                      {searchResults.map((book) => (
                        <button
                          key={book.id}
                          type="button"
                          onClick={() => {
                            const card = document.getElementById(book.id)
                            if (card) {
                              card.scrollIntoView({ behavior: 'smooth', block: 'center' })
                            }
                            setSearchOpen(false)
                          }}
                          className="flex w-full items-center gap-3 rounded-3xl border border-slate-700 bg-slate-900 px-3 py-3 text-left transition hover:border-slate-500"
                        >
                          <img
                            src={book.coverImage}
                            alt={book.title}
                            className="h-12 w-10 rounded-2xl object-cover"
                          />
                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-white">{book.title}</p>
                            <p className="truncate text-xs text-slate-400">{book.searchName}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header