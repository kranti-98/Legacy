const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950 text-slate-100 shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-3xl font-extrabold text-white">Legacy</h1>
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
      </div>
    </header>
  )
}

export default Header