import React from "react";

const singlePost = ({ params }) => {
  const [year, id] = params.segments || [];
  console.log(Date());
  return (
    <div>
      dynamic Post {year || new Date().getFullYear()} of {id || 1}
    </div>
  );
};

export default singlePost;
