import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { DirProvider } from "@/lib/dir-context"
import "../src/globals.css"

export const metadata: Metadata = {
  title: "sycn",
  description: "Syrian Visual Identity Component Library",
  icons: { icon: "/emblem.svg" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <DirProvider>
            {children}
          </DirProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
