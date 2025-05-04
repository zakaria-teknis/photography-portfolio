import { Outfit } from "next/font/google";
import NavBar from "./components/NavBar";
import { SanityLive } from "@/sanity/lib/live";
import Footer from "./components/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export default function SiteLayout({ children }) {
  return (
    <div
      className={`${outfit.variable} font-sans antialiased bg-zinc-100 text-zinc-950`}>
      <NavBar />
      <main className="max-w-7xl mx-auto px-5 sm:px-10 text-zinc-50">
        {children}
      </main>
      <SanityLive />
      <Footer />
    </div>
  );
}
