import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlindTab - Music for Low Vision Users",
  description: "A music application designed for users with low vision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:z-10 focus:p-4 focus:bg-white focus:text-black"
        >
          Skip to main content
        </a>
        <header className="p-4 bg-gray-800 text-white">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">BlindTab</a>
            <div className="flex gap-4">
              <a href="/songs" className="text-xl hover:underline">Songs</a>
              <a href="/tags" className="text-xl hover:underline">Tags</a>
            </div>
          </nav>
        </header>
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <footer className="p-4 bg-gray-800 text-white text-center">
          <div className="max-w-7xl mx-auto">
            <p>BlindTab - Music for Low Vision Users</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
