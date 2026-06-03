import Authors from './authors/Authors'
import Nbooks from './books/Nbooks'
import Sbooks from './books/Sbooks'
import Header from './header/header'

function App() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <div id="books">
        <Sbooks/>
        <Nbooks/>
      </div>
      <div id="authors">
        <Authors/>
      </div>
    </main>
  )
}

export default App
