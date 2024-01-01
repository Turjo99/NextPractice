import React from "react";
import Link from "next/link";
import { title } from "process";

const blogs = [
  {
    id: 1,
    title: "JAN",
    year: 2022,
  },
  {
    id: 2,
    title: "feb",
    year: 2023,
  },
  {
    id: 3,
    title: "March",
    year: 2024,
  },
];

const blog = () => {
  return (
    <div>
      <h1>A blog page</h1>
      <div className="">
        {blogs.map(({ id, year, title }) => (
          <>
            <Link key={id} href={`/blogs/${year}/${title}`}>
              {title}
            </Link>
            ;
          </>
        ))}
      </div>
    </div>
  );
};

export default blog;
