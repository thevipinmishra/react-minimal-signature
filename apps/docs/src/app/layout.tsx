import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Minimal Signature (deprecated)",
  description:
    "Deprecated. This package is no longer maintained. Use SignetPad instead: https://www.npmjs.com/package/signetpad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <aside
          aria-label="Deprecation notice"
          className="border-b border-amber-300 bg-amber-100"
        >
          <p className="mx-auto max-w-4xl px-8 py-3 text-sm text-amber-950">
            <strong className="font-semibold">Deprecated.</strong> This package
            is no longer maintained.{" "}
            <a
              href="https://www.npmjs.com/package/signetpad"
              className="font-medium underline underline-offset-2 hover:text-amber-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-100"
            >
              Use SignetPad on npm
            </a>
            .
          </p>
        </aside>
        {children}
      </body>
    </html>
  );
}
