import { Metadata } from "next";
import "./globals.css";
import { Poppins, Raleway } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nolan Chan | Portfolio",
  description: "A portfolio website for Nolan Chan, a junior software developer.",
};

/*
export function generateMetadata(): Metadata {
  return {
    title: "Nolan Chan | Portfolio",
    description:
      "A portfolio website for Nolan Chan, a junior software developer.",
  };
}
*/

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
