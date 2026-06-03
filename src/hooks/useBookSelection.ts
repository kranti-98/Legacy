import { useMemo, useState } from 'react'

type Book = {
  id: string
  title: string
  description: string
  color: string
}

export const useBookSelection = (books: Book[], initialId?: string) => {
  const [selectedBookId, setSelectedBookId] = useState(
    initialId ?? books[0]?.id ?? ''
  )

  const activeBook = useMemo(
    () => books.find((book) => book.id === selectedBookId) ?? books[0],
    [books, selectedBookId]
  )

  return { selectedBookId, activeBook, setSelectedBookId }
}
