import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title:"Cars Hub Anjor",
  description:"Discover the best cars in the world.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="relative">
        <Navbar />
          {children}
          <Footer />
        </body>
    </html>
  )
}