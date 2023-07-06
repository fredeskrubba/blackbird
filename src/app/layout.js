import './globals.css'



export const metadata = {
  title: 'Blackbird',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
