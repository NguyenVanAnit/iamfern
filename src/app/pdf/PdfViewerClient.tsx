"use client";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { getStaticAssetPath } from "@/lib/utils";

// Set PDF.js worker with better mobile compatibility
if (typeof window !== "undefined") {
  // Use UMD build for better Safari mobile compatibility
  // pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

export default function PdfViewerClient() {
  const [numPages, setNumPages] = useState<number>();
  const [widthPage, setWidthPage] = useState<number>(1440);
  const [isClient, setIsClient] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [isSafari, setIsSafari] = useState(false);
  const [useIframeFallback, setUseIframeFallback] = useState(false);
  const [pdfLoadTimeout, setPdfLoadTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsClient(true);
    
    // Detect Safari mobile
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent;
      const isSafariMobile = /iPad|iPhone|iPod/.test(userAgent) && /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
      setIsSafari(isSafariMobile);
    }
    
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
      
      // Set timeout for Safari mobile fallback
      if (isSafari) {
        const timeout = setTimeout(() => {
          if (!numPages && !pdfError) {
            console.log("PDF load timeout, switching to iframe fallback");
            setUseIframeFallback(true);
          }
        }, 10000); // 10 seconds timeout
        setPdfLoadTimeout(timeout);
      }
      
      return () => {
        window.removeEventListener("resize", handleResize);
        if (pdfLoadTimeout) {
          clearTimeout(pdfLoadTimeout);
        }
      };
    }
  }, [isSafari, numPages, pdfError, pdfLoadTimeout]);

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

  if (pdfError) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center max-w-md mx-4">
          <div className="text-red-500 text-6xl mb-4">📄</div>
          <p className="text-gray-600 mb-4 italic">
              Trình duyệt Safari có thể gặp vấn đề với PDF. Mọi người click vào đây để mở file trực tiếp nha
          </p>
          <a 
            href={getStaticAssetPath("/portfolio.pdf")} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Mở file PDF trực tiếp
          </a>
          <p className="text-red-400 mt-4 text-xs px-4 italic">
            Mọi người có thể liên hệ mình qua Zalo hoặc Messenger ở góc màn hình ạ
          </p>
        </div>
      </div>
    );
  }

  if (useIframeFallback) {
    return (
      <div className="h-screen bg-yellow-50">
        <div className="h-full flex flex-col">
          <iframe
            src={getStaticAssetPath("/portfolio.pdf")}
            className="flex-1 w-full border-0"
            title="Portfolio PDF"
            onError={() => {
              setPdfError("Không thể tải PDF với iframe fallback");
              setUseIframeFallback(false);
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-y-scroll bg-yellow-50 pb-4">
      <Document
        file={getStaticAssetPath("/portfolio.pdf")}
        onLoadSuccess={({ numPages }) => {
          setNumPages(numPages);
          setPdfError(null);
          // Clear timeout if PDF loads successfully
          if (pdfLoadTimeout) {
            clearTimeout(pdfLoadTimeout);
            setPdfLoadTimeout(null);
          }
        }}
        onLoadError={(error) => {
          console.error("PDF load error:", error);
          if (isSafari) {
            setUseIframeFallback(true);
          } else {
            setPdfError(error.message || "Không thể tải file PDF");
          }
        }}
        className="flex flex-col items-center gap-4 pt-4 px-4"
        loading={
          <div className="flex items-center justify-center h-64 flex-col">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-400"></div>
            <p className="text-red-400 italic">File hơi nặng xíu...</p>
          </div>
        }
        error={
          <div className="flex items-center justify-center h-64 flex-col">
            <div className="text-red-500 text-4xl mb-2">⚠️</div>
            <p className="text-red-500 italic">Lỗi tải file PDF</p>
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
            className="shadow-xl rounded-lg"
            onLoadError={(error) => {
              console.error(`Page ${i + 1} load error:`, error);
            }}
            loading={
              <div className="flex items-center justify-center h-64 w-full bg-yellow-50 rounded-lg">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-400"></div>
              </div>
            }
          />
        ))}
      </Document>
    </div>
  );
}
