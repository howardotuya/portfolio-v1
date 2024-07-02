import { Inter, Cutive_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cutive = Cutive_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cutive",
});

export const metadata = {
  title: "Howard Otuya",
  description: "By Raboni Himself.",
};

export const viewport = {
  themeColor: "#F1EDE1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cutive.variable}`}>{children}</body>
    </html>
  );
}
