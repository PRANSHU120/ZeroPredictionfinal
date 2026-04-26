import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zeroprediction | Trading Made Easy",
  description: "Premium Zeroprediction landing page for SwingNifty trading offering.",
  icons: {
    icon: "/logo.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
