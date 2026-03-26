import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});


export const metadata = {
  title: "Video Editing",
  description: "Video editing service if you went create a video contact me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className}>
      <body className="overflow-x-hidden" suppressHydrationWarning>
          {children}
      </body>
    </html>
  );
}
