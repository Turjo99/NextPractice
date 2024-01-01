"use client";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const singleBlog = () => {
  // console.log(params);
  const params2 = useParams();
  const searchParams2 = useSearchParams();
  console.log(params2);
  // console.log(searchParams2.get("year"));
  const [year, month] = params2.segments;
  return (
    <div>
      Blog from {month}, {year}
    </div>
  );
};

export default singleBlog;
