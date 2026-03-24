import { Bai_Jamjuree, Pridi } from "next/font/google";
import "./globals.css";

const pridi = Pridi({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata = {
  title: "Watcharee CV Portfolio",
  description:
    "Bilingual portfolio and CV website for Watcharee Khambun, focused on admin, customer support, and sales coordination roles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={`${pridi.variable} ${baiJamjuree.variable}`}>{children}</body>
    </html>
  );
}
