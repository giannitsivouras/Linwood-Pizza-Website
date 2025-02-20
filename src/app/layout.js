import Navbar from "@/app/comps/Navbar"; 
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";

// Load Google Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "My Restaurant",
  description: "Best food in town!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetBrainsMono.variable} pb-16`}> {/* Prevents content overlap */}
        {children}  
        <Navbar /> {/* Navbar is now fixed at the bottom */}
      </body>
    </html>
  );
}