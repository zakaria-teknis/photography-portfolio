import "./(site)/globals.css";

export const metadata = {
  title: "Agadir Productions",
  description: "Agadir Productions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
