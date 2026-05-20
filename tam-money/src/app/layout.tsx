import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className="bg-[#050816] text-white">
        {children}
      </body>
    </html>
  )
}
