import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import AudioPlayer from "./components/AudioPlayer";
import Footer from "./components/Footer";
import AnalyticsTracker from "./components/AnalyticsTracker";
import InstallPrompt from "./components/InstallPrompt";

export const metadata: Metadata = {
  title: "Radio SunriseFM - 102.3 FM Rotterdam & 89.8 FM Den Haag",
  description: "Luister naar Radio SunriseFM via 102.3 FM Rotterdam, 89.8 FM Den Haag, DAB+, Ziggo 862 en KPN 866",
  manifest: "/manifest.json",
  themeColor: "#1e40af",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Sunrise FM",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "https://www.sunrisefm.nl/images/192192.png",
    apple: "https://www.sunrisefm.nl/images/192192.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sunrise FM" />
        <link rel="apple-touch-icon" href="https://www.sunrisefm.nl/images/192192.png" />
        <script src="/register-sw.js" defer></script>
      </head>
      <body>
        <AnalyticsTracker />
        <Header />
        {children}
        <Footer />
        <AudioPlayer />
        <InstallPrompt />
      </body>
    </html>
  );
}
