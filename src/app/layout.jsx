import "./(site)/globals.css";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Photography Portfolio",
  description: "Photography Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
