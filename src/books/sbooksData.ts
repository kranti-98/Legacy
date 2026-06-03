import BidharmiCover from '../assets/CoverPic/Bidharmi.jpeg'
import MaaMati from '../assets/CoverPic/MaaMati.jpeg'
import MatiPrema from '../assets/CoverPic/MatiPrema.jpeg'
import KabitaraSabda from '../assets/CoverPic/KabitaraSabda.jpeg'
import BidharmiPdf from '../assets/books/SuranjanBooks/Bidharmi . PDF.pdf'

export interface Sbook {
  id: string
  title: string
  searchName: string
  description: string
  coverImage: string
  pdfUrl: string
}

export const sbooks: Sbook[] = [
  {
    id: 's-1',
    title: 'ବିଧର୍ମୀ',
    searchName: 'Bidharmi',
    description: 'A heartfelt journey through legacy and hope.',
    coverImage: BidharmiCover,
    pdfUrl: BidharmiPdf,
  },
  {
    id: 's-2',
    title: 'ପଚା  ମାଟି',
    searchName: 'Pacha Mati',
    description: 'A story of bravery in the face of the unknown.',
    coverImage: BidharmiCover,
    pdfUrl: BidharmiPdf,
  },
  {
    id: 's-3',
    title: 'ମା ମାଟି ',
    searchName: 'Ma Mati',
    description: 'Epic adventures from a timeless heritage.',
    coverImage: MaaMati,
    pdfUrl: BidharmiPdf,
  },
  {
    id: 's-4',
    title: 'ମାଟି ପ୍ରେମ',
    searchName: 'Mati Prema',
    description: 'A classic tale of loyalty and destiny.',
    coverImage: MatiPrema,
    pdfUrl: BidharmiPdf,
  },
  {
    id: 's-5',
    title: 'କବିତାର ଶବ୍ଦ ଶବ୍ଦର କବିତା ',
    searchName: 'Kabitara Shabda',
    description: 'An inspiring saga of strength and honor.',
    coverImage: KabitaraSabda,
    pdfUrl: BidharmiPdf,
  },
  {
    id: 's-6',
    title: 'ଓଡ଼ିଆ ଅସ୍ମିତା',
    searchName: 'Odia Asmita',
    description: 'An inspiring saga of strength and honor.',
    coverImage: KabitaraSabda,
    pdfUrl: BidharmiPdf,
  },
]
