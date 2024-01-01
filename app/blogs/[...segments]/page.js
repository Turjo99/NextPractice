import { log } from "console";
import React from "react";

const singleBlog = ({ params }) => {
  console.log(params);
  const [year, month] = params.segments;
  return (
    <div>
      Blog from {month}, {year}
    </div>
  );
};

export default singleBlog;
