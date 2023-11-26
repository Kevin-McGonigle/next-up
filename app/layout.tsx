import { cn } from "@/lib/utils"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Fira_Code, Outfit } from "next/font/google"
import type { ReactElement, ReactNode } from "react"

const code = Fira_Code({
  subsets: ["latin"],
  variable: "--font-code",
})

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Next Up",
  description: "A template for building Next.js applications.",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased bg-background font-sans min-h-screen",
          code.variable,
          sans.variable,
        )}
      >
        <main className="flex flex-col items-center min-h-screen py-16">
          <div className="m-auto w-1/2">{children}</div>
        </main>
      </body>
    </html>
  )
}
