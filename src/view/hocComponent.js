import React, { useEffect } from 'react';

// Higher-Order Component
function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`);
      return () => {
        console.log(`${WrappedComponent.name} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
}

// Example Wrapped Component
function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

// Using the HOC
const HelloWorldWithLogger = withLogger(HelloWorld);

// Usage in App component
function HocComponent() {
  return <HelloWorldWithLogger />;
}

export default HocComponent;
