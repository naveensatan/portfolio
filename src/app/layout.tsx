import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naveen.dev | Full-Stack Portfolio",
  description:
    "Full-stack developer portfolio showcasing projects, skills, and contact details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
