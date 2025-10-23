import './globals.css'

export const metadata = {
  title: 'NIOS Online Exam Permission Guide',
  description: 'Complete regulatory & operational guide for NIOS online exam permission',
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
