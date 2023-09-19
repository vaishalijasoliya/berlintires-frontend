import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "",
  description:
    "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
              <Header />
              <main>{children}</main>
              <Footer />
      </body>
    </html>
  );
}
