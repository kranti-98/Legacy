import React from 'react'
import SuranjanPic from '../assets/SuranjanPandaPic.jpeg'
import NabaghanPic from '../assets/NabaghanPandaPic.jpeg'

const authors = [
  {
    name: 'Suranjan Panda',
    role: 'Author',
    image: SuranjanPic,
  },
  {
    name: 'Nabaghan Panda',
    role: 'Author',
    image: NabaghanPic,
  },
]

const Authors: React.FC = () => {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 border-b-2 border-slate-600 pb-6 text-center">
          <h2 className="text-4xl font-bold text-white">About the Authors</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {authors.map((author) => (
            <div key={author.name} className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
              <div className="h-40 w-40 flex-shrink-0 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={author.image}
                  alt={author.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white">{author.name}</h3>
                <p className="text-lg text-slate-300">{author.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Authors
