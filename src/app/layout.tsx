import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/Navbar";

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
        <Providers>
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:z-10 focus:p-4 focus:bg-white focus:text-black"
          >
            Skip to main content
          </a>
          <header className="p-4 bg-gray-800 text-white">
            <Navbar />
          </header>
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <footer className="p-4 bg-gray-800 text-white text-center">
            <div className="max-w-7xl mx-auto">
              <p>BlindTab - Music for Low Vision Users</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
