import React from "react";

const singlePost = ({ params }) => {
  const [year, id] = params.segments || [];
  console.log(params.segments);
  return (
    <div>
      dynamic Post {year} of {id}
    </div>
  );
};

export default singlePost;
