import { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  moduleName?: string;
  onError?: (error: Error, info: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.props.onError?.(error, info);
    if (import.meta.env.DEV) {
      console.error(
        `[ErrorBoundary] ${this.props.moduleName ?? 'App'} crashed:`,
        error,
        info.componentStack
      );
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    const { moduleName = 'This page' } = this.props;

    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="mb-6">
            <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <h1 className="text-white text-xl font-semibold mb-2">
              {moduleName} encountered an error
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Something went wrong while loading this section. You can try again or go back to the home page.
            </p>
            {import.meta.env.DEV && this.state.error && (
              <pre className="mt-4 text-left text-xs text-red-300 bg-red-950/30 border border-red-900/40 rounded-lg p-3 overflow-auto max-h-32">
                {this.state.error.message}
              </pre>
            )}
          </div>
          <div className="flex gap-3 justify-center">
            <button
              onClick={this.handleReset}
              className="px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-colors"
            >
              Try again
            </button>
            <a
              href="/"
              className="px-4 py-2 text-sm font-medium text-black bg-white hover:bg-gray-100 rounded-lg transition-colors"
            >
              Go home
            </a>
          </div>
        </div>
      </div>
    );
  }
}
