
import Footer from "./_components/Footer";
import Header from "./_components/Head";
import "./globals.css";

import { Merienda } from "next/font/google";
const merienda = Merienda({
  subsets: ['latin'],
})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={merienda.className}>
      <body className="overflow-x-hidden" >

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
