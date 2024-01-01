"use client";
import { useParams } from "next/navigation";
import React from "react";

const singleBlog = () => {
  // console.log(params);
  const params2 = useParams();
  console.log(params2);
  const [year, month] = params2.segments;
  return (
    <div>
      Blog from {month}, {year}
    </div>
  );
};

export default singleBlog;
