import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NYT Bestseller Explorer",
  description: "Explore the New York Times Bestseller Lists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.logo}>NYT Bestseller Explorer</h1>
            <nav className={styles.nav}>
              <Link href="/" className={styles.navLink}>Home</Link>
              <Link href="/about" className={styles.navLink}>About</Link>
            </nav>
          </header>
          <main className={styles.main}>{children}</main>
          <footer className={styles.footer}>
            <p>  {new Date().getFullYear()} NYT Bestseller Explorer</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
