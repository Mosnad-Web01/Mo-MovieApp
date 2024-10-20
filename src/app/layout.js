import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Providers from "./Providers";
import SessionWrapper from "../components/SessionWrapper";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb clone",
  description: "This is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </SessionWrapper>
  );
}
