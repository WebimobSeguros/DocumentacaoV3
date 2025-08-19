// Components
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

type Props = {
  children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <>
      <Header />

      <main className={'p-6'}>
        {children}
      </main>

      <Footer />
    </>
  )
}
