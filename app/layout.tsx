import { Poppins, Raleway } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import "./globals.css";

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
  description: "A software developer's portfolio website that I built for myself",
  generator: "Next.js",
  applicationName: "Nolan Chan's portfolio website",
  referrer: "no-referrer",
  keywords: ["software", "developer", "portfolio"],
  authors: [{ name: "Nolan Chan" }],
  creator: "Nolan Chan",
  openGraph: {
    type: "website",
    title: "Nolan Chan | Portfolio",
    description: "A software developer's portfolio website that I built for myself",
    url: "https://www.nolancn.com",
    siteName: "Nolan Chan's portfolio website",
  },
  twitter: {
    card: "summary",
    title: "Nolan Chan | Portfolio",
    description: "A software developer's portfolio website that I built for myself",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${raleway.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
