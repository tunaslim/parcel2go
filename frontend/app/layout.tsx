import Head from 'next/head';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Parcel2Go Integration',
  description: 'Get shipping quotes and labels easily',
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Optional: Tailwind Configuration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      clifford: '#da373d',
                    }
                  }
                }
              }
            `,
          }}
        />
      </Head>
    </>
    <html lang="en">
      <body className="font-sans p-6 bg-gray-50 min-h-screen">
        <header className="mb-6 border-b pb-4">
          <h1 className="text-3xl font-bold text-center">Parcel2Go Integration</h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-200 p-4">Quote 1</div>
          <div className="bg-green-200 p-4">Quote 2</div>
          <div className="bg-yellow-200 p-4">Quote 3</div>
        </div>
        <main className="p-6 w-full mx-auto">{children}</main>
      </body>
    </html>
  );
}
