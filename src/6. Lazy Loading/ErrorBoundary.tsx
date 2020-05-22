import React, { Component } from "react";

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error);
    console.log(errorInfo);
    this.setState(() => {
      return { hasError: true };
    });
  }

  render() {
    if (this.state.hasError) {
      return <div>We have caught the error. Don't worry we are on it!</div>;
    }
    return <div>{this.props.children}</div>;
  }
}
