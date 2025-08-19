// Next
import type { Metadata } from "next"
import { Inter } from "next/font/google"
// CSS
import "./globals.css"
// Components
import { Header } from "./components/Header"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Webimob Docs",
  description: "Documentação do Sistema Webimob",
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className}`}>

        <Header />
        <main className={'p-3'}>
          {children}
        </main>
        
      </body>
    </html>
  );
}
