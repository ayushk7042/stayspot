import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log error to an external service here
    console.error("ErrorBoundary caught error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" style={{ padding: 20, textAlign: "center" }}>
          <h2>Oops! Something went wrong loading this article.</h2>
          <p>{this.state.error?.message || "Please try again later."}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
