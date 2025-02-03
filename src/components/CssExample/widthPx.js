import React from "react";

const WidthPx = () => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "80%" }}>
      {/* Parent container with 80% width */}
      <div
        style={{
          height: "50px", // Fixed height in pixels
          width: "100%",  // Responsive width in percentage
          backgroundColor: "#4CAF50",
          textAlign: "center",
          color: "white",
          lineHeight: "50px", // Center the text vertically
        }}
      >
        I am 50px tall and 100% wide!
      </div>
    </div>
  );
};

export default WidthPx;
