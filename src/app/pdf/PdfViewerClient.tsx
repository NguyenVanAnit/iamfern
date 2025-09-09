"use client";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PdfViewerClient() {
  const [numPages, setNumPages] = useState<number>();
  const [widthPage, setWidthPage] = useState<number>(1440);

  useEffect(() => {
    const getWidthWindow = () => {
      if (typeof window !== "undefined") {
        return window.innerWidth;
      }
    };

    const handleResize = () => {
      const width = getWidthWindow();
      const widthPage = width && width < 1440 ? width : 1440;
      setWidthPage(widthPage);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-screen overflow-y-scroll bg-red-200">
      <Document
        file="/portfolio.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        className="flex flex-col items-center gap-4 pt-4"
      >
        {Array.from(new Array(numPages || 0), (_, i) => (
          <Page
            key={i}
            pageNumber={i + 1}
            width={widthPage}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            // className="border border-gray-600"
          />
        ))}
      </Document>
    </div>
  );
}
