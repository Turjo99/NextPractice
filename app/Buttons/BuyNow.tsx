"use client";
import React from "react";

const BuyNow = () => {
  return (
    <button
      onClick={() => {
        console.log("hello");
      }}
      className="btn btn-primary"
    >
      Buy Now
    </button>
  );
};

export default BuyNow;
