import "styles/tailwind.css"
import "app/globals.css"

import { Navbar } from 'components/NavMenu/Navbar'
import { ThemeProvider } from "components/theme-provider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body><ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
      >
        <Navbar />
            {children}
          </ThemeProvider></body>
    </html>
  )
}
