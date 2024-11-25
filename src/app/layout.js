import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Discover the World with Trxvl: Your Ultimate Travel Guide & Inspiration",
  description: "Explore breathtaking destinations, expert travel tips, and curated experiences with Trxvl. From city guides to hidden gems, Trxvl is your go-to source for unforgettable adventures and travel planning inspiration.",
  keywords: "travel, Trxvl, travel guides, travel inspiration, top destinations, travel tips, hidden gems, adventure travel, budget travel, luxury travel, travel blog, travel planning, world exploration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
