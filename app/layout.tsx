
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/navbar";
import Footer from "@/components/footer";
import BotpressChat from "@/components/BotpressChat";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "CSWD(MIET) ",
  description: "Official site for CSWD events, hackathons, and more. Register, participate, and stay updated.",
  keywords: ["CSWD", "Hackathon", "Events", "Registration", "Coding", "Tech Fest", "MIET"],
  authors: [{ name: "Nikhil Pundir", url: "https://cswd-olive.vercel.app" }],
  creator: "Nikhil Pundir",
  metadataBase: new URL("https://cswd-olive.vercel.app"),
  openGraph: {
    title: "CSWD(MIET) ",
    description: "Join the ultimate student tech showdown hosted by CSWD MIET.",
    url: "https://cswd-olive.vercel.app",
    siteName: "CSWD(MIET)",
    images: [
      {
        url: "/cswd_banner.png", // Upload the generated image here
        width: 1200,
        height: 630,
        alt: "CSWD(MIET) 2025",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSWD(MIET) 2025",
    description: "Join the ultimate student tech showdown hosted by CSWD(MIET).",
    images: ["/cswd_banner.png"],
    creator: "@CSWDMIET",
  },
  icons: {
    icon: "/logo.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarDemo />

        {children}
        <Analytics />
        <SpeedInsights />

        {/* Chatbot */}
        <BotpressChat />
        <Footer />
      </body>
    </html>
  );
}
