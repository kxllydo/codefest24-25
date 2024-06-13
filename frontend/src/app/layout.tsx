import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Adopteam",
    description: "Find loving homes for children in need through the power of AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Theme accentColor="blue" panelBackground="translucent">
                    {children}
                </Theme>
            </body>
        </html>
    );
}
