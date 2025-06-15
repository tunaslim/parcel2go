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

export const metadata: Metadata = {
  title: 'Parcel2Go Integration',
  description: 'Get shipping quotes and labels easily',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans p-6 bg-gray-50 min-h-screen`}>
        <header className="mb-6 border-b pb-4">
          <h1 className="text-3xl font-bold text-center">Parcel2Go Integration</h1>
        </header>
        <main className="max-w-full mx-auto">{children}</main>
      </body>
    </html>
  );
}
