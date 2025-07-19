import React, { useEffect, useRef } from "react";

const AnimatedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    const columns = Math.floor(window.innerWidth / 25);
    const matrixElements: HTMLElement[] = [];

    // Create matrix code elements
    for (let i = 0; i < columns; i++) {
      const element = document.createElement("div");
      element.className = "matrix-code";
      element.style.left = `${i * 25}px`;
      element.style.animationDuration = `${Math.random() * 8 + 5}s`;
      element.style.animationDelay = `${Math.random() * 5}s`;

      // Random matrix code
      const codeLength = Math.floor(Math.random() * 30) + 15;
      let code = "";
      for (let j = 0; j < codeLength; j++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
        if (j % 5 === 0) code += "\n"; // Add line breaks for better visual
      }
      element.textContent = code;

      container.appendChild(element);
      matrixElements.push(element);
    }

    // Handle window resize
    const handleResize = () => {
      const newColumns = Math.floor(window.innerWidth / 25);
      if (newColumns !== matrixElements.length) {
        // Clear existing elements
        matrixElements.forEach((element) => {
          if (container.contains(element)) {
            container.removeChild(element);
          }
        });
        matrixElements.length = 0;

        // Create new elements for new column count
        for (let i = 0; i < newColumns; i++) {
          const element = document.createElement("div");
          element.className = "matrix-code";
          element.style.left = `${i * 25}px`;
          element.style.animationDuration = `${Math.random() * 8 + 5}s`;
          element.style.animationDelay = `${Math.random() * 5}s`;

          const codeLength = Math.floor(Math.random() * 30) + 15;
          let code = "";
          for (let j = 0; j < codeLength; j++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
            if (j % 5 === 0) code += "\n";
          }
          element.textContent = code;

          container.appendChild(element);
          matrixElements.push(element);
        }
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      matrixElements.forEach((element) => {
        if (container.contains(element)) {
          container.removeChild(element);
        }
      });
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="animated-background" />
      <div className="cyber-grid" />
    </>
  );
};

export default AnimatedBackground;