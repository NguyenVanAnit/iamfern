"use client";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { getStaticAssetPath } from "@/lib/utils";

// Set PDF.js worker with better mobile compatibility
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

export default function PdfViewerClient() {
  const [numPages, setNumPages] = useState<number>();
  const [widthPage, setWidthPage] = useState<number>(1440);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const getWidthWindow = () => {
      if (typeof window !== "undefined") {
        return window.innerWidth;
      }
      return 1440;
    };

    const handleResize = () => {
      const width = getWidthWindow();
      const newWidthPage = width && width < 1440 ? width - 32 : 1440;
      setWidthPage(newWidthPage);
    };

    // Set initial width
    handleResize();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  // Show loading state until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-400 mx-auto mb-4"></div>
          <p className="text-red-400 italic">File hơi nặng xíu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-y-scroll bg-yellow-50">
      <Document
        file={getStaticAssetPath("/portfolio.pdf")}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        onLoadError={(error) => {
          console.error("PDF load error:", error);
        }}
        className="flex flex-col items-center gap-4 pt-4 px-4"
        loading={
          <div className="flex items-center justify-center h-64 flex-col">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-400"></div>
            <p className="text-red-400 italic">File hơi nặng xíu...</p>
          </div>
        }
      >
        {Array.from(new Array(numPages || 0), (_, i) => (
          <Page
            key={i}
            pageNumber={i + 1}
            width={widthPage}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="shadow-lg rounded-lg"
          />
        ))}
      </Document>
    </div>
  );
}
