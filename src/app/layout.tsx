
import "./globals.css";
import {Figtree} from "next/font/google"
import localFont from "next/font/local"
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const figtree = Figtree({
  display:"swap",
  subsets: ["latin"],
  weight: ['300', '400' , '500' , '600' , '700' , '800' , '900'],
  variable: '--font-figtree'
});

const yekan = localFont({
  src: [
    {
      path: "../../public/fonts/yekanbakh/YEKAN-BAKH-EN-02-THIN.ttf",
      weight:"100",
      style: "normal"
    },
    {
      path: "../../public/fonts/yekanbakh/YEKAN-BAKH-EN-03-LIGHT.ttf",
      weight:"200",
      style: "normal"
    },
    {
      path: "../../public/fonts/yekanbakh/YEKANBAKHFANUM-REGULAR.ttf",
      weight:"400",
      style: "normal"
    },
    {
      path: "../../public/fonts/yekanbakh/YEKAN-BAKH-EN-05-MEDIUM.ttf",
      weight:"500",
      style: "normal"
    },
    {
      path: "../../public/fonts/yekanbakh/YEKANBAKHFANUM-BOLD.ttf",
      weight:"700",
      style: "normal"
    },
    {
      path: "../../public/fonts/yekanbakh/YEKAN-BAKH-EN-07-HEAVY.ttf",
      weight:"800",
      style: "normal"
    },
    {
      path: "../../public/fonts/yekanbakh/YEKANBAKHFANUM-EXTRABLACK.ttf",
      weight:"900",
      style: "normal"
    },

  ],
  variable:"--font-yekanbakh"
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      dir="rtl"
      className={`dark h-full antialiased ${figtree.variable} ${yekan.variable}`}
    >
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] justify-center items-center dark:bg-base-100 dark:text-base-content">
      <Header/>
      <div className="flex-1 flex">{children}</div>
      <Footer/>
      </body>
    </html>
  );
}
