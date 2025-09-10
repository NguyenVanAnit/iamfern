import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import MessengerChatButton from "@/components/plugin/MessengerWidget";
// import ZaloChatWidget from "@/components/plugin/ZaloChatWidget";
import ZaloWidgetButton from "@/components/plugin/ZaloWidget";
import PhoneWidget from "@/components/plugin/PhoneWidget";
import DriveButton from "@/components/plugin/DriveWidget";
// import HeaderImageLayout from "@/components/molecules/HeaderImageLayout";

export const metadata: Metadata = {
  title: {
    template: "%s | Xuyến Nguyễn",
    default: "Portfolio | Xuyến Nguyễn",
    absolute: "Portfolio | Xuyến Nguyễn",
  },
  description: "Portfolio cá nhân của Xuyến Nguyễn - Content Marketing",
  // icons: {
  //   icon: "/logo.svg",
  // }
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="index, follow"></meta>
        <meta
          httpEquiv="Content-Security-Policy"
          content="img-src https: data:; upgrade-insecure-requests"
        />
      </Head>
      <body className={`${inter.className} relative`}>
        <div className="fixed bottom-4 right-4 z-50">
          <DriveButton />
          <PhoneWidget />
          <MessengerChatButton />
          <ZaloWidgetButton />
				</div>
      
        {children}
      </body>
    </html>
  );
}
