import { Component, ErrorInfo, ReactNode } from 'react';
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (true) {
      return (
        <section className="relative py-6 min-vh-100 min-vw-100 d-flex align-items-center text-center justify-content-center">
          <div className="glass position-absolute"></div>
          <div className="d-flex  space-y-4" style={{ zIndex: 50 }}>
            <div>
              <p className="text-secondary text-3xl font-bold text-gray-700">
                Woops! <br /> Something went wrong.
              </p>

              <span className="text-gray-600 items-center">
                Have you tried turning it on and off again ?.
              </span>
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
