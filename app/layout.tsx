import type { Metadata } from "next";
import "./globals.css";
import WhatsappFloat from "@/components/WhatsappFlot";

export const metadata: Metadata = {
  title: "Zeroprediction | Trading Made Easy",
  description: "Premium Zeroprediction landing page for SwingNifty trading offering.",
  icons: {
    icon: "/logo-zo-only.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}<WhatsappFloat /></body>
    </html>
  );
}




