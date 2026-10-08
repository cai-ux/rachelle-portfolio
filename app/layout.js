import "./globals.css";

export const metadata = {
  title: "Rachelle Raros | Programmer Profile",
  description: "Personal programmer portfolio of Rachelle Raros.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}