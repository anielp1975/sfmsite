import type { Metadata } from "next";
import "./globals.css";
import AudioPlayer from "./components/AudioPlayer";

export const metadata: Metadata = {
  title: "SFM Radio",
  description: "Your favorite radio station",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <AudioPlayer />
      </body>
    </html>
  );
}
