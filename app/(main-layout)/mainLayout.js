import React from "react";

const mainLayout = ({ children }) => {
  return (
    <>
      <div className="">hello from main</div>
      {children}
    </>
  );
};

export default mainLayout;
