import type React from "react"
import type { Metadata } from "next"
import { Tajawal } from "next/font/google"
import "../styles/globals.css"
import Navbar from "@/components/navbar/navbar"

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
})

export const metadata: Metadata = {
  title: "راحتك - منصة التجارة الزراعية",
  description: "منصة رائدة لتجارة البذور، المنتجات الزراعية، والحيوانية والآليات الحديثة في السودان",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className={`${tajawal.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
