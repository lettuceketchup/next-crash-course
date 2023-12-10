import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Git Showcase",
    description:
        "A showcase of the most popular GitHub repositories, sorted by stars.",
    keywords: "git, github, showcase, popular, stars",
};

import Header from "@/app/components/Header";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <Header />

                <main className="container mx-auto px-4">{children}</main>
            </body>
        </html>
    );
}
