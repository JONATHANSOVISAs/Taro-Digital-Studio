import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
});

export const metadata = {
  title: "Taro Digital Studio | Simple Websites, Real Impact",
  description:
    "Taro Digital Studio membantu bisnis dan organisasi membangun website modern, cepat, dan SEO friendly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={poppins.className}> {children} </body>
    </html>
  );
}