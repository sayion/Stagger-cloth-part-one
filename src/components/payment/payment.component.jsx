import React from "react";

function MyComponent() {
  const url = "https://buy.stripe.com/test_eVa4im0pyfXpfC0145";

  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button
          style={{
            fontSize: "35px",
            marginBottom: "90px",
            width: "120%",
            color: "black",
            border: "none",
            borderBottom: "2px solid black",
            borderRadius: "4px",
            background:
              "  linear-gradient(90deg, rgba(255, 0, 0, 1) 0%, rgba(255, 255, 0, 1) 100%)",
          }}
        >
          Pay Now
        </button>
      </a>
    </div>
  );
}

export default MyComponent;
