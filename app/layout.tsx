import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ScrollButton from "./components/shared/scroll-btn";
import NavBar from "./components/shared/navbar";
import Footer from "./components/shared/footer";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countries DB",
  description: "A simple app to display country information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={notoSans.className}>
          <main className="flex flex-col min-h-dvh md:min-h-screen">
            <NavBar />
            <div className="px-4 md:container mt-10 flex-grow">{children}</div>
            <ScrollButton />
            <Footer />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
