import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import AudioPlayer from "./components/AudioPlayer";
import Footer from "./components/Footer";
import AnalyticsTracker from "./components/AnalyticsTracker";

export const metadata: Metadata = {
  title: "Radio SunriseFM - 102.3 FM Rotterdam & 89.8 FM Den Haag",
  description: "Luister naar Radio SunriseFM via 102.3 FM Rotterdam, 89.8 FM Den Haag, DAB+, Ziggo 862 en KPN 866",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>
        <AnalyticsTracker />
        <Header />
        {children}
        <Footer />
        <AudioPlayer />
      </body>
    </html>
  );
}
