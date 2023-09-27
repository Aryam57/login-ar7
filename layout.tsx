
import Navbar from "./components/Navbar"
import { Inter } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'book library',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
      <AuthContextProvider>
        <Navbar/>{children}
      </AuthContextProvider>
      </body>
    </html>
  )
}