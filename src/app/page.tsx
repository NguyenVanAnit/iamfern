import { Metadata } from "next";
import fs from "fs/promises"; // Import fs/promises
import path from "path";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import PdfViewer from "@/app/pdf/page";

export const metadata: Metadata = {
  title: "Portfolio | Xuyến Nguyễn",
  description: "Portfolio cá nhân của Xuyến Nguyễn - Content Marketing",
}

// async function PortfolioSection({ delay }: { delay: number }) {
//   await new Promise(resolve => setTimeout(resolve, delay));
  
//   const filePath = path.join(process.cwd(), "public", "portfolio.html");
//   const htmlData = await fs.readFile(filePath, "utf8"); // Bây giờ sẽ hoạt động

//   return (
//     <div dangerouslySetInnerHTML={{ __html: htmlData }} className="w-full h-full" />
//   );
// }

// const PdfViewer = dynamic(() => import("@/app/pdf/page"), {
//   ssr: false,
// });

export default async function Home() {
  // return (
  //   <div className="w-full min-h-screen">
  //     <h1>Streaming SSR Portfolio</h1>
      
  //     <Suspense fallback={<div>Loading section 1...</div>}>
  //       <PortfolioSection delay={500} />
  //     </Suspense>
      
  //     <Suspense fallback={<div>Loading section 2...</div>}>
  //       <PortfolioSection delay={1000} />
  //     </Suspense>
  //   </div>
  // );
  const filePath = path.join(process.cwd(), "public", "portfolio.html");
  const htmlData = await fs.readFile(filePath, "utf8");

  return (
    <div className="w-full min-h-screen">
      {/* <h1 className="text-2xl font-bold p-4">Portfolio</h1> */}
      {/* <div 
        dangerouslySetInnerHTML={{ __html: htmlData }} 
        className="w-full"
        style={{ zoom: '110%' }}
      /> */}
      <PdfViewer />
    </div>
  );
}