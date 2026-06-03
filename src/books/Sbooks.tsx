
import BidharmiCover from '../assets/CoverPic/Bidharmi.jpeg'
import BidharmiPdf from '../assets/books/SuranjanBooks/Bidharmi . PDF.pdf'

const books = [
  {
    id: 's-1',
    title: 'ବିଧର୍ମୀ',
    description: 'A heartfelt journey through legacy and hope.',
    coverImage: BidharmiCover,
    pdfUrl: BidharmiPdf,
  },
  {
    id: 's-2',
    title: 'ମାଟିର ମଣିଷ ',
    description: 'A story of bravery in the face of the unknown.',
    color: 'from-slate-200 via-slate-300 to-slate-400',
    pdfUrl: '/pdfs/matira-manisha.pdf',
  },
  {
    id: 's-3',
    title: 'Tales of the Brave',
    description: 'Epic adventures from a timeless heritage.',
    color: 'from-rose-200 via-pink-300 to-fuchsia-400',
    pdfUrl: '/pdfs/tales-of-the-brave.pdf',
  },
  {
    id: 's-4',
    title: 'Mourage the Brave',
    description: 'A classic tale of loyalty and destiny.',
    color: 'from-sky-200 via-cyan-300 to-sky-400',
    pdfUrl: '/pdfs/mourage-the-brave.pdf',
  },
  {
    id: 's-5',
    title: 'WarriorPath',
    description: 'An inspiring saga of strength and honor.',
    color: 'from-emerald-200 via-lime-300 to-emerald-400',
    pdfUrl: '/pdfs/warriorpath.pdf',
  },
]

const Sbooks = () => {
  return (
    <section className="bg-slate-950 py-14 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Books by Suranjan Panda</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Discover the inspiring tales written by Suranjan Panda</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {books.map((book) => (
            <div key={book.id} className="group overflow-hidden rounded-[2rem] border border-slate-700 bg-white/5 p-2 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-slate-500">
              <div
                className={`mb-3 overflow-hidden rounded-[1.75rem] p-3 text-slate-950 ${book.coverImage ? '' : `bg-gradient-to-br ${book.color}`}`}
                style={{
                  aspectRatio: '3 / 4',
                  backgroundImage: book.coverImage ? `url(${book.coverImage})` : undefined,
                  backgroundSize: book.coverImage ? 'cover' : undefined,
                  backgroundPosition: book.coverImage ? 'center' : undefined,
                }}
              >
                <div className="flex h-full flex-col items-start justify-end gap-3 bg-transparent">
                  <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-900">Book</span>
                  <h3 className="text-lg font-bold leading-none">{book.title}</h3>
                </div>
              </div>
              <div className="space-y-3 px-1 pb-2">
                <p className="text-sm text-slate-300">{book.description}</p>
                <a
                  href={book.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-white"
                >
                  Open PDF
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Sbooks