import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({ subsets: ["latin"] });

export const metadata = {
  title: "ISIN LIVE",
  description: "ISIN LIVE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${karla.className} antialiased`}>{children}</body>
    </html>
  );
}
