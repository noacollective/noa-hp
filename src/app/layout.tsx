import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "noa - 人間・テクノロジー・自然の共生",
  description: "未来の調和した社会を創造する活動。人間・テクノロジー・自然の共生を目指し、遊び・経済・計算技術の3領域で革新的なプロジェクトを推進します。",
  keywords: ["コンヴィヴィアリティ", "共生", "テクノロジー", "未来社会", "持続可能性"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSerifJP.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
