import './globals.css'
import { Space_Grotesk, Roboto_Mono, Orbitron } from 'next/font/google'
import { ThemeProvider } from './contexts/ThemeContext'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

export const metadata = {
  title: 'RetinaAI',
  description: 'Predicting decisions through eye movement analysis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${robotoMono.variable} ${orbitron.variable}`}>
      <body className={spaceGrotesk.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

