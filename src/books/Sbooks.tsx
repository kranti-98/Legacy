
import { sbooks } from './sbooksData'

const books = sbooks

const Sbooks = () => {
  const bookCards = books.map((book) => (
    <a
      id={book.id}
      key={book.id}
      href={book.pdfUrl}
      target="_blank"
      rel="noreferrer"
      title={`${book.title} - ${book.description}`}
      className="min-w-[80vw] shrink-0 snap-start rounded-[2rem] border border-slate-700 bg-white/5 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-slate-500 lg:min-w-auto"
    >
      <div
        className={`aspect-[3/4] overflow-hidden rounded-t-[1.75rem] ${book.coverImage ? '' : `bg-gradient-to-br ${book.coverImage}`}`}
      >
        {book.coverImage ? (
          <img
            src={book.coverImage}
            alt={book.title}
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>
      <div className="space-y-2 p-4 text-left">
        <h3 className="text-lg font-semibold text-white">{book.title}</h3>
        <p className="text-sm text-slate-300">{book.description}</p>
      </div>
    </a>
  ))

  return (
    <section className="bg-slate-950 py-14 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Books by Suranjan Panda</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Discover the inspiring tales written by Suranjan Panda</h2>
        </div>

        <div className="mb-4 text-sm text-slate-400">Swipe to view more</div>
        <div className="flex gap-4 overflow-x-auto pb-4 pr-4 scroll-smooth snap-x snap-mandatory lg:grid lg:grid-cols-2 xl:grid-cols-5">
          {bookCards}
        </div>

      </div>
    </section>
  )
}

export default Sbooks