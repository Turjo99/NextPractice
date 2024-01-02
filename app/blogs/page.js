"use client";
import React from "react";
import Link from "next/link";
import Button from "../blogs/Button";

import { useRouter } from "next/navigation";

// const blogs = [
//   {
//     id: 1,
//     title: "JAN",
//     year: 2022,
//   },
//   {
//     id: 2,
//     title: "feb",
//     year: 2023,
//   },
//   {
//     id: 3,
//     title: "March",
//     year: 2024,
//   },
// ];
const blog = async () => {
  // const router = useRouter();
  // console.log(router);
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await res.json();
  return (
    <div>
      <h1>A blog page</h1>
      <div className="">
        {blogs.map(({ id, year, title }) => (
          <>
            <Link
              className=" block border-2 p-3"
              key={id}
              href={`/blogs/${id}`}
            >
              {title}
            </Link>
            ;
          </>
        ))}
        {/* <h1>mapping with button and using useRouter hook</h1> */}
        {/* {blogs.map(({ id, year, title }) => (
          <>
            <button
              className=" block border-2 p-3"
              key={id}
              onClick={() =>
                router.push(`/blogs/${year}/${title}?title=${title}`)
              }
            >
              {title}
            </button>
            ;
          </>
        ))} */}
        {/* <Button></Button> */}
      </div>
    </div>
  );
};

export default blog;
