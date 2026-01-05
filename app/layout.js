export const metadata = {
  title: 'Locals Coffee - Daily Sudoku',
  description: 'Complete daily Sudoku puzzles for coffee discounts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
