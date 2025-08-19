// Next
import type { Metadata } from "next"
import { Inter } from "next/font/google"
// CSS
import "./globals.css"
// Shadcn
import { Toaster } from "@/components/ui/sonner"

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

        {children}

        <Toaster />

      </body>
    </html>
  )
}
