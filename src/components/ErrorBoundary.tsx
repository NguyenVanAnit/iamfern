"use client";

import { getStaticAssetPath } from '@/lib/utils';
import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
      }

      return (
        <div className="h-screen flex items-center justify-center bg-yellow-50">
          <div className="text-center max-w-md mx-4">
            <div className="text-red-500 text-6xl mb-4">📄</div>
            <p className="text-gray-600 mb-4 italic">
              Xin chào, là Xuyến đây {`^.^`} Mọi người click vào đây để xem file trực tiếp nha
            </p>
            <a 
              href={getStaticAssetPath("/portfolio.pdf")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Xem portfolio
            </a>
            <p className="text-red-400 mt-4 text-xs px-4 italic">
              Mọi người có thể liên hệ mình qua SĐT, Zalo và Messenger hoặc tải về thông qua Drive dưới góc ạ
            </p>
            </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
