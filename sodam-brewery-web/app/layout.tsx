import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "소담 양조장 · SODAM BREWERY",
  description: "웃음으로 시작해서 대화로 잇고, 술 한 잔으로 완성되는 순간. 소담 양조장의 삼양주를 만나보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
