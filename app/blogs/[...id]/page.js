import React from "react";

const singleBlog = ({ params }) => {
  console.log(params.id);
  return <div>single Blog {params.id}</div>;
};

export default singleBlog;
