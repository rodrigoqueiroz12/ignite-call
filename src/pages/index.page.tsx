import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export default function Home() {
  return (
    <main className={roboto.className}>
      <h1>Hello, World!</h1>
    </main>
  )
}
