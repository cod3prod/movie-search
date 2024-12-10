import type { Metadata } from "next";
import "@/styles/index.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Movie Search - 영화 검색 서비스",
  description: "OMDB API를 활용한 영화 검색 및 즐겨찾기 서비스입니다.",
  keywords: ["영화", "검색", "OMDB", "Next.js", "React"],
  authors: [{ name: "cod3prod" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
