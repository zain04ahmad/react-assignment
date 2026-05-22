import React, { useState, useEffect } from 'react';

// 1. We must define the child component that appears later
const DelayedComponent = () => {
  return (
    <div style={{ padding: '15px', backgroundColor: '#e2e8f0', borderRadius: '5px', marginTop: '10px' }}>
      🎉 Surprise! I appeared after a delay.
    </div>
  );
};

const ParentComponent = () => {
  // 2. We must define the state variable and its setter
  const [isVisible, setIsVisible] = useState(false);

  // 3. We must trigger the timer when the component loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Timed Component Demonstration</h2>
      
      {isVisible ? (
        <DelayedComponent />
      ) : (
        <p>Waiting patiently for 3 seconds...</p>
      )}
    </div>
  );
};

export default ParentComponent;