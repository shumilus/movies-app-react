import React, { ErrorInfo, PropsWithChildren } from 'react';
import './ErrorBoundary.scss';

type ErrorBoundaryProps = PropsWithChildren<{
  componentName: string;
}>;

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error);
    console.error(errorInfo);
  }

  render() {
    const { componentName, children } = this.props;

    if (this.state.hasError) {
      return <h2 className='error-boundary'>Something went wrong with {componentName}!</h2>;
    }

    return children;
  }
}
