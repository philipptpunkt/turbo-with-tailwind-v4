import "./globals.css"
import "@turbo-with-tailwind-v4/design-system/styles.css"
import "@turbo-with-tailwind-v4/ui/styles.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Turborepo with Tailwind Version 4",
  description: "Updated Turborepo with Tailwind Version 4",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
