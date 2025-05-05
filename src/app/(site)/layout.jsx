import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./globals.css";

export default function SiteLayout({ children }) {
  return (
    <div className="bg-zinc-100 text-zinc-950">
      <NavBar />
      <main className="max-w-7xl mx-auto px-5 sm:px-10 text-zinc-50">
        {children}
      </main>
      <Footer />
    </div>
  );
}
