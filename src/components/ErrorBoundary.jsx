import React from 'react';
import * as Sentry from '@sentry/react';
import { RefreshCw, Home, AlertCircle } from 'lucide-react';
import { IllustrationRuntimeError } from './illustrations';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    // Report exception to Sentry
    try {
      Sentry.captureException(error, { extra: errorInfo });
    } catch {
      // ignore
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  handleHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-stone-50 dark:bg-[#111] text-brand-dark dark:text-[#eee] flex items-center justify-center p-6 select-none font-sans">
          <div className="max-w-lg w-full bg-white/80 dark:bg-[#181818]/90 backdrop-blur-xl border border-stone-200 dark:border-[#2a2a2a] rounded-3xl p-8 md:p-10 shadow-2xl text-center space-y-6">
            
            {/* Status Illustration (Icons8 Notion Line Art, recolored to match this chip) */}
            <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-2xl bg-stone-100 dark:bg-[#1c1c1c] border border-stone-200 dark:border-[#2a2a2a] shadow-sm p-3.5">
              <IllustrationRuntimeError className="w-full [--ill-line:#0A0A0A] [--ill-bg:#f5f5f4] dark:[--ill-line:#EDEDED] dark:[--ill-bg:#1c1c1c]" />
            </div>

            {/* Error Message */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-red-600 dark:text-red-400 text-xs font-mono font-semibold">
                <AlertCircle size={13} />
                <span>Runtime Exception</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark dark:text-white">
                Something went sideways
              </h2>
              <p className="text-sm text-stone-600 dark:text-[#999] leading-relaxed">
                Something broke on my end — it&apos;s been logged and I&apos;ll take a look. Reloading usually fixes it.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleReload}
                className="inline-flex items-center gap-2 bg-brand-dark dark:bg-[#eee] text-white dark:text-[#111] px-5 py-2.5 rounded-lg text-sm font-semibold tracking-tight hover:bg-brand dark:hover:bg-brand-lime transition-all duration-200 shadow-md active:scale-95"
              >
                <RefreshCw size={14} />
                Reload Page
              </button>
              <button
                onClick={this.handleHome}
                className="inline-flex items-center gap-2 bg-stone-100 dark:bg-[#222] text-stone-800 dark:text-[#ccc] border border-stone-200 dark:border-[#333] px-5 py-2.5 rounded-lg text-sm font-medium tracking-tight hover:bg-stone-200 dark:hover:bg-[#2a2a2a] transition-all duration-200 active:scale-95"
              >
                <Home size={14} />
                Return Home
              </button>
            </div>

            {/* Collapsible Error details for debugging */}
            {this.state.error && (
              <details className="text-left mt-4 pt-4 border-t border-stone-100 dark:border-[#262626]">
                <summary className="text-[11px] font-mono text-stone-400 dark:text-[#666] cursor-pointer hover:text-stone-600 dark:hover:text-[#aaa]">
                  Technical Details
                </summary>
                <pre className="mt-2 p-3 bg-stone-100 dark:bg-[#121212] rounded-lg text-[11px] font-mono text-red-600 dark:text-red-400 overflow-x-auto max-h-36">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
