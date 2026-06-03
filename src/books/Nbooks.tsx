
const books = [
  {
    id: 'n-1',
    title: 'Echoes of Freedom',
    description: 'A heartfelt journey through legacy and hope.',
    color: 'from-amber-200 via-orange-300 to-amber-400',
    pdfUrl: '/pdfs/echoes-of-freedom.pdf',
  },
  {
    id: 'n-2',
    title: 'Courage the Unnamed',
    description: 'A story of bravery in the face of the unknown.',
    color: 'from-slate-200 via-slate-300 to-slate-400',
    pdfUrl: '/pdfs/courage-the-unnamed.pdf',
  },
  {
    id: 'n-3',
    title: 'Tales of the Brave',
    description: 'Epic adventures from a timeless heritage.',
    color: 'from-rose-200 via-pink-300 to-fuchsia-400',
    pdfUrl: '/pdfs/tales-of-the-brave.pdf',
  },
  {
    id: 'n-4',
    title: 'Mourage the Brave',
    description: 'A classic tale of loyalty and destiny.',
    color: 'from-sky-200 via-cyan-300 to-sky-400',
    pdfUrl: '/pdfs/mourage-the-brave.pdf',
  },
  {
    id: 'n-5',
    title: 'WarriorPath',
    description: 'An inspiring saga of strength and honor.',
    color: 'from-emerald-200 via-lime-300 to-emerald-400',
    pdfUrl: '/pdfs/warriorpath.pdf',
  },
]

const Nbooks = () => {
  return (
    <section className="bg-slate-950 py-14 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Books by Nabaghan Panda</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Discover the inspiring tales written by Nabaghan Panda</h2>
        </div>

        <div className="mb-4 text-sm text-slate-400">Swipe to view more</div>
        <div className="flex gap-6 overflow-x-auto pb-4 pr-4 scroll-smooth snap-x snap-mandatory lg:grid lg:grid-cols-2 xl:grid-cols-5">
          {books.map((book) => (
            <a
              key={book.id}
              href={book.pdfUrl}
              target="_blank"
              rel="noreferrer"
              title={`${book.title} - ${book.description}`}
              className="min-w-[80vw] shrink-0 snap-start rounded-[2rem] border border-slate-700 bg-white/5 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-slate-500 lg:min-w-auto"
            >
              <div
                className={`mb-3 aspect-[3/4] overflow-hidden rounded-t-[1.75rem] bg-gradient-to-br ${book.color}`}
              />
              <div className="space-y-2 p-4 text-left">
                <h3 className="text-lg font-semibold text-white">{book.title}</h3>
                <p className="text-sm text-slate-300">{book.description}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Nbooks;