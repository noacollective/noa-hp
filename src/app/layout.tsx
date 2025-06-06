import type { Metadata } from "next";
import { Zen_Old_Mincho } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const zenOldMincho = Zen_Old_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-sans",
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
      <body className={`${zenOldMincho.variable} font-sans antialiased`}>
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
