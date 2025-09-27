import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | RAH Maler",
    default: "Bizflow ",
  },
  description: "A business management system.",
  metadataBase: new URL("https://admin.rahmaler.dk"),
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/favicon_io/apple-touch-icon.png" }],
  },
  manifest: "/favicon_io/site.webmanifest", // ✅ auto-includes site.webmanifest
  openGraph: {
    title: "Bizflow",
    description: "A business management system.",
    url: "https://admin.rahmaler.dk",
    siteName: "Bizflow",
    images: [
      {
        url: "https://admin.rahmaler.dk/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bizflow",
      },
    ],
    locale: "da_DK",
    type: "website",
  },
 
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="da">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
