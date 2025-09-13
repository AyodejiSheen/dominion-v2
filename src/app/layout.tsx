import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import Navbar from "@/components/elements/Navbar";
import { MantineProvider } from "@mantine/core";
import { canelaTrail } from "@/lib/fonts";
import Footer from "@/components/elements/footer";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dominion Digital NG",
  description: "Dominion Digital NG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${instrumentSans.className} ${canelaTrail.variable}`}
      >
        <MantineProvider>
          <Navbar />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
