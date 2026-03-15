import React, { useState, useEffect } from "react";
import "../styles/retroloader.scss";

export const RetroLoader = ({ message = "Loading..." }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate a fake progress bar purely for aesthetic retro charm
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0; // Loop the progress bar slightly to look like it's trying
        }
        // Randomize the progress bumps for a more "authentic" downloading feel
        const bump = Math.floor(Math.random() * 20) + 5;
        return Math.min(prev + bump, 100);
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  // Generate 10 blocks for the progress bar
  const blocks = Array.from({ length: 10 }, (_, i) => {
    const isFilled = progress >= (i + 1) * 10;
    return <div key={i} className={`progress-block ${isFilled ? "filled" : ""}`} />;
  });

  return (
    <div className="retro-loader-container">
      <div className="window-content window-content__static">
        <div className="window-content-container">
          <div className="loader-inner">
            <h3 className="loader-message">{message}</h3>
            <div className="progress-bar-container">
              {blocks}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
