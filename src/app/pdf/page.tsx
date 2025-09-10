"use client";

import dynamic from "next/dynamic";
import ErrorBoundary from "@/components/ErrorBoundary";

const PdfViewerClient = dynamic(() => import("./PdfViewerClient"), {
  ssr: false,
  loading: () => (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-400 mx-auto mb-4"></div>
        <p className="text-red-400 italic">Đang tải, đợi xíu ạ...</p>
      </div>
    </div>
  ),
});

export default function PdfViewer() {
  return (
    <ErrorBoundary>
      <PdfViewerClient />
    </ErrorBoundary>
  );
}
